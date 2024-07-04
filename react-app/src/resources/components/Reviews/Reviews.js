import { Swiper, SwiperSlide } from 'swiper/react';
import Review from './Review';
import 'swiper/css';

const Clients = (props) => {

    return (
        <div className="section reviews lpt xlpb">
            <div className="title">
                <h2>{props.block.Title}</h2>
            </div>

            <div className="outer">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={2.5}>
                    {[1,2,3,4,5].map(item => 
                        <SwiperSlide key={item}>
                            <Review />
                        </SwiperSlide>
                    )} 
                </Swiper>
            </div>
        </div>
    )
}

export default Clients