import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner, styles.heroBackground)}>
      <div className="container">
        <Heading as="h1" className="hero__title" id="name">
          SUNIL PITTI
        </Heading>
        {/* Removed the subtitle below */}
      </div>
    </header>
  );
}


export default function Home() {
  return (
    <Layout description="A blog where I share my journey and knowledge">
      <HomepageHeader />
      <main className={clsx(styles.mainContent)}>
        <div className="container">
          
          <section className={clsx(styles.featuredSection)}>
            <div className={clsx(styles.card)}>
              <h3>CTF Player</h3>
              <p>Competing in CTF challenges, solving security puzzles, and gaining deep cybersecurity knowledge.</p>
            </div>
            <div className={clsx(styles.card)}>
              <h3>Blockchain Developer</h3>
              <p>Building decentralized applications (DApps), writing smart contracts, and creating secure solutions.</p>
            </div>
            <div className={clsx(styles.card)}>
              <h3>Smart Contract Auditor</h3>
              <p>Ensuring the security and efficiency of smart contracts, reviewing code for vulnerabilities.</p>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
