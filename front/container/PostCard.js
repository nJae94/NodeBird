import React, { useCallback, useState, memo } from 'react';
import { Avatar, Button, Card, Comment ,List, Popover  } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { 
  ADD_COMMENT_REQUEST,
   LOAD_COMMENTS_REQUEST, 
   UNLIKE_POST_REQUEST, 
   LIKE_POST_REQUEST, 
   RETWEET_REQUEST, 
   REMOVE_POST_REQUEST } from '../reducers/post';
import {TwitterOutlined,LikeOutlined,MailOutlined,EllipsisOutlined } from '@ant-design/icons';
import PostImages from '../components/PostImages';
import PostCardContent from '../components/PostCardContent';
import { FOLLOW_USER_REQUEST, UNFOLLOW_USER_REQUEST } from '../reducers/user';
import styled from 'styled-components';
import moment from 'moment';
import CommentForm from '../container/CommentForm';
import FollowButton from '../components/FollowButton';

moment.locale('ko');

const CardWrapper = styled.div`
  margin-bottom: 20px;
`;

const PostCard = memo(({ post }) => {

  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const id = useSelector(state => state.user.me && state.user.me.id);
  const dispatch = useDispatch();

  const liked = id && post.Likers && post.Likers.find(v => v.id === id);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened(prev => !prev);
    if (!commentFormOpened) {
      dispatch({
        type: LOAD_COMMENTS_REQUEST,
        data: post.id,
      });
    }
  }, []);
  
  const onToggleLike = useCallback(() => {
    if(!id)
    {
      return alert('로그인 필요');
    }

    if(liked)
    {
      dispatch({
        type: UNLIKE_POST_REQUEST,
        data: post.id,
      });
    }else 
    {
        dispatch({
          type: LIKE_POST_REQUEST,
          data: post.id
        });
    }
  }, [id , post && post.id, liked]);

  const onRetweet = useCallback(()=>{
    if(!me){
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type:RETWEET_REQUEST,
      data: post.id,

    });

  },[id,post && post.id]);

  const onFollow= useCallback(userId => () => {
    dispatch({
      type: FOLLOW_USER_REQUEST,
      data: userId,
    });
  },[]);

  const onUnfollow = useCallback(userId => () => {
    dispatch({
      type: UNFOLLOW_USER_REQUEST,
      data: userId,
    });
  },[]);

  const onRemovePost = useCallback(postId => ()=> {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: postId,
    });
  })

  return (
    <CardWrapper>
    <Card
      cover={post.Images  && post.Images[0] && <PostImages images={post.Images} />}
      actions={[
        <TwitterOutlined onClick={onRetweet}/>,
        <LikeOutlined theme={(liked ? "twoTone" : "outlined")} twoToneColor="#eb2f96" onClick={onToggleLike}/>,
        <MailOutlined onClick={onToggleComment}/>,
        <Popover
        key="ellipsis"
        content={(
          <Button.Group>
            {id && post.UserId === id
              ? (
                <>
                  <Button>수정</Button>
                  <Button type="danger" onClick={onRemovePost(post.id)}>삭제</Button>
                </>
              )
              : <Button>신고</Button>}
          </Button.Group>
        )}
      >
        <EllipsisOutlined />
      </Popover>,
      ]}
      title={post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null}
      extra={<FollowButton post={post} onUnfollow={onUnfollow} onFollow={onFollow}/>}
    >
      {post.RetweetId && post.Retweet ?
      (
      <Card
      cover={post.Retweet.Images[0] && <PostImages images={post.Retweet.Images} />}
      >
         <Card.Meta
          avatar={(
          <Link href={{pathname: '/user', query: {id: post.User.id}}} as={`/user/${post.User.id}`}>
            <a><Avatar>{post.Retweet.User.nickname[0]}</Avatar></a></Link>
          )}
          title={post.Retweet.User.nickname}
          description={<PostCardContent postData={post.Retweet.content} />}
        />
        {moment(post.createAt).format('YYYY.mm.dd')}
      </Card>
      )
      :
      (
      <Card.Meta
        avatar={(
        <Link href={{pathname: '/user', query: {id: post.User.id}}} as={`/user/${post.User.id}`}>
          <a><Avatar>{post.User.nickname[0]}</Avatar></a></Link>
        )}
        title={post.User.nickname}
        description={<PostCardContent postData={post.content} />}
      />
      )
        }
    </Card>
    {commentFormOpened && (
        <>
          <CommentForm post={post}/>

          <List
            header={`${post.Comments ? post.Comments.length : 0} 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments || []}
            renderItem={item => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Link href={{pathname: '/user', query: {id: item.User.id}}} as={`user/${item.User.id}`}>
                    
                    <a><Avatar>{item.User.nickname[0]}</Avatar></a></Link>}
                  content={item.content}
                />
              </li>
            )}
          />
        </>
      )}
    </CardWrapper>
  );
});

PostCard.propTypes = {
  post: PropTypes.shape({
    User: PropTypes.object,
    content: PropTypes.string,
    img: PropTypes.string,
    createdAt: PropTypes.string,
  }),
};

export default PostCard;