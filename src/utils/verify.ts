/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion:
 * @params:
 * @Date: 2022-09-09 15:23:23
 * @LastEditTime: 2022-09-09 15:24:02
 */
// 手机号码校验
export const phoneNumberCheck = async (rule: any, value: string): Promise<any> => {
  const phoneReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
  if (value && !phoneReg.test(value)) {
    return Promise.reject(new Error('请输入正确的电话号码'))
  }
  return Promise.resolve()
}
