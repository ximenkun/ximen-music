/*
 * @Author: hekun hekun@chinasoftinc.com
 * @LastEdit: ximenkun
 * @params:
 * @FilePath: \electron-vite-react-main\src\components\Image\index.tsx
 * @Date: 2022-12-16 10:36:08
 * @Descripttion:  图片组件
 */
import React, {
  FC,
  ReactElement,
  useMemo,
  useRef,
  useState,
} from "react";
interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  round?: boolean;
}

const Image: FC<IProps> = ({ src, style, round, ...rest }): ReactElement => {
  const [loading, setLoading] = useState(true);
  const imageRef = useRef<HTMLImageElement>(null);

  const _src = useMemo(() => {
    return src;
  }, [src]);

  if (!src) {
    return <></>;
  }

  return (
    <img
      {...rest}
      ref={imageRef}
      src={_src}
      style={{
        ...style,
        borderRadius: round ? "50%" : undefined,
      }}
      onLoad={() => setLoading(false)}
    />
  );
};

export default Image;
