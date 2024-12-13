'use client';

import { usePathname } from 'next/navigation';


export default function TextBG() {

    const path = usePathname();

    return (
        <div className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3'>
          <h2 className='text-[150px]'>ILLUSTRATOR</h2>
          <h1 className={`text-[300px] ${path === '/' ? '' : 'text-primary'}`}>ARTIST</h1>
        </div>
    );
}