import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import '../components/i18n';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={"/favicon.ico"} />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to i18next testing</h1>

          <p><Link href={'/welcome'}><a>Go To Welcome screen</a></Link></p>

          <p><Link href={'/system/changelanguage'}><a>Change the Language</a></Link></p>

      </main>


    </div>
  )
}
