import axios from '@/config/axios-client';
import { Comment } from '@/interfaces/Comment';

const getCommentsByPost = async (id: string | number): Promise<Comment[]> => {
  const res = await axios
    .get(`/posts/${id}/comments`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error('Internal Server Error');
    });

  return res;
};
export { getCommentsByPost };
