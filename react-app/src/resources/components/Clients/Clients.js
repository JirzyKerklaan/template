import Client from './Client';

const Clients = () => {

    return (
        <div className="section clients xlpt xlpb">
            <div className="title">
                <h2>Our Clients.</h2>
            </div>

            <div className="outer">
                {[1,2,3,4,5,6,7,8,9,10].map(item => 
                    <Client key={item} />
                )} 
            </div>
        </div>
    )
}

export default Clients