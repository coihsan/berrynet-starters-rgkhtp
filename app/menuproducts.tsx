import { forwardRef } from 'react';
import * as React from 'react';
import Link from 'next/link'
import {productsIcon} from './Icons'

// Berikan tipe props dan ref
type MenuProductsProps = {
  // Properti yang diperlukan
};

export const MenuProducts = forwardRef<HTMLElement, MenuProductsProps>((props, ref) => {
  return (
    <nav ref={ref}>
      <Link className='flex gap-4 items-center px-2 py-1 hover:bg-sky-900 rounded-md' href="#">
        {productsIcon.rocket}
          <div className='flex flex-col'>
          <p className='font-bold text-[14px]'>Home Internet</p>
          <span className='text-[14px] text-zinc-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
      </Link>
      <Link className='flex gap-4 items-center px-2 py-1 hover:bg-green-900 rounded-md' href="#">
        {productsIcon.apart}
          <div className='flex flex-col'>
          <p className='font-bold text-[14px]'>Apartment Internet</p>
          <span className='text-[14px] text-zinc-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
      </Link>
      <Link className='flex gap-4 items-center px-2 py-1 hover:bg-yellow-900 rounded-md' href="#">
        {productsIcon.business}
          <div className='flex flex-col'>
          <p className='font-bold text-[14px]'>Business Internet</p>
          <span className='text-[14px] text-zinc-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
      </Link>
      <Link className='flex gap-4 items-center px-2 py-1 hover:bg-indigo-900 rounded-md' href="#">
        {productsIcon.TV}
          <div className='flex flex-col'>
          <p className='font-bold text-[14px]'>berrynet TV</p>
          <span className='text-[14px] text-zinc-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
      </Link>
      <Link className='flex gap-4 items-center px-2 py-1 hover:bg-pink-900 rounded-md' href="#">
        {productsIcon.phone}
          <div className='flex flex-col'>
          <p className='font-bold text-[14px]'>berrynet Phone</p>
          <span className='text-[14px] text-zinc-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
      </Link>
    </nav>
  );
});
MenuProducts.displayName = "MenuProducts";
export default MenuProducts