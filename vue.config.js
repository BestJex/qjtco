const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');
module.exports = {
    assetsDir: "static", //静态资源打包到static文件夹
    productionSourceMap: false,
    devServer: {
        proxy: 'http://127.0.0.1:3000'//json-server启动在3000端口，在此处配置vue-cli的代理服务
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV !== 'production') return;
        return {
            plugins: [
                new PrerenderSPAPlugin({
                    // 生成文件的路
                    // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
                    staticDir: path.join(__dirname, 'dist'),
                    // 此处填写需要预渲染页面路由path
                    routes: ['/', '/webSite', '/applet', '/account', '/appDevelopment', '/brand', '/about', '/employ', '/kit', '/contacts'],
                    renderer: new Renderer({
                        inject: {
                            foo: 'bar'
                        },
                        headless: false,
                        // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
                        renderAfterDocumentEvent: 'render-event'
                    })
                }),
            ],
        };
    }
}