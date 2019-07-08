
const config=require('./config');

module.exports={
    entry:{
        main:config.ENTRY_PATH
    },
    resolve:{
        extensions:config.RESOLVE_EXTENSIONS_GROUP,
        alias:config.RESOLVE_ALIAS
    },
    module:{
        rules:config.RULES
    }
}