import React from 'react';

type CardAuthorProps = {
  name: string;
  email: string;
};

const CardAuthor = (props: CardAuthorProps) => {
  const { name, email } = props;

  return (
    <div className='mt-2'>
      <h6 className='fon-semibold'>Author</h6>
      <p className='text-sm'>{name}</p>
      <p className='text-xs text-gray-500'>{email}</p>
    </div>
  );
};

export default CardAuthor;
