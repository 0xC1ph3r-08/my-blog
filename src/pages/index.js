import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx( styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Sunil
        </Heading>
        <p className="hero__subtitle">
           | Blockchain Enthusiast |
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/about">
            Learn More About Me
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Welcome to My Blog"
      description="A blog where I share my journey and knowledge">
      <HomepageHeader />
      <main>
        {/* Add your features or content here */}
      </main>
    </Layout>
  );
}
