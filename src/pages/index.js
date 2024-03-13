import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

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
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export function FinanceList() {
  return (
    <div className={clsx("hero hero--primary", styles.heroBanner)}>
      <ul style={{ textAlign: "left" }}>
        <li>
          <a href="https://bilt.page/r/6CHS-4V08">Bilt Rewards</a> - get up to
          $20,250
        </li>
        <li>
          <a href="https://join.robinhood.com/weijinl2">Robinhood</a> - get up
          to $1,500
        </li>
        <li>
          <a href="https://www.usbank.com">US Bank</a> - get up to $800
          (December 29, 2023)
        </li>
        <li>
          <a href="https://share.acorns.com/weijingjaylin?advocate.partner_share_id=553338990949201082">
            Acorns
          </a>{" "}
          - get up to $725
        </li>
        <li>
          <a href="https://upgrade.com/r/WLExkMczo9">Upgrade</a> - get up to
          $200
        </li>
        <li>
          <a href="https://py.pl/1yGy15">PayPal</a> - get up to $100
        </li>
        <li>
          <a href="https://www.sofi.com/invite/money?gcp=12b85f15-9dbd-4ce7-94ca-ae0ab8d80670&isAliasGcp=false">
            SoFi
          </a>{" "}
          - get $75
        </li>
        <li>
          <a href="https://remit.ly/3529op1z">Remitly</a> - get $20
        </li>
        <li>
          <a href="https://chime.com/r/weijinglin">Chime</a>
        </li>
        <li class="noCN">
          <a href="https://www.kryptex.org/?ref=db93f807">kryptex</a>
        </li>
        <li class="noCN">
          <a href="https://www.flexpool.io/">Flexpool</a>
        </li>
        <li>
          <a href="https://link.earncheese.com/valF/9123ede8">Earncheese</a>
        </li>
        <li>
          <a href="https://members.withyotta.com/register?code=WEIJING3">
            Yotta
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <FinanceList />
      {/* <HomepageHeader /> */}
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
