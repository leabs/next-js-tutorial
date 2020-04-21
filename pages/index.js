import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        Front-end web developer with over 3+ years professional experience. I specialize in custom styling, fast secure static websites, and custom Wordpress sites. 

        </p>
        <a href="https://github.com/leabs" target="_blank" class="has-text-primary">GitHub</a>
        <span> | </span>
        <a href="https://codepen.io/leab" target="_blank" class="has-text-primary">CodePen</a>
        <span> | </span>
        <a href="https://www.linkedin.com/in/stevenleabo/" target="_blank" class="has-text-primary">LinkedIn</a>
        <span> | </span>
        <a href="https://www.upwork.com/o/profiles/users/~011442e16729fe0928/" target="_blank" class="has-text-primary">Upwork</a>
      </section>

      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          
          ))}
        </ul>
      </section>

     
    </Layout>
  )
}


