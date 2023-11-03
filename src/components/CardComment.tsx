import React from 'react';

type CardComment = {
  name: string;
  email: string;
  message: string;
};

const CardComment = (props: CardComment) => {
  const { name, email, message } = props;

  return (
    <div className='border my-3 p-5 rounded-lg bg-white'>
      <p>{name}</p>
      <p className='text-sm text-gray-500'>{email}</p>
      <p className='mt-3'>{message}</p>
    </div>
  );
};

export default CardComment;
