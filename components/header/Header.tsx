import { AlignJustify } from 'lucide-react';
import Link from 'next/link';

import Menu from './Menu';

const Header = () => {
  return (
    <header>
      <nav>
        <div className='navbar justify-between bg-base-300'>
          <div>
            <label
              htmlFor='my-drawer'
              className='btn btn-square btn-ghost hidden p-3 text-center max-lg:block'
            >
              <AlignJustify />
            </label>
            <Link
              href='/'
              className='ml-2 text-base font-semibold max-sm:hidden sm:ml-4 sm:text-lg'
            >
              Fashion Corner
            </Link>
          </div>
          <div className='flex gap-10 max-xl:gap-5 max-lg:hidden'>
            <Link href={'/'}>HOME</Link>
            <Link href={'/'}>ABOUT US</Link>
            <Link href={'/'}>SHOP</Link>
            <Link href={'/'}>CONTACT US</Link>
          </div>
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
