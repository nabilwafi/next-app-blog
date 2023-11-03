import axios from '@/config/axios-client';
import { User } from '@/interfaces/User';

const getUsers = async (): Promise<User[]> => {
  const res = await axios
    .get(`/users`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error('Internal Server Error');
    });

  return res;
};

const getUserByid = async (id: string | number): Promise<User> => {
  const res = await axios
    .get(`/users/${id}`)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      throw new Error(err.message);
    });

  return res;
};
export { getUserByid, getUsers };
