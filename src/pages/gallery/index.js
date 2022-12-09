import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import PrintFAQ from '@site/src/components/FAQList';
// import styles from './index.module.css';
import styles from '@site/src/pages/index.module.css'

import img1 from '/img/gallery/01.JPG';
import img2 from '/img/gallery/02.JPG';
import img3 from '/img/gallery/03.JPG';
import img4 from '/img/gallery/04.JPG';
import img5 from '/img/gallery/05.JPG';
import img6 from '/img/gallery/06.JPG';
import img7 from '/img/gallery/07.JPG';


// Where the structure of the page lives
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Mobile Lösungswerkstatt (MoLöwe)`}
      description="Description will go into a meta tag in <head />"
    >

    <div className={styles.tbackground}>
    </div>
    </Layout>
  );
}
