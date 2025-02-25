import React from "react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostComments from "./PostComments";
import PostAction from "./PostAction";

const PostCard = ({ post }) => {
  return (
    <article className="card mt-6 lg:mt-8">
      <PostHeader post={post} />
      <PostBody poster={post.image} content={post?.content} />
      <PostAction postId={post.id} commentCount={post?.comments?.length} />
      <PostComments post={post} />
    </article>
  );
};

export default PostCard;
