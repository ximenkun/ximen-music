/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion:
 * @params:
 * @Date: 2022-09-07 18:28:03
 * @LastEditTime: 2022-12-20 11:00:20
 */
import { createContext, useContext, useState } from 'react'
import useGlobalPlay from './useGlobalPlay'
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
    ...useGlobalPlay(),
  }
}
export default initContext
