/*
 * @Author: hekun hekun@chinasoftinc.com
 * @LastEdit: ximenkun
 * @params:
 * @FilePath: \electron-vite-react-main\src\common\useGlobalPlay.ts
 * @Date: 2022-12-20 10:40:21
 * @Descripttion:
 */
import { useLocalStorage } from '@mantine/hooks'
import { useState } from 'react'

export default function useGlobalPlay() {
  const [isPlay, setIsPlay] = useState(false) // 是否在播放
  const [currrentSongID, setCurrrentSongID] = useState<string>('') // 当前播放的歌曲id
  const [currentSong, setCurrentSong] = useLocalStorage<any>({
    key: 'currentSong',
    defaultValue: {} as any,
  }) // 当前播放的歌曲
  const [lyric, setLyric] = useLocalStorage<any[]>({
    key: 'lyric',
    defaultValue: [],
  }) // 歌词
  const [playDetailVisible, setPlayDetailVisible] = useState(false)

  const togglePlayDetailVisible = () => {
    setPlayDetailVisible(!playDetailVisible)
  }
  const [currentTime, _setCurrentTime] = useLocalStorage({
    key: 'currentTime',
    defaultValue: 0,
  })
  return {
    currrentSongID,
    setCurrrentSongID,
    isPlay,
    setIsPlay,
    currentSong,
    setCurrentSong,
    setLyric,
    lyric,
    playDetailVisible,
    togglePlayDetailVisible,
    currentTime,
    _setCurrentTime,
  }
}
