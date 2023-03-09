/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion:
 * @params:
 * @Date: 2022-08-26 15:19:58
 * @LastEditTime: 2023-03-08 14:35:29
 */

import Swiper from '@/components/Swiper'
import { getBanner, getPersonalized, getNewsong } from '@/servers/api'
import { CaretRightOutlined, PlayCircleOutlined, PlayCircleTwoTone, RightOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'

const { TabPane } = Tabs
const FoundMusic: React.FC = () => {
  const [bannerList, setBannerList] = useState([]) //banner列表
  const [songslist, setSongslist] = useState([])
  const navigate = useNavigate() // 路由跳转

  const getBannerList = async () => {
    const res = await getBanner()
    setBannerList(res.banners)
  }
  const getPersonalizedList = async () => {
    const res = await getPersonalized()
    const arr = res.result.slice(0, 10)
    setSongslist(arr)
  }
  // const getNewsongList = async () => {
  //   const res = await getNewsong()
  //   console.log(res)
  // }

  useEffect(() => {
    getBannerList()
    getPersonalizedList()
    // getNewsongList()
  }, [])

  const BannerSwiper = () => {
    return (
      <div className="banner">
        <Swiper>
          {bannerList.map((item: any) => (
            <div key={item.imageUrl}>
              <img src={item.imageUrl} />
            </div>
          ))}
        </Swiper>
      </div>
    )
  }

  const SongsList = () => {
    return (
      <div className="songslist-box">
        <div className="f-title">
          推荐歌单 <RightOutlined />{' '}
        </div>
        <div className="f-s-box">
          {songslist.map((item: any, index) => {
            return (
              <div
                className="f-s-box-item"
                key={item.name}
                onClick={() => {
                  navigate(`/songsList?id=${item.id}`)
                }}
              >
                <div className="f-s-box-item-img">
                  <img src={item.picUrl} alt="" />
                  <div className="f-s-box-item-playCount">
                    <CaretRightOutlined /> {Math.ceil(item.playCount / 10000)} 万
                  </div>
                  <div className="f-s-box-item-play">
                    <PlayCircleTwoTone style={{ fontSize: '26px', color: 'red' }} twoToneColor="#FF0000" />
                  </div>
                </div>
                <div className="f-s-box-item-desc"> {item.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  const NewMusic = () => {
    return (
      <div className="f-popular-box">
        <div className="f-title">
          最新音乐 <RightOutlined />{' '}
        </div>
      </div>
    )
  }
  return (
    <div className="found-container">
      <Tabs defaultActiveKey="1">
        <TabPane tab="个性推荐" key="1">
          <div className="f-recommend-box">
            <div className="swiper-box">
              {' '}
              <BannerSwiper></BannerSwiper>{' '}
            </div>
            <div className="recommended-songslist">
              <SongsList></SongsList>{' '}
            </div>
            <div>{/* <NewMusic></NewMusic> */}</div>
            <div></div>
          </div>
        </TabPane>
        <TabPane tab="专属定制" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="歌单" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="排行榜" key="4">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="歌手" key="5">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="最新音乐" key="6">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  )
}

export default FoundMusic
