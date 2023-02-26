
import './App.css';
import Header from "./Mycomponents/Header";
import Topselling from './Mycomponents/Topselling';
import Footer from './Mycomponents/Footer';
import Slider from './Mycomponents/Slider';
import Mostrecent from './Mycomponents/Mostrecent';
import Categories from './Mycomponents/Categories';
import Footer2 from './Mycomponents/Footer2';


function App() {
  return (
    <>
     <Header/>
     <Slider/>
     &nbsp;
     <Topselling/>
     &nbsp;
     <Categories/>
     &nbsp;
     <Mostrecent/>
     &nbsp;
     <Footer/>
     &nbsp;
     <Footer2/>
    </>
  );
}

export default App;
