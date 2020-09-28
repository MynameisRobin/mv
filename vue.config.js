module.exports = {
    /*
     * 部署应用时的基本 URL
     */
    publicPath: process.env.NODE_ENV === 'development' ? '/' : '/web/mv',

    /**
     * 生成的生产环境构建文件的目录
     */
    outputDir: 'dist',

    productionSourceMap: false,

    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'mv,一个基于vant + vue的工程base'
                return args
            })
    }
}