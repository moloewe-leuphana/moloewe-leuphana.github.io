import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import PrintFAQ from '@site/src/components/FAQList';
import styles from './index.module.css';

// Where the structure of the page lives
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Mobile Lösungswerkstatt (MoLöwe)`}>

    <div className={styles.bg_image}></div>

    <div className={styles.bg_text}>
      <h1>I am John Doe</h1>
    </div>

    </Layout>
  );
}
