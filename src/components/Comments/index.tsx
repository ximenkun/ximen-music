/*
 * @Author: hekun hekun@chinasoftinc.com
 * @LastEdit: ximenkun
 * @params:
 * @FilePath: \electron-vite-react-main\src\components\Comments\index.tsx
 * @Date: 2022-12-19 14:40:33
 * @Descripttion:  评论组件
 */
import { getComment } from '@/servers/api'
import { FormOutlined, LikeOutlined, ShareAltOutlined } from '@ant-design/icons'
import { useRequest } from 'ahooks'
import { Empty } from 'antd'
import dayjs from 'dayjs'
import { FC, ReactElement, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Skeleton from '../Container/Skeleton/Skeleton'
import Image from '../Image'
import './index.scss'
type indexProps = any
const Comments: FC<indexProps> = ({ id, type }): ReactElement => {
  const { data, loading }: any = useRequest(() =>
    getComment({
      id,
      type,
    })
  )

  const { comments, hotComments } = useMemo(() => {
    const { comments = [], hotComments = [] } = data || {}
    return {
      comments,
      hotComments,
    }
  }, [data])


  const CommentItem: FC<any> = (comment: any): ReactElement => {
    const { user, content, time, likedCount, beReplied, liked } = comment.comment
    return (
      <div className="comment-item">
        <Image src={user?.avatarUrl} round style={{ width: '60px', height: '60px' }} />
        <div className="item-right m-l-20 ">
          <div>
            <Link to={''}> {user?.nickname}</Link>： <span>{content}</span>
            {beReplied?.length > 0 && (
              <div className="beReplied">
                {beReplied?.map((item: any) => (
                  <div key={item.beRepliedCommentId}>
                    <Link to={''}>{item.user.nickname}</Link>: <span className="text-color-2">{item.content}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex text2">
            <span className="color time">{dayjs(time).format(`YYYY年MM月DD日`)}</span>
            <span className="icon-wrap">
              <span>
                <LikeOutlined
                  style={{
                    fontSize: '18px',
                    paddingRight: '8px',
                  }}
                />
                {likedCount}
              </span>
              <span>
                <ShareAltOutlined style={{ fontSize: '18px' }} />
              </span>
              <span>
                <FormOutlined style={{ fontSize: '18px' }} />
              </span>
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="comment-container">
      <Skeleton loading={loading} count={5}>
        {comments.length ? (
          <div>
            <div className="title">精彩评论</div>
            {hotComments.map((item: any) => (
              <CommentItem comment={item} key={item.commentId} />
            ))}
            <div className="title">全部评论</div>
            {comments.map((item: { commentId: any }) => (
              <CommentItem comment={item} key={item.commentId} />
            ))}
          </div>
        ) : (
          <Empty />
        )}
      </Skeleton>
    </div>
  )
}

export default Comments
