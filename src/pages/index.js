import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

var information = "Break down and visualise complex problems across five 65’’ screens into steps that are easily comprehensible for your audience."
var consultation = "Put your models to the practical test and receive participants’ feedback on interventions."
var collaboration = "Design interactive scenarios cooperatively with participants."
var empowerment = "Empower your participants by jointly developing and visualising solutions and implementation strategies."
var abstractText =
  'The Mobile Solution Workshop is a new approach for participative workshops developed at the Faculty of Sustainability. This digital environment allows to visualise future scenarios and to experience the effects of adjusted model parameters in real time. It consists of the hardware, including five 65’’ screens that create an immersive environment and tablets that allow participants to interact with the screens’ content, as well as the custom developed software for this interactive dashboard. The entire set-up is mobile and can therefore be put into action on site. For this reason alone, scientist can reach a larger target audience with the Mobile Solution Workshop. Complex problems are fanned out and visualised in comprehensible steps across the five connected 65’’ screens. Participants can experience and design interactive scenarios. To this end, the Mobile Solution Workshop allows to visualise effects of interventions in real-time; illustrates the interplay between local actions and global drivers and to make abstract facts tangible.';

// Where the structure of the page lives
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (

    <Layout title={`Mobile Lösungswerkstatt (MoLöwe)`}>

        <div className={styles.background}></div>

        <div className={styles.bg_text}>
            <h1 className={styles.TitleText}>{'Mobile Lösungswerkstatt (MoLöwe)'}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>


        <div className={styles.container}>
            <img className={styles.image} src="img/information.png" alt="logo granit"></img>
            <div className={styles.middle}>
                <div className={styles.text}> {information} </div>
            </div>
        </div>

        <div className={styles.container}>
            <img className={styles.image} src="img/consultation.png" alt="logo haematit"></img>
            <div className={styles.middle}>
                <div className={styles.text}>{consultation}</div>
            </div>
        </div>

        <div className={styles.container}>
            <img className={styles.image} src="img/collaboration.png" alt="logo pyrit"></img>
            <div className={styles.middle}>
                <div className={styles.text}>{collaboration}</div>
            </div>
        </div>

        <div className={styles.container}>
            <img className={styles.image} src="img/empowerment.png" alt="logo tigerauge"></img>
            <div className={styles.middle}>
                <div className={styles.text}>{empowerment}</div>
            </div>
        </div>


        <div className={clsx('hero hero--primary', styles.abstractBanner)}>
            <p> {abstractText} </p>
        </div>

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