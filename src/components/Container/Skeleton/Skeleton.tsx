/*
 * @Author: hekun hekun@chinasoftinc.com
 * @LastEdit: ximenkun
 * @params:
 * @FilePath: \electron-vite-react-main\src\components\Container\Skeleton\Skeleton.tsx
 * @Date: 2022-12-19 14:52:33
 * @Descripttion:
 */
import React, { FC, ReactElement } from "react";
import "./index.scss";

interface SkeletonProps {
  count?: number;
  loading: boolean;
  children?: any;
  type?: "bar" | "circle" | "rect";
}
const Skeleton: FC<SkeletonProps> = ({
  count = 1,
  loading = false,
  children = <></>,
  type = "rect",
}) => {
  if (loading) {
    return (
      <div className="Skeleton type">
        {Array(count)
          .fill("")
          .map((_, index) => {
            return <SkeletonItem key={index} />;
          })}
      </div>
    );
  }
  return children;
};

const SkeletonItem = () => {
  return (
    <div className="SkeletonItem">
      <div className="left">
        <div className="row-bar"></div>
      </div>
      <div className="right">
        <div className="row-bar" />
        <div className="row-bar" />
        <div className="row-bar" />
      </div>
    </div>
  );
};

export default Skeleton;
