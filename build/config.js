const path=require('path')
const SRC_PATH=path.resolve(__dirname,"../src");
const ENTRY_PATH='./src/index.js';
const RESOLVE_EXTENSIONS_GROUP=['.js'];
const RESOLVE_ALIAS={'@':SRC_PATH}
const RULES=[{test:'js|jsx',use:'babel-loader',exclude:'/node_modules/',include:`${SRC_PATH}`}];

module.exports={
    src_path:path.resolve(__dirname,"../src"),
    entry_path:'./src/index.js',
    resolve_extensions_group:['.js'],
    resolve_alias:{'@':SRC_PATH},
    rules:[],
    development_devtool:'cheap-module-eval-source-map',
    build_devtool:'cheap-module-source-map',
    dev_port:8888,
    dev_overlay:{
        warnings:false,
        errors:true
    },
    dev_host:"192.168.0.107",
    dev_is_disabledcheckhost:true,
    dev_auto_open:true,
    dev_noinfo:true,
    dev_is_https:false,
    dev_is_hot:false,
    dev_is_compress:true,
    dev_is_progress:true,
    dev_is_quiet:true,
    dev_is_uselocalip:false,
    dev_proxy:{
        "/api":{
            target:"http://localhost:8080",
            changeOrigin:true,
            pathRewrite:{"^api":"/api"}
        }
    },
    dev_html_template_path:'./src/public/index.ejs',
    dev_html_js_inject:'body',
    dev_html_title:'吴家宝搭建的React简易项目',
    dev_html_ico:'src/assets/favicon-flash.ico'
}