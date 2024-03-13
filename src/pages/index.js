import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import data from "@site/static/data/organizations.json";
import { useEffect } from "react";

export function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export function FinanceList() {
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const region = params.get("region");

    if (region === "cn") {
      document.querySelector(".noCN").style.display = "none";
    }
  }, []);

  return (
    <div className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="row">
          {data.map((item, idx) => (
            <div className="col col--3" key={idx}>
              <div className="margin-vert--xs">
                <div className="card">
                  <div className="card__header">
                    <a
                      href={item.url}
                      target="_blank"
                      style={{ color: "black" }}
                    >
                      <h3>{item.title}</h3>
                    </a>
                  </div>
                  <div className="card__body">
                    <div style={{ color: "gray" }}>{item.summary}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <FinanceList />
    </Layout>
  );
}
