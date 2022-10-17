import Upbtn from '../components/upBtn/upbtn';
import Navbar from '../components/navbar/navbar';
import Header from '../components/header/header';
import Face from '../components/face/face';
import About from '../components/about/about';
import Quote from '../components/quote/quote';
import Services from '../components/services/services';
import Section from '../components/section/section';
import Pricing from '../components/pricing/pricing';
import Team from '../components/team/team';
import Testmonial from '../components/testmonial/testmonial';
import Blogs from '../components/blogs/blogs';
import Footer from '../components/footer/footer';

export default function Home() {
  return (
    <>
      <Upbtn />
      <Navbar />
      <Header />
      <Face />
      <About />
      <Quote />
      <Services />
      <Section />
      <Pricing />
      <Team />
      <Testmonial />
      <Blogs />
      <Footer />
    </>
  )
}
