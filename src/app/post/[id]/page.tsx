import React from 'react';
import { getBlogById } from '@/data/blogs';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Link from 'next/link';
import { getCommentsByPost } from '@/data/comments';
import CardComment from '@/components/CardComment';
import { getUserByid } from '@/data/users';
import CardAuthor from '@/components/CardAuthor';

const Page = async ({ params }: { params: { id: string } }) => {
  const post = await getBlogById(params.id);
  const comments = await getCommentsByPost(params.id);
  const user = await getUserByid(post.user_id);

  return (
    <div className='mt-5'>
      <Link
        href='/'
        className='flex items-center gap-1 hover:underline transition-all'
      >
        <span className='text-sm'>
          <AiOutlineArrowLeft />
        </span>
        Back to Blog
      </Link>
      <h5 className='text-center text-2xl font-semibold mt-5'>{post.title}</h5>
      <p className='mt-5 text-justify'>{post.body}</p>

      {user.email && <CardAuthor name={user.name} email={user.email} />}

      <div className='mt-5'>
        <h5 className='font-semibold'>All Comments</h5>
        {comments.map((comment) => (
          <CardComment
            name={comment.name}
            email={comment.email}
            message={comment.body}
            key={comment.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
