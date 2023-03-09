/*
 * @Author: hekun hekun@chinasoftinc.com
 * @LastEdit: ximenkun
 * @params:
 * @FilePath: \electron-vite-react-main\src\components\Player\usePlayer.tsx
 * @Date: 2022-12-20 11:13:07
 * @Descripttion: 放歌的方法变量==
 */
import to from '@/common/to'
import { useBaseContext } from '@/common/useBaseContent'
import { useRequest } from 'ahooks'
import { useEffect, useRef, useState } from 'react'
import { getLyric, getSongDetail, getSongUrl } from '../../servers/song'
const usePlayer = () => {
  const { currrentSongID }: any = useBaseContext()
  const [currentSong, setCurrentSong] = useState({})
  const [currentSongUrl, setCurrentSongUrl] = useState({})
  const audioInstance = useRef<HTMLAudioElement>(null) // 播放音乐的dom元素
  const [isPlay, setIsPlay] = useState(false)

  const play = async () => {
    const [err, res] = await to(audioInstance.current!.play())
    if (!err) {
      setIsPlay(true)
    }
  }

  const pause = () => {
    audioInstance.current!.pause()
    setIsPlay(false)
  }

  // 获取音乐的详情
  const _getSongDetail = async () => {
    const res: any = await getSongDetail(currrentSongID)
    if (res && res.code === 200) {
      setCurrentSong(res?.songs[0] || {})
    }
  }

  const _getSongUrl = async () => {
    const res = await getSongUrl(currrentSongID)
    setCurrentSongUrl(res?.data[0]?.url || '')
  }

  useEffect(() => {
    _getSongDetail()
    _getSongUrl()
    // audioInstance.current!.play()
  }, [currrentSongID])

  return {
    currrentSongID,
    currentSong,
    currentSongUrl,
    audioInstance,
  }
}

export default usePlayer
