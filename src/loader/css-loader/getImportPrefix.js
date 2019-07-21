module.exports = function getImportPrefix(loaderContext, query) {
    if (query.importLoaders === false) {
        return "";
    }

    console.log("loaderContext"+loaderContext)

    var importLoaders = parseInt(query.importLoaders, 10) || 0;
    var loadersRequest = loaderContext.loaders.slice(
        loaderContext.loaderIndex,
        loaderContext.loaderIndex + 1 + importLoaders
    ).map(function (x) { return x.request }).join("!");
    return "-!" + loadersRequest + "!";
};