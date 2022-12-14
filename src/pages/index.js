import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

var abstractText =
  'The Mobile Solution Workshop is a new approach for participative workshops developed at the Faculty of Sustainability. This digital environment allows to visualise future scenarios and to experience the effects of adjusted model parameters in real time. It consists of the hardware, including five 65’’ screens that create an immersive environment and tablets that allow participants to interact with the screens’ content, as well as the custom developed software for this interactive dashboard. The entire set-up is mobile and can therefore be put into action on site. For this reason alone, scientist can reach a larger target audience with the Mobile Solution Workshop. Complex problems are fanned out and visualised in comprehensible steps across the five connected 65’’ screens. Participants can experience and design interactive scenarios. To this end, the Mobile Solution Workshop allows to visualise effects of interventions in real-time; illustrates the interplay between local actions and global drivers and to make abstract facts tangible.';

// Where the structure of the page lives
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (

    <Layout title={`Mobile Lösungswerkstatt (MoLöwe)`}>

        <div className={styles.background}></div>

        <div className={styles.bg_text}>
            <h1 className="hero__title">{'Mobile Lösungswerkstatt (MoLöwe)'}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>

        <div className={clsx('hero hero--primary', styles.abstractBanner)}>
            <p className="abstract">{abstractText}</p>
        </div>

        <HomepageFeatures />

        <div className={styles.footerLogosDiv} align="center">
            <a href="https://www.dbu.de/">
                <img className={styles.footerLogos} src="img/dbuLogo.svg" alt="dbu logo"></img>
            </a>
            <a href="https://www.leuphana.de/">
                <img className={styles.footerLogos} src="img/leuphanaFooter.png" alt="leuphana footer"></img>
            </a>
        </div>

    </Layout>

  );
}