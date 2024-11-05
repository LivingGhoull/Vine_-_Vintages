import Header from "./components/Header"

import Hero_section from "./components/sections/Hero_section"
import Sales_section from "./components/sections/Sales_section";
import About_section from "./components/sections/About_section";
import Testimonials_section from "./components/sections/Testimonials_section";
import News_section from "./components/sections/News_section";


function App() {
  return (
    <>
      <Header />

      <Hero_section />

      <Sales_section />

      <About_section />

      <Testimonials_section />
      
      <News_section />
    </>
  );
}

export default App