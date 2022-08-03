import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import Footer from './components/Footer';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';

function App() {
  return (
    <div className="App">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </div>
  );
}

export default App;
