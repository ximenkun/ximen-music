/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion:
 * @params:
 * @Date: 2022-08-25 17:31:05
 * @LastEditTime: 2022-12-16 13:41:36
 */

import { SkinTwoTone } from '@ant-design/icons'
import { ConfigProvider, Dropdown } from 'antd'
import { useEffect, useState } from 'react'
import './index.scss'

const ChangeTheme: React.FC = () => {
  const [currentColor, setCurrentColor] = useState<string>('#FF0000')
  // 需要改变的主题色数组集合
  const colorList = ['#FF0000', '#ffffff', '#FFB6C1', '#EE82EE', '#00FF00', '#32CD99', '#99cc32', '#7093DB', '#FFFF00', '#FF00FF']

  // 页面加载设置一下保存在本地主题颜色
  useEffect(() => {
    const LocalTheme = JSON.parse(localStorage.getItem('color') || '{"backgroundColor":"#FF0000","primaryColor":"#2870FA"}')
    setCurrentColor(LocalTheme.backgroundColor)
    const headerDom: any = document.getElementsByClassName('header-container')[0]
    headerDom.style.setProperty('background-color', LocalTheme.backgroundColor, 'important') // 改变头部背景颜色
  }, [])

  // 改变主题色
  const onColorChange = (color: string) => {
    setCurrentColor(color)
    const headerDom: any = document.getElementsByClassName('header-container')[0]
    console.log(headerDom)
    headerDom.style.setProperty('background-color', color, 'important') // 改变头部背景颜色
    // 改变整体的主题颜色
    ConfigProvider.config({
      theme: {
        primaryColor: color,
      },
    })
    const localColor = JSON.stringify({
      backgroundColor: color,
      primaryColor: color,
    })
    localStorage.setItem('color', localColor)
  }
  const menu: any = (
    <div className="drop-box">
      {colorList.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            onColorChange(item)
          }}
          style={{
            backgroundColor: item,
          }}
        ></div>
      ))}
    </div>
  )

  return (
    <Dropdown menu={menu} key="dropdown">
      <SkinTwoTone />
    </Dropdown>
  )
}
export default ChangeTheme
