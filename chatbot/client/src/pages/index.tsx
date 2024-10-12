import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Chatbot from "../components/chatbot/chatbot"

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttonRow} id='container-heading-buttons'>
            {/* <Link
              className="button button--secondary button--lg"
              to="/docs/AI360/Overview">
              AI 360
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/RAG360/Introduction">
              RAG 360
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/Azure360/Introduction">
              Azure 360
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/Books/Overview">
              Books
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/DevOps/Overview">
              DevOps
            </Link> 
            <Link
              className="button button--secondary button--lg"
              to = "/docs/KnowledgeBase/KnowledgeBase" >
              Knowledge Graph
            </Link>           */}
        </div>
      </div>
      
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Sudeep Aryan ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <Chatbot />
    </Layout>
  );
}
