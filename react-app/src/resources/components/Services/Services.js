import Service from './Service';

const Services = ({block}) => {
    return (
        <div className="section services lpb">
            <div className="title">
                <h2>{block.Title}</h2>
            </div>
            <div className="services-grid">
                {block.Service.map(service => (
                    <Service key={service.id} service={service} />
                ))}
            </div>
        </div>
    )
}

export default Services;