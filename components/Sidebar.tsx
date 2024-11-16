'use client';

import Link from 'next/link';
import useSWR from 'swr';

import useLayoutService from '@/lib/hooks/useLayout';

import { SearchBox } from './header/SearchBox';

const Sidebar = () => {
  const { toggleDrawer } = useLayoutService();
  const {
    data: categories,
    error,
    isLoading,
  } = useSWR('/api/products/categories');

  if (error) return error.message;
  if (isLoading || !categories) return 'Loading...';

  return (
    <ul className='menu min-h-full w-80 space-y-4 bg-base-200 p-4 text-base-content'>
      <li>
        <h2 className='text-xl'>Fashion Corner</h2>
      </li>

      <li>
        <Link href='/'>HOME</Link>
      </li>
      <li>
        <Link href='/'>ABOUT US</Link>
      </li>
      <li>
        <Link href='/'>SHOP</Link>
      </li>
      <li>
        <Link href='/'>CONTACT US</Link>
      </li>

      <div className='block  lg:hidden'>
        <SearchBox />
      </div>
    </ul>
  );
};

export default Sidebar;
