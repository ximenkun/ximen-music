/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion:
 * @params:
 * @Date: 2022-08-25 17:21:22
 * @LastEditTime: 2022-10-13 11:16:20
 */
import httpRequest from '@/utils/request'

// 二维码 key 生成接口
export const getLoginQrKey = (timestamp: number | undefined) => {
  return httpRequest({
    url: '/login/qr/key?timestamp=' + timestamp,
  })
}

// 二维码生成接口
export const getCreateQr = (key: string) => {
  return httpRequest({
    url: '/login/qr/create',
    params: { key },
  })
}

// 二维码检测扫码状态接口
export const checkQrLogin = (key: string, timestamp: number | undefined) => {
  return httpRequest({
    url: '/login/qr/check',
    params: { key, timestamp },
    method: 'post',
  })
}
