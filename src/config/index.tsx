/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion:
 * @params:
 * @Date: 2022-08-26 15:36:45
 * @LastEditTime: 2022-08-29 10:23:26
 */

import { Navigate, Route, Routes } from 'react-router-dom'
import { otherRouter, pageRouter } from './routes'
const allRouter = [...pageRouter, ...otherRouter]

export default function index() {
  // 提前封装好的路由配置函数
  const renderRouter = (router: any) =>
    router.map((item: any, index: any) =>
      item.path ? (
        <Route key={index} path={item.path} element={item.element} {...(item.props = {})}>
          {item.children && renderRouter(item.children)}
        </Route>
      ) : (
        <Route key={index} path={item.from} element={<Navigate to={item.to} replace />} />
      )
    )

  return <Routes>{renderRouter(allRouter)}</Routes>
}
