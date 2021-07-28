import Head from 'next/head';

import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>28/07/2021</time>
            <strong>Título</strong>
            <p>Texto</p>
          </a>
          <a href="#">
            <time>28/07/2021</time>
            <strong>Título</strong>
            <p>Texto</p>
          </a>
          <a href="#">
            <time>28/07/2021</time>
            <strong>Título</strong>
            <p>Texto</p>
          </a>
        </div>
      </main>
    </>
  );
}