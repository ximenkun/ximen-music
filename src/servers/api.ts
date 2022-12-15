/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion:
 * @params:
 * @Date: 2022-08-25 16:34:46
 * @LastEditTime: 2022-09-27 16:18:36
 */
import httpRequest from '@/utils/request'

// 获取banner的数据
export const getBanner = () => {
  return httpRequest({
    method: 'get',
    url: '/banner',
  })
}

// 推荐歌单
export const getPersonalized = () => {
  return httpRequest({
    method: 'get',
    url: '/personalized',
  })
}

// 最新音乐
export const getNewsong = () => {
  return httpRequest({
    method: 'get',
    url: '/personalized/newsong',
  })
}

export const getHotList = () => {
  return httpRequest({
    method: 'get',
    url: '/artist/top/song?id=2116',
  })
}

// 根据id获取音乐列表
export const getSongListAllMusic = (id: any) => {
  return httpRequest({
    method: 'get',
    url: '/playlist/track/all',
    params: { id, limit: 1000 },
  })
}
