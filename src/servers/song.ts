/*
 * @Author: hekun hekun@chinasoftinc.com
 * @LastEdit: ximenkun
 * @params:
 * @FilePath: \electron-vite-react-main\src\servers\song.ts
 * @Date: 2022-12-19 18:27:54
 * @Descripttion:   播放音乐的接口
 */

import httpRequest from '@/utils/request'

// 获取歌曲详情
export const getSongDetail = (ids: number) => {
  return httpRequest({
    method: 'get',
    url: '/song/detail',
    params: { ids },
  })
}

export const getSongUrl = (id: number) => {
  return httpRequest({
    method: 'get',
    url: '/song/url',
    params: { id },
  })
}

// 获取歌词
export const getLyric = (id: number) => {
  return httpRequest({
    method: 'get',
    url: '/lyric',
    params: { id },
  })
}
