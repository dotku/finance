import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Practical Tips",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        DotKu Finance was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        DotKu Finance lets you focus on your docs, and we&apos;ll do the chores.
        Go ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Calculator",
    url: "https://dotku.us/finance/calculator/",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        See how much you can reach by using compound interest calculator with
        annual fixed deposit
      </>
    ),
  },
];

// {
//   label: "Calculator",
//   to: "pathname:///calculator/",
// },

function Feature({ Svg, title, description, url }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          {url ? (
            <Link to={url} isNavLink={true}>
              {title}
            </Link>
          ) : (
            title
          )}
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
