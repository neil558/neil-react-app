import './App.css';
import {  Carousel, Footer, Navbar, Employees, PartnersPara, PartnersCaro, 
          WorkPara, ContactUs, Work }
          from './components/imports'


function App() {
  return (

    <div>
      <Navbar />
      <Carousel />
      <Employees />
      <PartnersPara />
      <PartnersCaro />
      <WorkPara />
      <Work />
      <ContactUs />
      <Footer />
    </div>

  );
}

export default App;
