import Header from "./components/Header"
import Footer from "./components/Footer"

import Hero_section from "./components/sections/Hero_section"
import Sales_section from "./components/sections/Sales_section";
import About_section from "./components/sections/About_section";
import Testimonials_section from "./components/sections/Testimonials_section";
import News_section from "./components/sections/News_section";
import Faq_section from "./components/sections/Faq_section";
import Contact_section from "./components/sections/Contact_section";

function App() {
  return (
    <>
      <Header />

      <Hero_section />

      <Sales_section />

      <About_section />

      <Testimonials_section />

      <News_section />

      <Faq_section />

      <Contact_section />

      <Footer/>
    </>
  );
}

export default App