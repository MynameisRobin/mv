/**
 *   $axios请求模块, 底层调用axios发送请求，做了响应数据的适配，并支持 url path 传参
 *  @module utils/
 */

import axios from './axios'
import * as config from '../../../config/index'


/**
 * 与后端约定好$axios请求成功时响应json对象code的值。 默认值可在 ../config/index.js 中配置
 * @const
 * @type {function}
 * @default null
 */
const AXIOS_SUCCESS = config.AXIOS_SUCCESS

/**
 * ajax 请求的默认参数
 * @const
 * @type {{url: null, method: string, params: null, data: null}}
 * @property {string} url  - 请求地址, 必要参数
 * @property {string} method - 请求方法类型，默认：get
 * @property {object} params - path参数，如: /api/user/:id, 不是url查询参数, 默认：null
 * @property {object} data - 请求发送数据，get head delete请求是查询参数，其他类型是post数据, 默认：null, 支持 Object/URLSearchParams/FormData
 */
const defaultConfig = {
    url: null,
    method: 'get',
    params: null, // 这里不是查询参数，是path参数，如: /api/user/:id
    data: null // get head delete请求是查询参数，其他类型是post数据
}

/**
 * 处理响应的数据
 * @param {Object} res 响应原始数据
 * @param {function} resolve
 * @param {function} reject
 */
function processData(res, resolve, reject) {
    if (res.data) {
        if (AXIOS_SUCCESS ? AXIOS_SUCCESS(res.data) : (Number.parseInt(res.data.code) === 0)) {
            resolve(res.data.data || res.data)
        } else {
            reject(res.data)
        }
    }
}

/**
 *
 * 构建通用适配处理axios返回数据Promise，判断axios响应的json对象code属性，如果与 [AXIOS_SUCCESS] 的值不一致即 reject
 * @inner
 * @param {string} type 请求方法类型
 * @param {string} url 请求url
 * @param {Object} data 请求发送数据
 * @param {Object} config axios配置选项
 * @returns {Promise} Promise 实例
 */
function createPromise(type, url, data, config) {

    return new Promise(function(resolve, reject) {
        const http = ['get', 'head', 'delete'].includes(type) ?
            axios[type](url, {...config, params: data }) :
            axios[type](url, data, config)
        http.then(function(res) {
            processData(res, resolve, reject)
        }).catch(function(res) {
            reject(res)
        })
    })
}


/**
 * $axios 函数
 * @export
 * @returns {Promise} promise
 *
 *  @example
 *
 *  // 基础用法
 *  $axios({
 *    url: '/api/users'
 *  })
 *  .then(res => {
 *    // to do something...
 *  })
 *  .catch(e => {
 *    // to do something...
 *  })
 *
 *  @example
 *
 *  // url path传参
 *  $axios({
 *    method: 'get',
 *    url: '/api/users/:id',
 *    params: {
 *      id: '123'
 *    }
 *  })
 *
 *  @example
 *
 *  // 发送数据
 *  $axios({
 *    url: '/api/users',
 *    method: 'post',
 *    data: {
 *      name: 'kenny',
 *      password: '123456'
 *    }
 *  })
 *
 *  @example
 *  // 设置请求头
 *  $axios({
 *    url: '/api/users/',
 *    data: {
 *      page: 1,
 *      limit: 10
 *    },
 *    headers: {
 *      'Content-type': 'application/x-www-form-urlencoded'
 *    }
 *  })
 *
 */
export default function(options) {
    // 处理默认参数，传参和默认参数合并
    let config = Object.assign({}, defaultConfig, options || {})
        // 必须要传入url
    if (!config.url) {
        throw new Error('$axios url is required!')
    }
    let url = config.url
    let type = config.method.toLowerCase()
    let data = config.data

    delete config.url
    delete config.type
    delete config.data

    return createPromise(type, url, data, config)
}