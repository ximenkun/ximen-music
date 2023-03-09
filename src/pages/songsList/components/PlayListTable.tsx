/*
 * @Author: hekun hekun@chinasoftinc.com
 * @LastEdit: ximenkun
 * @params:
 * @FilePath: \electron-vite-react-main\src\pages\songsList\components\PlayListTable.tsx
 * @Date: 2022-09-27 16:02:46
 * @Descripttion: 表格列表
 */
import { useBaseContext } from '@/common/useBaseContent'
import usePlayer from '@/components/Player/usePlayer'
import SongTimeBar from './SongTimeBar'
type Iprops = {
  data: any
}
const PlayListTable: React.FC<Iprops> = ({ data }) => {
  const { setCurrrentSongID }: any = useBaseContext()

  return (
    <div className="m-t-20">
      <table className="play-list-table">
        <thead>
          <tr>
            <th></th>
            <th>操作</th>
            <th>歌名</th>
            <th>歌手</th>
            <th>专辑</th>
            <th>时间</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: any) => (
            <tr
              key={item.id}
              onDoubleClick={() => {
                setCurrrentSongID(item.id)
              }}
            >
              <td>{index + 1}</td>
              <td></td>
              <td>{item.name}</td>
              <td>{item.ar?.[0].name}</td>
              <td>{item.al.name}</td>
              <td>
                <SongTimeBar dt={item.dt} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PlayListTable
