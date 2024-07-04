import Pageheader from '../components/Pageheader/Pageheader';
import Projects from '../components/Projects/Projects';
import Services from '../components/Services/Services';
import Clients from '../components/Clients/Clients';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';

const Render = (props) => {
    if (props.block?.__component === 'pageheader.pageheader') {
        return <Pageheader block={props.block} />
    } else if (props.block.__component === 'projects.projects') {
        return <Projects block={props.block} />
    } else if (props.block.__component === 'services.services') {
        return <Services block={props.block} />
    } else if (props.block.__component === 'clients.clients') {
        return <Clients block={props.block} />
    } else if (props.block.__component === 'reviews.reviews') {
        return <Reviews block={props.block} />
    } else if (props.block.__component === 'footer.footer') {
        return <Footer block={props.block} />
    }
}

export default Render;