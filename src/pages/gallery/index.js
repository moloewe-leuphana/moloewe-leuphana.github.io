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

    <div className={styles.background}></div>

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

    <a className={styles.lightbox} href="#03">
       <img src='/img/gallery/03.JPG'/>
    </a>
    <div className={styles.lightbox_target} id="03">
       <img src='/img/gallery/03.JPG'/>
       <a className={styles.lightbox_close} href="#"></a>
    </div>

    <a className={styles.lightbox} href="#04">
       <img src='/img/gallery/04.JPG'/>
    </a>
    <div className={styles.lightbox_target} id="04">
       <img src='/img/gallery/04.JPG'/>
       <a className={styles.lightbox_close} href="#"></a>
    </div>

    <a className={styles.lightbox} href="#05">
       <img src='/img/gallery/05.JPG'/>
    </a>
    <div className={styles.lightbox_target} id="05">
       <img src='/img/gallery/05.JPG'/>
       <a className={styles.lightbox_close} href="#"></a>
    </div>

    <a className={styles.lightbox} href="#06">
       <img src='/img/gallery/06.JPG'/>
    </a>
    <div className={styles.lightbox_target} id="06">
       <img src='/img/gallery/06.JPG'/>
       <a className={styles.lightbox_close} href="#"></a>
    </div>

    <a className={styles.lightbox} href="#07">
       <img src='/img/gallery/07.JPG'/>
    </a>
    <div className={styles.lightbox_target} id="07">
       <img src='/img/gallery/07.JPG'/>
       <a className={styles.lightbox_close} href="#"></a>
    </div>

    <a className={styles.lightbox} href="#08">
       <img src='/img/gallery/08.JPG'/>
    </a>
    <div className={styles.lightbox_target} id="08">
       <img src='/img/gallery/08.JPG'/>
       <a className={styles.lightbox_close} href="#"></a>
    </div>

    <a className={styles.lightbox} href="#09">
       <img src='/img/gallery/09.JPG'/>
    </a>
    <div className={styles.lightbox_target} id="09">
       <img src='/img/gallery/09.JPG'/>
       <a className={styles.lightbox_close} href="#"></a>
    </div>

    <a className={styles.lightbox} href="#10">
       <img src='/img/gallery/10.JPG'/>
    </a>
    <div className={styles.lightbox_target} id="1ß">
       <img src='/img/gallery/10.JPG'/>
       <a className={styles.lightbox_close} href="#"></a>
    </div>

    <a className={styles.lightbox} href="#11">
       <img src='/img/gallery/11.JPG'/>
    </a>
    <div className={styles.lightbox_target} id="11">
       <img src='/img/gallery/11.JPG'/>
       <a className={styles.lightbox_close} href="#"></a>
    </div>

    <a className={styles.lightbox} href="#12">
       <img src='/img/gallery/12.JPG'/>
    </a>
    <div className={styles.lightbox_target} id="12">
       <img src='/img/gallery/12.JPG'/>
       <a className={styles.lightbox_close} href="#"></a>
    </div>

    <a className={styles.lightbox} href="#13">
       <img src='/img/gallery/13.JPG'/>
    </a>
    <div className={styles.lightbox_target} id="13">
       <img src='/img/gallery/13.JPG'/>
       <a className={styles.lightbox_close} href="#"></a>
    </div>

    <a className={styles.lightbox} href="#14">
       <img src='/img/gallery/14.JPG'/>
    </a>
    <div className={styles.lightbox_target} id="14">
       <img src='/img/gallery/14.JPG'/>
       <a className={styles.lightbox_close} href="#"></a>
    </div>

    <a className={styles.lightbox} href="#15">
       <img src='/img/gallery/15.JPG'/>
    </a>
    <div className={styles.lightbox_target} id="15">
       <img src='/img/gallery/15.JPG'/>
       <a className={styles.lightbox_close} href="#"></a>
    </div>

    <a className={styles.lightbox} href="#16">
       <img src='/img/gallery/16.JPG'/>
    </a>
    <div className={styles.lightbox_target} id="16">
       <img src='/img/gallery/16.JPG'/>
       <a className={styles.lightbox_close} href="#"></a>
    </div>

    <a className={styles.lightbox} href="#17">
       <img src='/img/gallery/17.JPG'/>
    </a>
    <div className={styles.lightbox_target} id="17">
       <img src='/img/gallery/17.JPG'/>
       <a className={styles.lightbox_close} href="#"></a>
    </div>

    <a className={styles.lightbox} href="#18">
       <img src='/img/gallery/18.JPG'/>
    </a>
    <div className={styles.lightbox_target} id="18">
       <img src='/img/gallery/18.JPG'/>
       <a className={styles.lightbox_close} href="#"></a>
    </div>

    <a className={styles.lightbox} href="#20">
       <img src='/img/gallery/20.JPG'/>
    </a>
    <div className={styles.lightbox_target} id="20">
       <img src='/img/gallery/20.JPG'/>
       <a className={styles.lightbox_close} href="#"></a>
    </div>

    <a className={styles.lightbox} href="#21">
       <img src='/img/gallery/21.JPG'/>
    </a>
    <div className={styles.lightbox_target} id="21">
       <img src='/img/gallery/21.JPG'/>
       <a className={styles.lightbox_close} href="#"></a>
    </div>

    <a className={styles.lightbox} href="#moloewe">
       <img src='/img/gallery/moloewe.JPG'/>
    </a>
    <div className={styles.lightbox_target} id="moloewe">
       <img src='/img/gallery/moloewe.JPG'/>
       <a className={styles.lightbox_close} href="#"></a>
    </div>

    </Layout>
  );
}