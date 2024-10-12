import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import GraphComponent from "../Graph/NewGraph"

//  <GraphComponent />

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The website is designed to provide AI developers with clear, step-by-step guidance, enabling even those with basic knowledge to build AI applications with ease.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The platform emphasizes practical, solution-oriented learning by addressing real-world problems, ensuring that developers can concentrate on the most impactful methods and tools.
      </>
    ),
  },
  {
    title: 'Powered by Sudeep Aryan',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Leveraging advanced AI expertise, the website offers cutting-edge resources and methodologies, empowering developers with the best tools and techniques in the industry.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (<GraphComponent />);
}
