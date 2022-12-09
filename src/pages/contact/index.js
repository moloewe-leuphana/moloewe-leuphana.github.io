import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import PrintFAQ from '@site/src/components/FAQList';
// import styles from './index.module.css';
import styles from '@site/src/pages/index.module.css'

// Where the structure of the page lives
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Mobile Lösungswerkstatt (MoLöwe)`}>
    <div className={styles.background}>
        <div className={styles.table}>
            <div className={styles.tcell}>
                <h1>{'Leuphana University Lüneburg'}</h1>
                <p>{'Faculty of Sustainability'}</p>
                <p>{'Universitätsallee 1, 21335 Lüneburg, Germany'}</p>
                <p>{'moloewe@leuphana.de'}</p>
            </div>
        </div>
    </div>

    </Layout>
  );
}
