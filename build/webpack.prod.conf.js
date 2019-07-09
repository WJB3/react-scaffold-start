const merge=require('webpack-merge');
const baseWebpackConfig=require('./webpack.base.conf.js');
const webpack=require('webpack');
const path=require('path');
const DIST_PATH=path.resolve(__dirname,"../dist");

module.exports=merge(baseWebpackConfig,{
    mode:"production",//会将 process.env.NODE_ENV 的值设为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin.
    output:{
        filename:"js/[name].[hash].js",
        path:DIST_PATH
    },
});