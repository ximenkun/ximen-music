/*
 * @Author: hekun hekun@chinasoftinc.com
 * @LastEdit: ximenkun
 * @params:
 * @FilePath: \electron-vite-react-main\src\pages\songsList\components\SongHeaderDetail.tsx
 * @Date: 2022-12-16 10:30:53
 * @Descripttion: 推荐歌单列表 头部音乐描述组件
 */
import { Button, Tag } from 'antd'
import { FC, ReactElement } from 'react'
import Image from '@/components/Image'
import "../index.scss"
import dayjs from 'dayjs'
import { CaretRightOutlined, DownloadOutlined, PlusOutlined, ShareAltOutlined } from '@ant-design/icons'
import PalyCount from './Playcount'
interface IProps {
  data: SongListItem;
}
const SongHeaderDetail: FC<IProps> = (props): ReactElement => {
  const { name, description, coverImgUrl, creator, createTime, tags, trackCount, playCount } = props?.data || {}
  return (
    <div className='s-l-header-container'>
      <Image
        src={coverImgUrl}
        style={{
          width: 210,
        }}
      />
      <div className='h-right'>
        <div className='a-title'> <div>歌单</div><div className='m-l-20 '>{name} </div></div>
        <div className='a-avatarUrl'>
          <Image src={creator?.avatarUrl}
            className="avatarUrl"
            style={{
              width: 40,
            }} />
          <span className='m-l-20'>{creator?.nickname}</span>
          <span className='m-l-20 f-s-12'>{dayjs(createTime).format("YYYY-MM-DD")} 创建</span>
        </div>

        <div>
          <Button icon={<CaretRightOutlined />} danger >播放全部</Button>
          <Button icon={<PlusOutlined />} danger className='m-l-20 '>收藏</Button>
          <Button icon={<ShareAltOutlined />} danger className='m-l-20 '>分享</Button>
          <Button icon={<DownloadOutlined />} danger className='m-l-20 '> 下载</Button>
        </div>
        <div >
          标签:
          <span className='m-l-20 '>
            {
              tags?.map((item) => (
                <Tag color="orange" key={item}>
                  {item}
                </Tag>
              ))
            }
          </span>
        </div>
        <div >
          <span>歌曲：{trackCount}</span>
          <span className='m-l-20'>
            播放：
            <PalyCount count={playCount} />
          </span>
        </div>
        <div className='ellipsis'> 简介： {description}</div>
      </div>
    </div >
  )
}

export default SongHeaderDetail
