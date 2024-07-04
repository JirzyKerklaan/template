import Service from './Service';

const Services = () => {
    return (
        <div className="section services lpb">
            <div className="title">
                <h2>What we do.</h2>
            </div>
            <div className="services-grid">
                {[1,2,3,4,5, 6].map(item => 
                    <Service key={item} />
                )} 
            </div>
        </div>
    )
}

export default Services;