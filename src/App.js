import Footer from './Components/Footer'
import Middle from './Components/Middle';
import WhyChoose from "./Components/WhyChoose";
import ListItem from './Components/ListItems';
import PopularCourse from "./Components/PopularCourse";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import AboutMe from './Components/AboutMe';



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Middle />
      <WhyChoose />
      <ListItem />
      <PopularCourse />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
