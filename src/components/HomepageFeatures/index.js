import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    to: 'https://join.slack.com/t/octopipe/shared_invite/zt-1ytyml2d0-kJQq9TxUkrD1RulXJrbpzw',
    title: 'Talk to us',
    imgSrc: require('@site/static/img/slack.png').default,
    description: (
      <>
        Learning more, speaking to other contributors, <br/> or finding answers
      </>
    ),
  },
  {
    to: 'https://github.com/octopipe',
    title: 'Contributions',
    imgSrc: require('@site/static/img/github.png').default,
    description: (
      <>
        New contributors are always welcome
      </>
    ),
  },
  
];

function Feature({imgSrc, Svg, title, to, description}) {
  return (
    <div className={clsx('col col--6')}>
      <a href={to} target="_blank" className="text--center">
        {imgSrc && imgSrc !== "" ? <img className={styles.featureSvg} src={imgSrc} /> : <Svg className={styles.featureSvg} role="img" />}
      </a>
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
