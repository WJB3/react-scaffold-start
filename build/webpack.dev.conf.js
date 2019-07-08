const webpack=require('webpack');

const merge=require('webpack-merge');

const config=require('./config');

const baseWebpackConfig=require('./webpack.base.conf');

const HtmlWebpackPlugin=require('html-webpack-plugin');

const FriendlyErrorsWebpackPlugin=require('friendly-errors-webpack-plugin');

module.exports=merge(baseWebpackConfig,{
    mode:'development',
    devtool:config.DEVELOPMENT_DEVTOOL,
    devServer:{
        port:config.DEV_PORT,
        overlay:config.DEV_OVERLAY,
        host:config.DEV_HOST,
        disableHostCheck:config.DEV_IS_DISABLEDHOSTCHECK,
        open:config.DEV_AUTO_OPEN,
        noInfo:config.DEV_NOINFO,
        https:config.DEV_IS_HTTPS,
        hot:config.DEV_IS_HOT,
        compress:config.DEV_IS_COMPRESS,
        progress:config.DEV_IS_PROGRESS,
        quiet:config.DEV_IS_QUIER,
        useLocalIp:config.DEV_IS_USELOCALIP,
        proxy:config.DEV_PROXY
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:config.DEV_HTML_PLUGIN_PATH,//开发环境需要路径
            inject:config.DEV_HTML_PLUGIN_INJECT,//所有javascript资源将被放置在body元素的底部
            minify:{
                html5:true,
                collapseWhitespace: true, //把生成的 index.html 文件的内容的没用空格去掉，减少空间
            },
            title:config.DEV_HTML_TITLE,
            hash:true,
            favicon:config.DEV_HTML_ICO,//将给定的favicon路径添加到输出HTML
            showErrors:true,
        }),
         //热更新
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: [`You application is running here http://localhost:${config.DEV_PORT}`],
                notes: ['Some additionnal notes to be displayed unpon successful compilation']
            },
            onErrors: function (severity, errors) {},
            clearConsole: true,
            additionalFormatters: [],
            additionalTransformers: []
        })
    ]
})
