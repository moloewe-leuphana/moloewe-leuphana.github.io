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

    <a className={styles.lightbox} href="#01">
       <img src='/img/gallery/01.JPG'/>
    </a>
    <div className={styles.lightbox_target} id="01">
       <img src='/img/gallery/01.JPG'/>
       <a className={styles.lightbox_close} href="#"></a>
    </div>

    <a className={styles.lightbox} href="#02">
       <img src='/img/gallery/02.JPG'/>
    </a>
    <div className={styles.lightbox_target} id="02">
       <img src='/img/gallery/02.JPG'/>
       <a className={styles.lightbox_close} href="#"></a>
    </div>

    </Layout>
  );
}