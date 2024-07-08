import Pageheader from '../components/Pageheader/Pageheader';
import Projects from '../components/Projects/Projects';
import Services from '../components/Services/Services';
import Clients from '../components/Clients/Clients';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';

const Render = ({block, contactInfo}) => {
    if (block?.__component === 'pageheader.pageheader') {
        return <Pageheader block={block} contactInfo={contactInfo} />
    } else if (block.__component === 'projects.projects') {
        return <Projects block={block} />
    } else if (block.__component === 'services.services') {
        return <Services block={block} />
    } else if (block.__component === 'clients.clients') {
        return <Clients block={block} />
    } else if (block.__component === 'reviews.reviews') {
        return <Reviews block={block} />
    } else if (block.__component === 'footer.footer') {
        return <Footer block={block} contactInfo={contactInfo} />
    }
}

export default Render;