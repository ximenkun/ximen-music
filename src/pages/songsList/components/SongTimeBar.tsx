/*
 * @Author: hekun hekun@chinasoftinc.com
 * @LastEdit: ximenkun
 * @params:
 * @FilePath: \electron-vite-react-main\src\pages\songsList\components\SongTimeBar.tsx
 * @Date: 2022-12-16 10:15:15
 * @Descripttion:  时间戳转化为 分 + 秒的组件   音乐时间
 */
import { FC, ReactElement, useMemo } from "react";

interface IProps {
  dt: number;
}
const SongTimeBar: FC<IProps> = ({ dt = 0 }): ReactElement => {
  const time = useMemo(() => {
    let second: string | number = Math.floor(dt / 1000);
    let min: string | number = Math.floor(second / 60);
    second = second - min * 60;
    if (min < 10) {
      min = "0" + min;
    }
    if (second < 10) {
      second = "0" + second;
    }

    return {
      second,
      min,
    };
  }, [dt]);

  return (
    <>
      {time.min}:{time.second}
    </>
  );
};

export default SongTimeBar;
