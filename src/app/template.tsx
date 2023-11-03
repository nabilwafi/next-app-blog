import Header from '@/components/Header';
import { ToastContainer } from 'react-toastify';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className='max-w-[1024px] mx-auto p-7 md:px-0'>
        <Header />
      </div>

      <div className='max-w-[1024px] mx-auto px-7 py-1 md:px-0'>{children}</div>

      <ToastContainer />
    </div>
  );
}
