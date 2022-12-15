/*
 * @Author: hekun hekun@chinasoftinc.com
 * @LastEdit: ximenkun
 * @params:
 * @FilePath: \electron-vite-react-main\src\pages\songsList\components\PlayListTable.tsx
 * @Date: 2022-09-27 16:02:46
 * @Descripttion: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type Iprops = {
  data: any
}
const PlayListTable: React.FC<Iprops> = ({ data }) => {
  return (
    <div>
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
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PlayListTable
