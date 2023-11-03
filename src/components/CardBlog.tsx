import textLimit from '@/utils/TextLimit';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

export type CardBlogProps = {
  urlPath: string;
  title: string;
  description: string;
  classNames?: string;
};

const CardBlog = (props: CardBlogProps) => {
  const { urlPath, title, description, classNames } = props;

  return (
    <div
      className={`group cursor-pointer flex flex-col w-full text-justify ${classNames}`}
    >
      <h5 className='text-lg font-semibold leading-snug tracking-tight'>
        <Link href={urlPath}>
          <span className='bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]'>
            {textLimit(title, 150)}
          </span>
        </Link>
      </h5>

      <p className='mt-2'>{textLimit(description, 150)}</p>

      <Link
        href={urlPath}
        className='flex mt-auto text-sm items-center gap-1 text-blue-600 hover:text-blue-400 transition-all'
      >
        Read more
        <span className='text-xs'>
          <AiOutlineArrowRight />
        </span>
      </Link>
    </div>
  );
};

export default CardBlog;
