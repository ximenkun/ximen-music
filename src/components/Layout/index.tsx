/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion:
 * @params:
 * @Date: 2022-08-26 14:39:11
 * @LastEditTime: 2022-09-09 16:58:46
 */
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React, { useMemo, useState } from 'react'
import './index.scss'
import RouterConfig from '../../config/index'
import { HashRouter, NavLink } from 'react-router-dom'
import { pageRouter } from '../../config/routes'

const { Sider } = Layout

const LayoutApp: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout>
      <HashRouter>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          {pageRouter.map(({ name, path, isMemu }) => {
            return (
              <div className="left-meau-item" key={name}>
                {isMemu ? null : (
                  <NavLink to={path} key={name}>
                    {name}
                  </NavLink>
                )}
              </div>
            )
          })}
          <button
            onClick={() => {
              console.log('api')
              api.send('openDevtools')
            }}
          >
            open
          </button>
        </Sider>
        <Layout>{<RouterConfig />}</Layout>
      </HashRouter>
    </Layout>
  )
}
export default LayoutApp
