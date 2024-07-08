'use client'

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from "next/image";

const SlickSlider = ({entertainment}: any) => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      centerMode: true,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      variableWidth: true,
    };
    return (
      <div>
        <Slider {...settings}>
          {
            entertainment?.results.map((entertainment: any) => (
                <div style={{ width: 230 }} key={entertainment.id}>
                    <Image src={`https://image.tmdb.org/t/p/w500${entertainment.poster_path}`} alt="test" width={200} height={200} />
                </div>
              ))
          }
        </Slider>
      </div>
    );
  };
  
  export default SlickSlider;