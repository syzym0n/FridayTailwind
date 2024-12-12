import Link from 'next/link';



export default function MainHeader() {
    return (
        <header className='flex justify-between'>
            <Link className='text-2xl' href="/">BENE ROHLMANN</Link>
            <nav>
                <ul>
                    <li>
                        <Link className='text-2xl border-2 border-secondary rounded-full py-2 px-10' 
                        href="/home">
                        DISCOVER
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}