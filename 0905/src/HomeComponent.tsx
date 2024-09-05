import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import './HomeComponent.scss';
import MainComponent from './MainComponent';

const HomeComponent = () => {
  return (
    <div className="container">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
};

export default HomeComponent;
