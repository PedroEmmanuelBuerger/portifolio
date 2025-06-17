// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Biblioteca Virtual - Domínio Público</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className={styles.header}>
        <h1>📚 Estudo em casa</h1>
        <nav>
          <Link href="#">Início</Link>
          <Link href="#">Postagens</Link>
          <Link href="#">Livros em Alta</Link>
          <Link href="#">Domínio Público</Link>
        </nav>
      </header>

      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <h2>Estudo em casa</h2>
          <ul>
            <li><Link href="#">Livros Infantis</Link></li>
            <li><Link href="#">Livros Didáticos</Link></li>
            <li><Link href="#">Livros Religiosos</Link></li>
            <li><Link href="#">Livros de Romance</Link></li>
            <li><Link href="#">Ciências Exatas</Link></li>
            <li><Link href="#">Literatura Brasileira</Link></li>
            <li><Link href="#">Literatura Estrangeira</Link></li>
          </ul>
        </aside>

        <main className={styles.main}>
          <div className={styles.bookCard}>
            <h3>Título do Livro</h3>
            <p>Descrição ou autor do livro</p>
            <a href="#">Baixar PDF</a>
          </div>
        </main>
      </div>

      <footer className={styles.footer}>
        <p>Biblioteca Virtual - Domínio Público</p>
        <p>© 2023 Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
