/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion:
 * @params:
 * @Date: 2022-08-25 09:46:33
 * @LastEditTime: 2022-09-09 13:50:14
 */

import { BorderOutlined, CloseOutlined, MinusOutlined, SkinTwoTone } from '@ant-design/icons'
import 'antd/dist/antd.css'
import './index.scss'
import { getHotList } from '../../servers/api'
import ChangeTheme from './ChangeTheme'
import { useBaseContext } from '@/common/useBaseContent'
import Login from '../Login/login'

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <div className="left-icon">
        <img src="../../../public/logo.png" alt="" className="logo" />
        <span>西门音乐</span>
      </div>
      <div className="right-box">
        <Login></Login>
        <ChangeTheme />
        <div className="right-box-icon">
          <div className="right-icon">
            <MinusOutlined
              onClick={() => {
                api.send('window-min')
              }}
            />
            <BorderOutlined
              style={{ fontSize: '12px' }}
              onClick={() => {
                api.send('window-max')
              }}
            />
            <CloseOutlined
              onClick={() => {
                api.send('window-close')
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
