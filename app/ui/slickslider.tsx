'use client'

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from "next/image";

const SlickSlider = ({movies}: any) => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
    };
    return (
      <div>
        <Slider {...settings}>
          {
            movies.results.map((movie: any) => (
                <div key={movie.id}>
                    <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="test" width={200} height={200} />
                </div>
              ))
          }
        </Slider>
      </div>
    );
  };
  
  export default SlickSlider;