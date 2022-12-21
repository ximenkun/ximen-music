
/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion: APP 主界面
 * @params:
 * @Date: 2022-08-24 15:51:27
 * @LastEditTime: 2022-12-19 18:25:56
 */
import 'antd/dist/antd.css'
import Header from './components/Header'
import Layout from './components/Layout'
import BaseContext from './common/BaseContext'
import "./global.scss"
import Player from './components/Player/Player'

const App: React.FC = () => {
  return (
    <div>
      <BaseContext>
        <Header></Header>
        <Layout></Layout>
        <Player></Player>
      </BaseContext>
    </div>
  )
}

export default App
