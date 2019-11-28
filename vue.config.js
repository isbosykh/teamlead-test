module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/teamlead-test/'
        : '/',
    outputDir: 'docs',
    assetsDir: "assets"
};
