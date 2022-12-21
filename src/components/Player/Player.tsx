/*
 * @Author: hekun hekun@chinasoftinc.com
 * @LastEdit: ximenkun
 * @params:
 * @FilePath: \electron-vite-react-main\src\components\Player\Player.tsx
 * @Date: 2022-12-19 18:23:19
 * @Descripttion: 音乐播放
 */


import { FC, ReactElement } from 'react'
import "./index.scss"
import usePlayer from './usePlayer';

type PlayerProps = any
const Player: FC<PlayerProps> = (): ReactElement => {

  usePlayer()


  return <div className='footer-player'>播放音乐</div>
}

export default Player
