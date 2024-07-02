import Pageheader from '../components/Pageheader/Pageheader';
import Projects from '../components/Projects/Projects';
import Services from '../components/Services/Services';
import Clients from '../components/Clients/Clients';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <main>
      <Pageheader />
      <Projects />
      <Services />
      <Reviews />
      <Clients />
      <Footer />
    </main>
    );
  };
  
  export default Home;