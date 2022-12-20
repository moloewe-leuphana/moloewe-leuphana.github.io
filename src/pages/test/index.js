import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import PrintFAQ from '@site/src/components/FAQList';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{'Mobile Lösungswerkstatt (MoLöwe)'}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/welcome-moloewe">
            Go to Manual
          </Link>
        </div>
      </div>
    </header>
  );
}

// Where the structure of the page lives
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Mobile Lösungswerkstatt (MoLöwe)`}>

    <HomepageHeader />

    </Layout>
  );
}
