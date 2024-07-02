import Marquee from "react-fast-marquee";
import Client from './Client';

const Clients = () => {

    return (
        <div className="section clients xlpt xlpb">
            <div className="title">
                <h2>Our Clients.</h2>
            </div>

            <div className="outer">
                {[1,2,3,4,5,1,2,3,4,5].map(item => 
                    <Client />
                )} 
            </div>
        </div>
    )
}

export default Clients