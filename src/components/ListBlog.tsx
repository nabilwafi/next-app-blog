import Link from 'next/link';
import { CardBlogProps } from './CardBlog';
import { AiOutlineArrowRight } from 'react-icons/ai';

function ListBlog(props: CardBlogProps) {
  const { urlPath, title, description } = props;

  return (
    <div className='border-t border-b py-7 flex flex-col'>
      <h5 className='text-lg'>{title}</h5>

      <p className='mt-5'>{description}</p>

      <Link
        href={urlPath}
        className='flex items-center gap-1 text-sm mt-auto ml-auto text-blue-500 hover:text-blue-300'
      >
        Read more{' '}
        <span className='text-sm'>
          <AiOutlineArrowRight />
        </span>
      </Link>
    </div>
  );
}

export default ListBlog;
