
import { usePost } from "../hooks/usePost";
import useAxios from "../hooks/useAxios";
import { useEffect } from "react";
import {actions} from '../actions'
import PostList from "../components/posts/PostList";
import NewPost from "../components/posts/NewPost";
 
const HomePage = () => {
  const { state, dispatch } = usePost();
  const { api } = useAxios();

  useEffect(() => {
    dispatch({ type: actions.post.DATA_FETCHING });

    // post fetch
    const fetchPost = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
        );
        if (response.status == 200) {
          dispatch({ type: actions.post.DATA_FETCHED, data: response.data });
        }
      } catch (error) {
        dispatch({ type: actions.post.DATA_FETCH_ERROR, data: error });
      }
    };
    fetchPost();
  }, [dispatch, api]);

  if (state?.loading) return <p>We are working ....</p>;

  if (state?.error) return <p>Error in fetcing posts {state?.error?.message}</p>;

  return (
    <div>
      <NewPost/>
      <PostList  posts={state?.posts}/>
    </div>
  );
};

export default HomePage;
