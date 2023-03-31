import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Use our libraries',
    imgSrc: require('@site/static/img/library.png').default,
    description: (
      <>
        Use our libraries to build cloud native applications or distributed 
        applications.
      </>
    ),
  },
  {
    title: 'Use our applications',
    imgSrc: require('@site/static/img/distributed-icon.png').default,
    description: (
      <>
        Use our applications to build resilient and fast distributed systems
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imgSrc, Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {imgSrc && imgSrc !== "" ? <img className={styles.featureSvg} src={imgSrc} /> : <Svg className={styles.featureSvg} role="img" />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
