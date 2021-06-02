import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const linkedin = <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
const twitter = <FontAwesomeIcon icon={['fab', 'twitter']} />

const links = [
    { href: '/', label: 'about' },
    { href: '/', label: 'ux' },
    { href: '/', label: 'tweets' },
];

export default function Nav() {
    return (
        <nav>
            <ul className="flex flex-col items-center justify-center p-4">
                <li>
                    <Link href="/">
                        <a className="text-black no-underline text-accent-1 text-lg font-bold dark:text-black ">
                            <p className="px-4 py-2 text-black font-extrabold underline-magical">
                                cestladwvicy
                            </p>
                        </a>
                    </Link>
                </li>
                <div className="text-black border border-black shadow-lg">
                    <ul className="px-4 py-2 flex flex-row items-start justify-between space-x-4 ">
                        {links.map(({ href, label }) => (
                            <li className="text-center" key={`${href}${label}`}>
                                <Link href={href}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                    
                </div>
                
                
            </ul>
        </nav>
    );
}
