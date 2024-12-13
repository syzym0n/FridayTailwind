'use client';

import { usePathname } from 'next/navigation';


export default function TextBG() {

    const path = usePathname();

    return (
        <div className='absolute z-0 top-36 left-0 h-5/6 w-dvw
        flex flex-col items-center justify-center'>
          <h2 className='text-[200px]'>ILLUSTRATOR</h2>
          <h1 className={`text-[300px] ${path === '/' ? '' : 'text-primary'}`}>ARTIST</h1>
        </div>
    );
}