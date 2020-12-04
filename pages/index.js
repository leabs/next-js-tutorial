import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
    dsn:
        "https://6bf06797ba1142bd94951510f04b62da@o167874.ingest.sentry.io/1242251",
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
});

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    Front-end web developer with over 4 years professional
                    experience. I specialize in custom styling, fast secure
                    static websites, and custom Wordpress sites.
                </p>
            </section>

            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <br />
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>{" "}
                            {" - "}
                            <Link href="/posts/[id]" as={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}
