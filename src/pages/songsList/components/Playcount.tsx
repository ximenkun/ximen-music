/*
 * @Author: hekun hekun@chinasoftinc.com
 * @LastEdit: ximenkun
 * @params:
 * @FilePath: \electron-vite-react-main\src\pages\songsList\components\Playcount.tsx
 * @Date: 2022-12-19 11:10:03
 * @Descripttion: 播放次数处理
 */
import { FC, ReactElement, useMemo } from "react";

interface IProps {
  count: number;
}
const PalyCount: FC<IProps> = ({ count }): ReactElement => {
  const countString = useMemo(() => {
    // 亿级
    if (count > 99999999) {
      return (count / 100000000).toFixed(1) + "亿";
    }
    // 5万级
    if (count > 50000) {
      return Math.floor(count / 10000) + "万";
    }

    return count;
  }, [count]);

  return <>{countString}</>;
};

export default PalyCount;
