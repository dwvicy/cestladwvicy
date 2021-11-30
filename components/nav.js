import Link from 'next/link';

const links = [
    { href: '/', label: 'me' },
    { href: '/about', label: 'ux' },
    { href: '/work', label: 'dev' },
];

export default function Nav() {
    return (
        <nav>
            <ul className="flex items-center justify-between p-4">
                <li>
                    <Link href="/">
                        <a className="no-underline text-accent-1 text-xl font-bold ">
                            <p className="px-4 font-bold underline-magical">
                                michispotlight
                            </p>
                        </a>
                    </Link>
                </li>
                <div className="border shadow-lg">
                    <ul className="px-4 py-2 flex flex-row space-x-4 items-center justify-between md:space-x-4 md:flex-row ">
                        {links.map(({ href, label }) => (
                            <li className="text-center text-lg hover:font-black" key={`${href}${label}`}>
                                <Link href={href}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </ul>
        </nav>
    );
}
