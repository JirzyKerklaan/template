import Service from './Service';

const Services = (props) => {
    return (
        <div className="section services lpb">
            <div className="title">
                <h2>{props.block.Title}</h2>
            </div>
            <div className="services-grid">
                {props.block.Service.map(service => (
                    <Service key={service.id} service={service} />
                ))}
            </div>
        </div>
    )
}

export default Services;