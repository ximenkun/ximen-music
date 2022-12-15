/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion:
 * @params:
 * @Date: 2022-08-30 10:14:44
 * @LastEditTime: 2022-09-27 16:24:18
 */
import { Button } from 'antd'
import './index.scss'
import { useParams, useSearchParams } from 'react-router-dom'
import PlayListTable from './components/PlayListTable'
import { getSongListAllMusic } from '@/servers/api'
import { useEffect } from 'react'
const SongsList: React.FC = () => {
  const [searchParams] = useSearchParams()
  // const id = searchParams.get('id')
  const id = '24381616'
  console.log(id)
  const getData = async () => {
    const res = await getSongListAllMusic(id)
    console.log(res)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <div>
        <div>27</div>
        <div>每日歌曲推荐</div>
        <div>根据你的音乐口味生成,每天6:00更新</div>
        <Button>播放全部</Button>
        <Button>收藏全部</Button>
      </div>

      <PlayListTable data={[1, 2, 3, 4]}></PlayListTable>
    </div>
  )
}
export default SongsList
