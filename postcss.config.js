/**
 * 页面样式px to rem
 */
const baseConfig = require('./config/base')
module.exports = ({ file }) => {
    let _rootValue, pxtorem = {}
    if (file && file.dirname && file.dirname.includes('node_modules\\vant')) {
        _rootValue = 375
    } else {
        _rootValue = baseConfig.design_width || 750
    }
    // 是否开启 px 转 rem
    if (baseConfig.open_px_rem) {
        pxtorem = {
            'postcss-pxtorem': {
                rootValue: _rootValue / 10,
                propList: ['*'],
                // 该项仅在使用 Circle 组件时需要
                // 原因参见 https://github.com/youzan/vant/issues/1948
                selectorBlackList: ['van-circle__layer']
            }
        }
    }
    return {
        plugins: {
            'autoprefixer': {
                // browsers: ['Android >= 4.0', 'iOS >= 7']
            },
            ...pxtorem
        }
    }
}