// eslint-disable-next-line @next/next/no-document-import-in-page
import Head from 'next/head';
import Image from 'next/image';
import imgAppPass from '../../../public/images/app_pass_saude.png';
import imgPass from '../../../public/images/cartaopasscombr.png';
import styles from './index.module.scss';

export default function PortfolioPage() {
    return (
        <>
            <Head>
                <title>Giordano Bruno - Portfólio</title>
            </Head>
            <main className={styles.container}>
                <h1>Projetos</h1>
                <section className={styles.cards}>
                    <div className={styles.card}>
                        <Image src={imgPass} alt="Sistema Pass Saúde" layout='fill' className={styles.img} />
                        <div className={styles.info}>
                            <h1>Pass Saúde</h1>
                            <p>Sistema de gerenciamento do cartão Pass Saúde, desenvolvido com Ionic Framework/Angular.</p>
                            <button>
                                <a href="https://cartaopass.com.br/" target='_blank' rel="noreferrer">
                                    Abrir Site
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image src={imgAppPass} alt="Aplicativo Pass Saúde" layout='fill' className={styles.img} />
                        <div className={styles.info}>
                            <h1>Pass Saúde - App</h1>
                            <p>Aplicação android para usuários do cartão Pass Saúde. Desenvolvido com Ionic Framework/Angular.</p>
                            <button>
                                <a href="https://www.figma.com/file/OVz1a2zOPbB1IlPvcZtQqF/Aplicativo-Pass-Cass?node-id=0%3A1" target='_blank' rel="noreferrer">
                                    Abrir Projeto
                                </a>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}