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
                    <Link href="https://www.linkedin.com/in/giordano-bruno-silva-323345b4/">
                        LinkedIn
                    </Link>
                    <Link href="https://github.com/giordanobraz">
                        Github
                    </Link>
                </nav>
            </div>
        </header>
    );
}