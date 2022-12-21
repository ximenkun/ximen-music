/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion:
 * @params:
 * @Date: 2022-08-30 10:14:44
 * @LastEditTime: 2022-12-19 18:34:28
 */
import './index.scss'
import { useSearchParams } from 'react-router-dom'
import PlayListTable from './components/PlayListTable'
import { getSongListAllMusic, getSongListDetails } from '@/servers/api'
import { useRequest } from 'ahooks'
import SongHeaderDetail from './components/SongHeaderDetail'
import { useState } from 'react'
import BaseTabs from '@/components/Container/BaseTabs'
import Comments from '@/components/Comments'
import Skeleton from 'antd/lib/skeleton'
const SongsList: React.FC = () => {
  const [tabValue, setTabValue] = useState(`list`)
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')
  // 获取歌单
  const { data: list }: any = useRequest(() => getSongListAllMusic(id as string))
  // 获取音乐详情
  const { data: musicDetail, loading }: any = useRequest(() => getSongListDetails(id as string))

  return (
    <div className="song-list-container">
      <Skeleton loading={loading || !musicDetail?.playlist}>
        <SongHeaderDetail data={musicDetail?.playlist} />
      </Skeleton>

      <div
        style={{
          margin: '25px ',
        }}
      >
        <BaseTabs
          onChange={setTabValue}
          list={[
            {
              value: 'list',
              children: '歌曲列表',
              content: <PlayListTable data={list?.songs || []} />,
            },
            {
              value: 'comment',
              children: '评论',
              content: (
                <div>
                  <Comments id={id} type="playlist" />
                </div>
              ),
            },
            {
              value: 'collectors',
              children: <div>收藏者</div>,
              content: <div>2222</div>,
            },
          ]}
          value={tabValue}
        />
      </div>
    </div>
  )
}
export default SongsList
