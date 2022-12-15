/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion:
 * @params:
 * @Date: 2022-08-26 15:07:44
 * @LastEditTime: 2022-09-09 16:57:42
 *
 */
import FindMusic from '../pages/foundMusic'
import Follow from '../pages/follow'
import Podcast from '../pages/podcast'
import SongsList from '@/pages/songsList'
const pageRouter = [
  {
    path: '/foundMusic',
    name: '发现音乐',
    element: <FindMusic />,
  },
  {
    path: '/podcast',
    name: '博客',
    element: <Podcast />,
  },
  {
    path: '/follow',
    name: '关注',
    element: <Follow />,
  },
  {
    path: '/songsList',
    name: '音乐列表',
    isMemu: true,
    element: <SongsList />,
  },
]
const otherRouter = [
  {
    from: '*',
    to: '/foundMusic',
  },
]

export { pageRouter, otherRouter }
