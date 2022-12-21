/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion:
 * @params:
 * @Date: 2022-08-25 11:25:10
 * @LastEditTime: 2022-12-16 13:42:45
 */
import {
  CloudOutlined,
  HeartOutlined,
  MenuUnfoldOutlined,
  NotificationOutlined,
  PauseCircleFilled,
  PlayCircleFilled,
  StepBackwardOutlined,
  StepForwardOutlined,
  UsergroupDeleteOutlined,
} from '@ant-design/icons'
import { Popover, Progress } from 'antd'
import 'antd/dist/antd.css'
import { useEffect, useState } from 'react'
import './index.scss'

const Footer: React.FC = () => {
  const [percent, setPercent] = useState(30)
  const [playStatus, setPlayStatus] = useState(false)
  const [playMode, setPlayMode] = useState(0)
  const [visible, setVisible] = useState(false) // 气泡卡片的状态

  useEffect(() => {
    if (playMode > 3) {
      setPlayMode(0)
    }
  }, [playMode])

  const playModes = [
    {
      icon: 'icon-liebiaoshunxu',
      label: '顺序播放',
    },
    {
      icon: 'icon-hanhan-01-01',
      label: '单曲循环',
    },
    {
      icon: 'icon-suijibofang',
      label: '随机播放',
    },
    {
      icon: 'icon-liebiaoxunhuan',
      label: '列表循环',
    },
  ]

  // 点击旁白影藏弹框
  const handleVisibleChange = (newVisible: boolean) => {
    setVisible(newVisible)
  }
  return (
    <div className="Footer-container">
      <div className="footer-left-box">
        <div className="music-img">
          <img src="../../../public/ride.png" alt="" />
        </div>
        <div>
          <div className="music-title">
            <div>11111111113333333</div>
            <span className="heartOutlined">
              <HeartOutlined />
            </span>
          </div>
          <span>周深</span>
        </div>
      </div>
      <div className="footer-middle-box">
        <div className="music-controller">
          <div className="playMode">
            {playModes.map((item, index) => {
              return (
                <div key={item.label}>
                  {playMode === index ? (
                    <div style={{ fontSize: '18px' }}>
                      <Popover content={item.label} trigger="click" open={visible} onOpenChange={handleVisibleChange}>
                        <i
                          className={`iconfont  ${item.icon}`}
                          onClick={() => {
                            let num = playMode + 1
                            setPlayMode(num)
                            setVisible(true)
                          }}
                        ></i>
                      </Popover>
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>

          <StepBackwardOutlined />
          <div className="play">
            {playStatus ? (
              <PlayCircleFilled
                style={{ fontSize: '22px', color: '#ccc' }}
                onClick={() => {
                  setPlayStatus(false)
                }}
              />
            ) : (
              <PauseCircleFilled
                style={{ fontSize: '22px', color: '#ccc' }}
                onClick={() => {
                  setPlayStatus(true)
                }}
              />
            )}
          </div>
          <StepForwardOutlined />
          <span className="lyric">词</span>
        </div>
        <div className="music-progress">
          <span>0:00</span>
          <Progress percent={percent} strokeColor="red" showInfo={false} strokeLinecap="butt" />
          <span>4:10</span>
        </div>
      </div>
      <div className="footer-right-box">
        <div className="tone-quality">标准</div>
        <CloudOutlined style={{ fontSize: '20px' }} />
        <NotificationOutlined style={{ fontSize: '20px' }} />
        <UsergroupDeleteOutlined style={{ fontSize: '20px' }} />
        <MenuUnfoldOutlined style={{ fontSize: '20px' }} />
      </div>
    </div>
  )
}

export default Footer
