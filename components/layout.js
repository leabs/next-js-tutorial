import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Steven Leabo - Web Developer'
export const siteTitle = 'Steven Leabo - Web Developer'

export default function Layout({ children, home }) {
  return (
    <div>
    <div className={styles.container} style={{ minHeight: '80vh'}}>
      <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
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

      <header className={styles.header}>
        {home ? (
          <>
            <Link href="/">
              <h1 className={utilStyles.heading2Xl}>
              Steven Leabo - Web Developer
              
              </h1>
            </Link>
            
          </>
        ) : (
          <>
            <Link href="/">
              <h2 className={utilStyles.headingLg}>
              Steven Leabo - Web Developer
              
              </h2>
            </Link>
           
          </>
        )}
      </header>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back home</a>
          </Link>
        </div>
      )}
      <main>{children}</main>
    </div>
    <div className={styles.container} style={{ marginBottom: '0'}}>
    <footer className="footer">
    <div className={utilStyles.socialLinks}>
    <a rel="noopener" href="https://github.com/leabs" target="_blank" className="has-text-primary">GitHub</a>
      <span> | </span>
      <a rel="noopener" href="https://codepen.io/leab" target="_blank" className="has-text-primary">CodePen</a>
      <span> | </span>
      <a rel="noopener" href="https://www.linkedin.com/in/stevenleabo/" target="_blank" className="has-text-primary">LinkedIn</a>
      <span> | </span>
      <a rel="noopener" href="https://www.upwork.com/o/profiles/users/~011442e16729fe0928/" target="_blank" className="has-text-primary">Upwork</a>
      </div>
    </footer>
    </div>
  </div>
  )
}
