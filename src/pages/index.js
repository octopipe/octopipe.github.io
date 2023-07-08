import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/docs">
            See all projects
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        
        <div style={{
          textAlign: "center",
          background: "var(--ifm-color-primary-darker)",
          color: "#fff",
          padding: "40px"
        }}>
          <h1>About us</h1>
          <p>
            Octopipe is an organization dedicated to solving infrastructure problems in multi-cloud environments and distributed systems. Our mission is to simplify<br/>
            and optimize the management of complex infrastructures, aiming to benefit the community and promote equitable access to advanced technological solutions.<br/>
            We strive to deliver customized and innovative solutions to the challenges organizations face in multi-cloud environments and distributed systems, working<br/>
            closely with our partners and communities.
          </p>
        </div>
        <div style={{
          textAlign: "center",
          background: "var(--hero-bg)",
          color: "#fff",
          padding: "40px"
        }}>
          <h1>What's next?</h1>
          <HomepageFeatures />
        </div>
      </main>
    </Layout>
  );
}
