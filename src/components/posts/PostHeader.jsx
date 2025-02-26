import ThreeDotIcon from "../../assets/icons/3dots.svg";
import EditIcon from "../../assets/icons/edit.svg";
import DeleteIcon from "../../assets/icons/delete.svg";
import TimeIcon from "../../assets/icons/time.svg";
import { useState } from "react";
import { getDateDifferenceFormNow } from "../../utils";
import { useAuth } from "../../hooks/useAuth";
import { useAvatar } from "../../hooks/useAvater";
import { usePost } from "../../hooks/usePost";
import useAxios from '../../hooks/useAxios'
import { actions } from "../../actions";
const PostHeader = ({ post }) => {
  const { auth } = useAuth();

  const [showAction, setShowAction] = useState(false);
  const { avatarUrl } = useAvatar(post);
  const {dispatch} = usePost();
  const {api} = useAxios();

  const isMe = post?.author?.id == auth?.user?.id;

  function toggleAction() {
    setShowAction(!showAction);
  }

  const handleDeletePost = async () => {
    dispatch({ type: actions.post.DATA_FETCHING });
       try {

         const response = await api.delete(
           `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post.id}` );
   
         if (response.status == 200) {
           dispatch({ type: actions.post.POST_DELEDTED, data: post.id });
   
         }
       } catch (error) {
         console.log(error);
         dispatch({ type: actions.post.DATA_FETCH_ERROR, error: response?.error });
       }
  };

  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img
          className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
          src={avatarUrl}
          alt="avatar"
        />
        <div>
          <h6 className="text-lg lg:text-xl">{post?.author?.name}</h6>
          <div className="flex items-center gap-1.5">
            <img src={TimeIcon} alt="time" />
            <span className="text-sm text-gray-400 lg:text-base">
              {getDateDifferenceFormNow(post?.createAt)} ago
            </span>
          </div>
        </div>
      </div>

      <div className="relative">
        {isMe && (
          <button onClick={toggleAction}>
            <img src={ThreeDotIcon} alt="3dots of Action" />
          </button>
        )}

        {showAction && (
          <div className="action-modal-container">
            <button className="action-menu-item hover:text-lwsGreen">
              <img src={EditIcon} alt="Edit" />
              Edit
            </button>
            <button
              className="action-menu-item hover:text-red-500"
              onClick={handleDeletePost}
            >
              <img src={DeleteIcon} alt="Delete" />
              Delete
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default PostHeader;
