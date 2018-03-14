import React from 'react';
import Comment from '~/components/Comment/Comment';
import { convertImageSrc } from '~/services/utils';

// 递归生成评论
const generateComments = (comment) => {
  if (!comment.reply_to) {
    return (
      <Comment
        key={comment.id}
        {...comment}
        avatar={convertImageSrc(comment.avatar)}
      />
    )
  }
  return (
    <Comment
      key={comment.id}
      {...comment}
      avatar={convertImageSrc(comment.avatar)}
    >
      {generateComments(comment.reply_to)}
    </Comment>
  )
}

const StoryMain = ({
  data,
  shortComments,
  longComments
}) => {
  return (
    <div>
      <article className="story-content" dangerouslySetInnerHTML={{ __html: data.body }}></article>
      { longComments.length ? <div className="story-comment-list-header">长评论：{longComments.length}</div> : null }
      { longComments.map((comment) => generateComments(comment)) }
      { shortComments.length ? <div className="story-comment-list-header">短评论：{shortComments.length}</div> : null}
      { shortComments.map((comment) => generateComments(comment)) }
    </div>
  )
}

export default StoryMain;