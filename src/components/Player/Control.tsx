/*
 * @Author: hekun hekun@chinasoftinc.com
 * @LastEdit: ximenkun
 * @params:
 * @FilePath: \electron-vite-react-main\src\components\Player\Control.tsx
 * @Date: 2022-12-23 10:34:50
 * @Descripttion:控制器
 */
import SongTimeBar from '@/pages/songsList/components/SongTimeBar'
import { CaretRightOutlined, FastBackwardOutlined, FastForwardOutlined, PauseOutlined } from '@ant-design/icons'
import { FC, ReactElement, useRef, useState } from 'react'
import './index.scss'
import usePlayer from './usePlayer'

type ControlProps = any
const Control: FC<ControlProps> = ({ song }): ReactElement => {
  const boxElement = useRef<HTMLDivElement>(null)
  const [playStatus, setPlayStatus] = useState(false)
  return (
    <div className="player-box">
      <div className="player-control">
        <div>
          <FastBackwardOutlined style={{ fontSize: '20px' }} />
        </div>
        <div className="play">
          {playStatus ? (
            <CaretRightOutlined
              style={{ fontSize: '26px' }}
              onClick={() => {
                setPlayStatus(false)
              }}
            />
          ) : (
            <PauseOutlined
              style={{ fontSize: '26px' }}
              onClick={() => {
                setPlayStatus(true)
              }}
            />
          )}
        </div>
        <div>
          <FastForwardOutlined style={{ fontSize: '20px' }} />
        </div>
      </div>
      <div className="pl-progress">
        <span>
          <SongTimeBar dt={0 * 1000} />
        </span>
        <div
          className="progress"
          ref={boxElement}
          onClick={(e) => {
            const layerX = e.pageX - (boxElement.current?.offsetLeft || 0)
          }}
          style={{
            width: 300,
          }}
        />
        <span>
          <SongTimeBar dt={song.dt} />
        </span>
      </div>
    </div>
  )
}

export default Control
