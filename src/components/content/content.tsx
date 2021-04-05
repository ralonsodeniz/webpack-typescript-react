import content from './content.module.css';
import car from '../../assets/images/Tesla-Roadster-2020-1024-03-696x522.jpg.webp';

const Content = (): JSX.Element => (
  <>
    <div className={content.content}>With CSS!</div>
    <div className={content.container}>
      <img src={car} className={content.car} alt={'car'} />
    </div>
  </>
);

export default Content;
