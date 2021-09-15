import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Apache Maven',
    Svg: require('../../static/img/maven.svg').default,
    description: (
      <>
        Le tp utilisera Apache Maven en version 3.6.0+
      </>
    ),
  },
  {
    title: 'Spring Batch',
    Svg: require('../../static/img/batch.svg').default,
    description: (
      <>
        Découverte du framework Spring Batch pour le traitement automatisé de données.
      </>
    ),
  },
  {
    title: 'Java',
    Svg: require('../../static/img/java.svg').default,
    description: (
      <>
        Utilisation de la version de Java >= 8.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
