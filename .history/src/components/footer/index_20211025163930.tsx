import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.containter}>
            <div className={styles.content}>
                <p> Desenvolvido por Giordano sob a
                    licença <Link href="http://escolhaumalicenca.com.br/licencas/mit/">MIT</Link>. {new Date().getFullYear()}.
                </p>
            </div>
        </footer>
    );
}