/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion:
 * @params:
 * @Date: 2022-08-24 18:32:27
 * @LastEditTime: 2022-12-16 14:46:36
 */

type SongListItem = {
  id: number
  type: number
  name: string
  coverImgUrl: string
  copywriter: string
  picUrl: string
  playcount: number
  playCount: number
  trackCount: number
  createTime: number
  trackCount: number
  userId: number
  alg: string
  description: string
  tags: string[]
  creator: UserProfile
}

type TupleToUnion<T> = T extends [infer P, ...infer K] ? P | TupleToUnion<K> : never
type RouteItem = {
  name: string
  path: string
  component?: any
  icon?: any
  isMenu?: boolean
}
type api = {
  send(s: string): void
}

declare var api: api
