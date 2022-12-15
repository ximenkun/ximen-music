/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion:
 * @params:
 * @Date: 2022-08-24 15:51:27
 * @LastEditTime: 2022-09-08 10:04:09
 */
/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion:
 * @params:
 * @Date: 2022-08-24 15:51:27
 * @LastEditTime: 2022-08-26 14:48:35
 */
import { useState } from 'react'
import 'antd/dist/antd.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Layout from './components/Layout'
import BaseContext from './common/BaseContext'

const App: React.FC = () => {
  return (
    <div>
      <BaseContext>
        <Header></Header>
        <Layout></Layout>
        <Footer></Footer>
      </BaseContext>
    </div>
  )
}

export default App
