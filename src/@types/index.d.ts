/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion:
 * @params:
 * @Date: 2022-08-24 18:32:27
 * @LastEditTime: 2022-08-26 15:08:12
 */

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
