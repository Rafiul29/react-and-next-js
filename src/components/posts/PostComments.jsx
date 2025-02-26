import { useState } from "react";

import useAxios from "../../hooks/useAxios";
import PostCommentList from "./PostCommentList";
import { useAuth } from "../../hooks/useAuth";

const PostComments = ({ post }) => {
  const { auth } = useAuth();
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");
  const { api } = useAxios();

  const addComment = async (e) => {
    const keyCode = e.keyCode;

    if (keyCode == 13) {
      try {
        const response = await api.patch(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post.id}/comment`,
          { comment }
        );

        if (response.status == 200) {
          setComments([...response.data.comments]);
          console.log(response.data.comments)
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div className="flex-center mb-3 gap-2 lg:gap-4">
        <img
          className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/${auth.user.avatar}`}
          alt="avatar"
        />

        <div className="flex-1">
          <input
            type="text"
            className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
            name="post"
            id="post"
            placeholder="What's on your mind?"
            value={comment}
            onKeyDown={(e) => addComment(e)}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-4">
        <button className="text-gray-300 max-md:text-sm">All Comment ▾</button>
      </div>

      <PostCommentList comments={comments} />
    </div>
  );
};

export default PostComments;
