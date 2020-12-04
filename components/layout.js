import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Steven Leabo - Web Developer'
export const siteTitle = 'Steven Leabo - Web Developer'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content=" Landing Page for Steven Leabo - Web Developer"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <header className={styles.header}>
        {home ? (
          <>
            <Link href="/">
              <a>
              Steven Leabo - Web Developer
              </a>
            </Link>
            
          </>
        ) : (
          <>
            <Link href="/">
              <a>
              Steven Leabo - Web Developer
              </a>
            </Link>
           
          </>
        )}
      </header>
      <main>{children}</main>
      
    </div>
  )
}
