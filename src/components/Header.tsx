'use client';

import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import MenuItem from '@/components/MenuItem';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MenuItemMobile from './MenuItemMobile';

const Header = () => {
  const pathname = usePathname();
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <header className='w-full block'>
      <div className='flex items-center justify-center gap-10'>
        <div className='hidden md:flex gap-5'>
          <MenuItem
            href={'/'}
            label='Home'
            active={pathname == '/' ? true : false}
          />
          <MenuItem
            href={'/about'}
            label='About'
            active={pathname == '/about' ? true : false}
          />
        </div>

        <div className='flex justify-between lg:justify-center items-center w-full md:w-auto'>
          <Link
            href={'/'}
            className='text-lg md:text-3xl text-center font-bold'
          >
            <Image
              src='/logo.svg'
              alt='title'
              width={120}
              height={120}
              priority
            />
          </Link>

          <button onClick={handleShow} className='text-lg block md:hidden'>
            {show ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        <div className='hidden md:flex gap-5'>
          <MenuItem
            href={'/'}
            label='Contact'
            active={pathname == '/contact' ? true : false}
          />
          <MenuItem
            href={'/dashboard'}
            label='Dashboard'
            active={pathname == '/dashboard' ? true : false}
          />
        </div>
      </div>

      {show && (
        <div className='flex flex-col py-5'>
          <MenuItemMobile
            label='Home'
            href={'/'}
            active={pathname == '/' ? true : false}
          />
          <MenuItemMobile
            label='About'
            href={'/'}
            active={pathname == '/about' ? true : false}
          />
          <MenuItemMobile
            label='Contact'
            href={'/'}
            active={pathname == '/contact' ? true : false}
          />
          <MenuItemMobile
            label='Dashboard'
            href={'/'}
            active={pathname == '/dashboard' ? true : false}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
