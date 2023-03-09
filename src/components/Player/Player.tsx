/*
 * @Author: hekun hekun@chinasoftinc.com
 * @LastEdit: ximenkun
 * @params:
 * @FilePath: \electron-vite-react-main\src\components\Player\Player.tsx
 * @Date: 2022-12-19 18:23:19
 * @Descripttion: 音乐播放
 */
import { FC, ReactElement, useState } from 'react'
import './index.scss'
import usePlayer from './usePlayer'
import Image from '@/components/Image'
import Control from './Control'
type PlayerProps = any
const Player: FC<PlayerProps> = (): ReactElement => {
  const { currentSong, currentSongUrl, audioInstance }: any = usePlayer()

  console.log(currentSongUrl)

  return (
    <div className="footer-player">
      <audio src={currentSongUrl} ref={audioInstance} controls />
      {currentSong?.name ? (
        <div className="f-picurl">
          <Image src={currentSong?.al.picUrl} style={{ width: '50px' }}></Image>
          <div className="m-l-20">
            <div>{currentSong?.name}</div>
            <div>{currentSong?.ar[0].name}</div>
          </div>
        </div>
      ) : (
        <div> null</div>
      )}

      <Control song={currentSong} />
    </div>
  )
}

export default Player
