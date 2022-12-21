/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion:  登录
 * @params:
 * @Date: 2022-09-07 18:06:12
 * @LastEditTime: 2022-12-16 13:39:38
 */
import { useBaseContext } from '@/common/useBaseContent'
import { checkQrLogin, getCreateQr, getLoginQrKey } from '@/servers/login'
import { AppleOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Modal, Popover } from 'antd'
import { FC, ReactElement, useEffect, useRef, useState } from 'react'
interface IProps { }
import './login.scss'
import QRCode from 'qrcode.react'
import { phoneNumberCheck } from '@/utils/verify'

const Login: FC<IProps> = (): ReactElement => {
  const { isModalOpen, setModalOpen } = useBaseContext()
  const ref = useRef({ key: '', timer: 0 })
  const [loginMode, setLoginMode] = useState<number>(1) // 1 表示 二维码 2 其它登录状态
  const [qrCodeSrc, setQrCodeSrc] = useState('') // 生成的二维码链接
  const [qrCodeStatus, setQrCodeStatus] = useState(0) // 二维码的登录状态
  const [islogin, setLogin] = useState<boolean>(false)
  const [loginUserInfo, setLoginUserInfo] = useState({
    nickname: '',
    avatar: 'https://pic4.zhimg.com/v2-df055951788582217399d04fc9eda023_b.jpg',
  }) //用户信息

  const handleOk = () => {
    setModalOpen(false)
  }

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const handleCancel = () => {
    setModalOpen(false)
    clearCheckQrLoginStatusTimer()
  }

  const onChangeMode = () => {
    setLoginMode(2)
    clearCheckQrLoginStatusTimer()
  }

  const createQrCode = async () => {
    setQrCodeStatus(0)
    clearCheckQrLoginStatusTimer()
    const nowtime = Date.now()
    const res = await getLoginQrKey(nowtime)
    ref.current.key = res.data.unikey
    const qrres = await getCreateQr(res.data.unikey)
    setQrCodeSrc(qrres.data.qrurl)
    // 开启定时器 试试检测二维码的状态
    ref.current.timer = setInterval(checkQrLoginStatus, 3000) as any
  }

  // 清除定时器
  const clearCheckQrLoginStatusTimer = () => {
    const { timer } = ref.current
    clearInterval(timer)
    setQrCodeStatus(0)
  }

  const checkQrLoginStatus = async () => {
    /**
     * 800 = 二维码过期
     * 801 = 待验证
     * 802 = 已经扫码
     * 803 = 登录成功
     */
    const { key } = ref.current
    const nowtime2 = new Date().getTime()
    const res = await checkQrLogin(key, nowtime2)
    console.log({ key })
    console.log(res.code, { res })

    // 二维码过期
    if (res.code === 800) {
      clearCheckQrLoginStatusTimer()
      setQrCodeStatus(2)
    }

    if (res.code === 802) {
      setQrCodeStatus(1)
      console.log(res, '走了没')
      setLoginUserInfo({
        avatar: res.avatarUrl,
        nickname: res.nickname,
      })
      // clearCheckQrLoginStatusTimer()
    }
    if (res.code === 803) {
      setLogin(true)
      clearCheckQrLoginStatusTimer()
    }
    console.log(qrCodeStatus, '状态')
  }

  const QrLoginBox = () => {
    return (
      <div className="qr-container">
        <h2>扫码登录 {qrCodeStatus} </h2>
        {qrCodeStatus == 0 && (
          <div>
            <div className="qr-code"> {qrCodeSrc && <QRCode value={qrCodeSrc} />}</div>
            <div className="qr-desc">
              使用 <span>网易云音乐APP</span> 扫码登录
            </div>
            {/* <Button onClick={createQrCode}>刷新二维码</Button> */}
            <div className="change-login-mode" onClick={onChangeMode}>
              选择其它登录模式 <RightOutlined style={{ fontSize: '12px' }} />
            </div>
          </div>
        )}

        {qrCodeStatus == 1 && (
          <div>
            <img src="https://s1.ax1x.com/2022/09/08/vqJWE4.png" alt="" />
            <div className="title-s">扫码成功</div>
            <div>请在手机上确认登录</div>
          </div>
        )}

        {qrCodeStatus == 2 && (
          <div className="qr-invalid">
            <div>
              {' '}
              <img src="https://picx.zhimg.com/80/v2-01babc295a4124f4501cafef56098ecb_720w.jpeg" alt="" />
            </div>
            <Button onClick={createQrCode}>刷新二维码</Button>
          </div>
        )}
      </div>
    )
  }

  const PhoneLoginBox = () => {
    return (
      <div className="phone-container">
        <div
          className="l-t-box"
          onClick={() => {
            setLoginMode(1)
          }}
        >
          <div className="qr"></div>
          <div className="popover"> 扫码登录更安全</div>
        </div>

        <div className="p-body">
          <AppleOutlined style={{ color: 'red', fontSize: '80px', paddingBottom: '40px' }} />
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label="手机号" name="username" rules={[{ required: true, validator: phoneNumberCheck }]}>
              <Input />
            </Form.Item>

            <Form.Item label="密码" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>自动登录</Checkbox>{' '}
              <span className="p-p-box">
                <span>忘记密码 </span> | <span>验证码登录</span>
              </span>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className="login">
        <img src={loginUserInfo.avatar} alt="" className="login-img" />
        <span className="nickname">{loginUserInfo.nickname} </span>
        {islogin ? (
          <span
            onClick={() => {
              console.log('退出登录')
            }}
          >
            退出登录
          </span>
        ) : (
          <span
            onClick={() => {
              createQrCode()
              // checkQrLoginStatus()
              setModalOpen(true)
            }}
          >
            登录
          </span>
        )}
      </div>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={300} footer={null} bodyStyle={{ minHeight: '350px' }}>
        {loginMode === 1 ? <QrLoginBox></QrLoginBox> : <PhoneLoginBox></PhoneLoginBox>}
      </Modal>
    </div>
  )
}
export default Login
