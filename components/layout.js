import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { Button, Navbar, Alignment } from "@blueprintjs/core";

const name = "Steven Leabo - Web Developer";
export const siteTitle = "Steven Leabo - Web Developer";

export default function Layout({ children, home }) {
    return (
        <div>
            <Navbar align={Alignment.CENTER}>
                <Navbar.Heading>
                    <h1 style={{ textAlign: "center" }} className="bp3-heading">
                        Steven Leabo - Web Developer
                    </h1>
                </Navbar.Heading>
            </Navbar>
            <div className={styles.container} style={{ minHeight: "75vh" }}>
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com/"
                        crossorigin
                    />
                    <link
                        rel="dns-prefetch"
                        href="https://fonts.gstatic.com/"
                    />
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="description"
                        content=" Landing Page for Steven Leabo - Web Developer"
                    />
                    <link
                        href="../node_modules/normalize.css/normalize.css"
                        rel="stylesheet"
                    />
                    <link
                        href="../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css"
                        rel="stylesheet"
                    />
                    <link
                        href="path/to/node_modules/@blueprintjs/core/lib/css/blueprint.css"
                        rel="stylesheet"
                    />
                    <meta name="og:title" content={siteTitle} />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>
                <header className={styles.header}></header>
                <main>{children}</main>
                {!home && (
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <a>← Back home</a>
                        </Link>
                    </div>
                )}
            </div>
            <div className={styles.container} style={{ marginBottom: "0" }}>
                <footer className="footer">
                    <div
                        className={utilStyles.socialLinks}
                        style={{ textAlign: "center" }}
                    >
                        <a
                            rel="noopener"
                            href="https://github.com/leabs"
                            target="_blank"
                            className="has-text-primary"
                        >
                            GitHub
                        </a>
                        <span> | </span>
                        <a
                            rel="noopener"
                            href="https://codepen.io/leab"
                            target="_blank"
                            className="has-text-primary"
                        >
                            CodePen
                        </a>
                        <span> | </span>
                        <a
                            rel="noopener"
                            href="https://www.linkedin.com/in/stevenleabo/"
                            target="_blank"
                            className="has-text-primary"
                        >
                            LinkedIn
                        </a>
                        <span> | </span>
                        <a
                            rel="noopener"
                            href="https://www.upwork.com/o/profiles/users/~011442e16729fe0928/"
                            target="_blank"
                            className="has-text-primary"
                        >
                            Upwork
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
}
