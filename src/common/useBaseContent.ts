/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion:
 * @params:
 * @Date: 2022-09-07 18:28:03
 * @LastEditTime: 2022-09-07 18:36:08
 */
import { createContext, useContext, useState } from 'react'
type BaseContextProps = {
  isModalOpen: boolean
  setModalOpen(v: boolean): void
}
export const Context = createContext<BaseContextProps>({} as any)
export const useBaseContext = () => useContext(Context)

const initContext = () => {
  const [isModalOpen, setModalOpen] = useState<any>(false)

  return {
    isModalOpen,
    setModalOpen,
  }
}
export default initContext
