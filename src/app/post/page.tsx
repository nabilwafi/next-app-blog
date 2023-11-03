'use client';

import ListBlog from '@/components/ListBlog';
import { Post } from '@/interfaces/Post';
import { useEffect, useState } from 'react';
import axios from '@/config/axios-client';

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>();

  useEffect(() => {
    const posts = async () => {
      const data = await axios
        .get('/posts', {
          params: {
            page: currentPage,
            per_page: 10,
          },
          headers: {
            Authorization: `Bearer 9ac335d933f7d361f0754ddf465fbab071c63f29ec4518fb8c80ff197669db08`,
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      return data;
    };

    posts();
  }, [currentPage]);

  return (
    <div>
      <h1 className='font-semibold text-xl md:text-center md:text-3xl'>
        All Blogs
      </h1>

      <div className='my-10'>
        {/* {data.map((d) => (
          <ListBlog
            key={d.id}
            urlPath={`/post/${d.id}`}
            title={d.title}
            description={d.body}
          />
        ))} */}
      </div>

      <div className='flex flex-col items-center'>
        <span className='text-sm text-gray-700 dark:text-gray-400'>
          Showing{' '}
          <span className='font-semibold text-gray-900 dark:text-white'>1</span>{' '}
          to{' '}
          <span className='font-semibold text-gray-900 dark:text-white'>
            10
          </span>{' '}
          of{' '}
          <span className='font-semibold text-gray-900 dark:text-white'>
            100
          </span>{' '}
          Entries
        </span>
        <div className='inline-flex mt-2 xs:mt-0'>
          <button className='flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
            s Prev
          </button>
          <button className='flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
