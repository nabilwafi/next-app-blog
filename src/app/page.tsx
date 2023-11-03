import ButtonAction from '@/components/ButtonAction';
import CardBlog from '@/components/CardBlog';
import { getBlogs } from '@/data/blogs';
import Link from 'next/link';

export default async function Home() {
  const data = await getBlogs();

  return (
    <main className='min-h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-6 gap-10 mt-10'>
        {data.map((post, index) => (
          <CardBlog
            key={post.id}
            classNames={index < 2 ? 'col-span-3' : 'col-span-2'}
            urlPath={`/post/${post.id}`}
            title={post.title}
            description={post.body}
          />
        ))}
      </div>

      <div className='my-10 flex justify-center'>
        <Link href='/post'>
          <ButtonAction buttonText='View all posts' />
        </Link>
      </div>
    </main>
  );
}
