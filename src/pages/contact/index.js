import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import PrintFAQ from '@site/src/components/FAQList';


// import styles from './index.module.css';
import styles from '@site/src/pages/index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBannerContact)}>
        <div className="container">
         <h1>{'Leuphana University Lüneburg'}</h1>
         <p>{'Faculty of Sustainability'}</p>
         <p>{'Universitätsallee 1, 21335 Lüneburg, Germany'}</p>
         <p>{'moloewe@leuphana.de'}</p>
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

    </Layout>
  );
}
