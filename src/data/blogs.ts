import { Post } from '@/interfaces/Post';
import axios from '@/config/axios-client';

const getBlogs = async (): Promise<Post[]> => {
  const res = await axios
    .get('/posts')
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error('Internal Server Error');
    });

  return res;
};

const getBlogById = async (id: number | string): Promise<Post> => {
  const res = await axios
    .get(`/posts/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return res;
};

export { getBlogs, getBlogById };
