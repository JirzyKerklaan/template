import { Swiper, SwiperSlide } from 'swiper/react';
import Review from './Review';
import 'swiper/css';

const Clients = ({block}) => {

    return (
        <div className="section reviews lpt xlpb">
            <div className="title">
                <h2>{block.Title}</h2>
            </div>

            <div className="outer">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={2.5}>                    
                    {block.Review.map(review => (
                        <SwiperSlide key={review.id}>
                            <Review review={review} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Clients