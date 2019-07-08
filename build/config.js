const path=require('path')
const SRC_PATH=path.resolve(__dirname,"../src");
const ENTRY_PATH='./src/index.js';
const RESOLVE_EXTENSIONS_GROUP=['.js'];
const RESOLVE_ALIAS={'@':SRC_PATH}
const RULES=[{test:'js|jsx',use:'babel-loader',exclude:'/node_modules/',include:`${SRC_PATH}`}];

 

module.exports={
    SRC_PATH:SRC_PATH,
    ENTRY_PATH:ENTRY_PATH,
    RESOLVE_EXTENSIONS_GROUP:RESOLVE_EXTENSIONS_GROUP,
    RESOLVE_ALIAS:RESOLVE_ALIAS,
    RULES:RULES,
    DEVELOPMENT_DEVTOOL:'cheap-module-eval-source-map',
    BUILD_DEVTOOL:'cheap-module-source-map',
    DEV_PORT:10000,
    DEV_OVERLAY:{
        warnings:false,
        errors:true
    },
    DEV_HOST:"localhost",
    DEV_IS_DISABLEDHOSTCHECK:true,
    DEV_AUTO_OPEN:true,
    DEV_NOINFO:true,
    DEV_IS_HTTPS:false,
    DEV_IS_HOT:false,
    DEV_IS_COMPRESS:true,
    DEV_IS_PROGRESS:true,
    DEV_IS_QUIER:true,
    DEV_IS_USELOCALIP:false,
    DEV_PROXY:{
        "/api":{
            target:"http://localhost:8080",
            changeOrigin:true,
            pathRewrite:{"^api":"/api"}
        }
    },
    DEV_HTML_PLUGIN_PATH:'src/public/index.html',
    DEV_HTML_PLUGIN_INJECT:'body',
    DEV_HTML_TITLE:'吴家宝搭建的React简易项目',
    DEV_HTML_ICO:'assets/favicon-flash.ico'
}