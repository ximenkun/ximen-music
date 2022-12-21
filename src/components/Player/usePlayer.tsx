/*
 * @Author: hekun hekun@chinasoftinc.com
 * @LastEdit: ximenkun
 * @params:
 * @FilePath: \electron-vite-react-main\src\components\Player\usePlayer.tsx
 * @Date: 2022-12-20 11:13:07
 * @Descripttion: 放歌的方法变量==
 */
import { useBaseContext } from '@/common/useBaseContent'
import { getLyric, getSongDetail, getSongUrl } from '../../servers/song'
const usePlayer = () => {
  const { currrentSongID }: any = useBaseContext()
  console.log(currrentSongID)
  return {
    currrentSongID,
  }
}

export default usePlayer
