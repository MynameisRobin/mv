/**
 * 请求响应成功参数验证 code === 0
 * @type {null}
 *
 *  @example
 *
 *  // url path传参
 *  // data 接口返回的数据全量
 *  AXIOS_SUCCESS = data => {
 *      return data.success
 *  }
 */
// export const AXIOS_SUCCESS = null

export const AXIOS_SUCCESS = data => {
    return data.succ
}


// 当前项目运行环境
const _Env = (process.env.NODE_ENV === 'development' || process.env.VUE_APP_BUILD === 'test')

/**
 *  接口请求前缀
 */
export const API_HOST = _Env ? 'https://wxapptest.tpi.cntaiping.com' : 'https://wxapp.tpi.cntaiping.com'


/**
 * 电子保单下载前缀
 */
export const DOWNLOAD_HOST = _Env ? 'http://wxapptest.tpi.cntaiping.com:7006' : 'https://pay.tpi.cntaiping.com'