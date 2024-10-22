import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

 const Testimonial = () => {
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slideToShow:3,
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slideToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                }
            },
            {
                breakpoint:576,
                settings:{
                    slideToShow:1,
                    slidesToScroll:1,
                },
            },
        ],

    }
  return (
    <div>
      
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, debitis ut non, vitae reprehenderit fugiat pariatur magni, fuga quas magnam voluptates et laborum at libero! Adipisci esse enim quas facere?</p>

                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h5 className='mb-0 mt-3'>john Doe</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, debitis ut non, vitae reprehenderit fugiat pariatur magni, fuga quas magnam voluptates et laborum at libero! Adipisci esse enim quas facere?</p>

                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h5 className='mb-0 mt-3'>Johnny liver</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, debitis ut non, vitae reprehenderit fugiat pariatur magni, fuga quas magnam voluptates et laborum at libero! Adipisci esse enim quas facere?</p>

                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h5 className='mb-0 mt-3'>john cena</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
        </Slider>
    </div>
  )
}
export default Testimonial