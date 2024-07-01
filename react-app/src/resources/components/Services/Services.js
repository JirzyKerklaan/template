import Service from './Service';

const Services = () => {
    return (
        <div className="section services">
            <div className="title">
                <h2>What we do.</h2>
            </div>
            <div className="services-grid">
                <Service />
                <Service />
                <Service />
                <Service />
                <Service />
                <Service />
            </div>
        </div>
    )
}

export default Services;