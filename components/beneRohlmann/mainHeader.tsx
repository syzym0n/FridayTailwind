'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';



export default function MainHeader() {

    const path = usePathname();

    return (
        <header className='relative z-10 flex justify-between items-center w-full max-w-[1500px]'>
            <Link className='text-2xl' href="/">BENE ROHLMANN</Link>
            <nav>
                <ul>
                    <li>
                        <Link className={`block text-xl border-2 border-secondary rounded-full py-2 px-10 ${
                        path === '/' ? '' : 'hidden'}`}
                        href="/home">
                        DISCOVER
                        </Link>
                    </li>

                    <li>
                    <Link className={`block text-xl border-2 border-secondary rounded-full py-2 px-10 ${
                        path === '/home' ? '' : 'hidden'}`}
                        href="/home">
                        SHOP
                        </Link>
                    </li>

                    <li>
                    <Link className={`block text-xl border-2 border-secondary rounded-full py-2 px-10 ${
                        path.startsWith('/illustration') ? '' : 'hidden'}`}
                        href="/home">
                        RANDOM
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}