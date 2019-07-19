const webpack=require('webpack');

const merge=require('webpack-merge');

const config=require('./config');

const baseWebpackConfig=require('./webpack.base.conf');

const HtmlWebpackPlugin=require('html-webpack-plugin');
const utils=require("./utils")

const FriendlyErrorsWebpackPlugin=require('friendly-errors-webpack-plugin');

module.exports=merge(baseWebpackConfig,{
    mode:'development',
    devtool:config.development_devtool,
    module:{
        rules:utils.styleLoaders({sourceMap: config.dev_is_useSourceMap,usePostCSS:true,useTypescriptCssModule:false})
    },
    devServer:{
        port:config.dev_port,
        overlay:config.dev_overlay,
        host:config.dev_host,
        disableHostCheck:config.dev_is_disabledcheckhost,
        open:config.dev_auto_open,
        noInfo:config.dev_noinfo,
        https:config.dev_is_https,
        hot:config.dev_is_hot,
        compress:config.dev_is_compress,
        progress:config.dev_is_progress,
        quiet:config.dev_is_quiet,
        useLocalIp:config.dev_is_uselocalip,
        proxy:config.dev_proxy
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:config.dev_html_template_path,
            title:config.dev_html_title,
            hash:true,
            favicon:config.dev_html_ico,
            showErrors:true,
            inject:config.dev_html_js_inject,//所有javascript资源将被放置在body元素的底部
            minify:{
                html5:true,
                collapseWhitespace: true, //把生成的 index.html 文件的内容的没用空格去掉，减少空间
            }
        }),
         //热更新
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: [`You application is running here http://localhost:${config.dev_port}`],
                notes: ['Some additionnal notes to be displayed unpon successful compilation']
            },
            onErrors: function (severity, errors) {},
            clearConsole: true,
            additionalFormatters: [],
            additionalTransformers: []
        }),
        new webpack.LoaderOptionsPlugin({
            options:{
            }
        })
    ]
})
