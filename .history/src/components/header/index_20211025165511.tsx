import Link from 'next/link';
import style from './header.module.scss';

const logo = "<G />";

export default function Header() {
    return (
        <header className={style.container}>
            <div className={style.content}>
                <Link href="/" passHref>
                    <h1>{logo}</h1>
                </Link>
                <nav>
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="/portfolio">
                        Portfólio
                    </Link>
                    <Link href="https://www.linkedin.com/in/giordano-bruno-silva/">
                        <a target="_blank">
                            LinkedIn
                        </a>
                    </Link>
                    <Link href="https://github.com/giordanobraz">
                        <a target='_blank'>
                            Github
                        </a>
                    </Link>
                </nav>
            </div>
        </header>
    );
}