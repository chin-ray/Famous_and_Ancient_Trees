import request from '../utils/axiosReq'
import { filterParams } from './config'

/**
 * 异常信息
 */
export function getAbnormalListReq(data) {
    return request({
        url: '/abnormal/getAbnormalList',
        data: filterParams(data),
        method: 'post',
    })
}
export function getAbnormalCountReq() {
    return request({
        url: '/abnormal/getAbnormalCount',
        method: 'get',
    })
}
export function updateAbnormalReq(data) {
    let url = '/abnormal/updateAbnormal'
    let method = 'put'
    if (!data.id) {
        url = '/abnormal/addAbnormal'
        method = 'post'
    }
    return request({
        url: url,
        data: filterParams(data),
        method: method,
    })
}
export function deleteAbnormalReq(data) {
    return request({
        url: `/abnormal/deleteAbnormal?id=${data.id}&tree_id=${data.tree_id}`,
        method: 'delete',
    })
}

// 处理异常
export function controllAbnormalReq(data) {
    return request({
        url: '/abnormal/controllAbnormal',
        data: filterParams(data),
        method: 'post',
    })
}


// 近30天内新增异常情况
export function getAbnormalListEMReq() {
    return request({
        url: '/abnormal/getAbnormalListEM',
        method: 'get',
    })
}
// 当月异常情况总数
export function getAbnormalNumberTMReq() {
    return request({
        url: `/abnormal/getAbnormalNumberTM`,
        method: 'get'
    })
}
// 上月异常情况总数
export function getAbnormalNumberLMReq() {
    return request({
        url: `/abnormal/getAbnormalNumberLM`,
        method: 'get'
    })
}