import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import PrintFAQ from '@site/src/components/FAQList';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={'header'}>
      <div className={clsx('container', styles.heroBanner)}>
        <h1 className="hero__title">{'Mobile Solution Workshop'}</h1>
        <h1 className="hero__title__2">{'Frequently Asked Questions'}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

// Where the structure of the page lives
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Mobile Lösungswerkstatt (MoLöwe)`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />

      <main>
        <div className={clsx('container', styles.FAQContainer)}>
          <PrintFAQ />
        </div>
      </main>
    </Layout>
  );
}
