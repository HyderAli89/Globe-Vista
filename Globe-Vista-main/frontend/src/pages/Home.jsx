import React from 'react'
import '../styles/home.css'
import {Container,Row,Col} from 'reactstrap';
import heroImg from "../assets/images/hero-img01.jpg"
import heroImg02 from "../assets/images/hero-img02.jpg"
import heroVideo from "../assets/images/hero-video.mp4"
import Subtitle from '../shared/Subtitle';
import worldimg from '../assets/images/world.png'
import SearchBar from '../shared/SearchBar.jsx';
import ServiceList from '../services/ServiceList.jsx';
import FeaturesTourList from '../components/Featured-tours/FeaturesTourList.jsx';
import experienceImg from '../assets/images/experience.png'
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery.jsx';
import Testimonial  from '../components/Testimonial/Testimonial.jsx';
import Newsletter  from '../shared/Newsletter.jsx';

const Home = () => {
  return (
    <div>
        <section>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="hero__content">
                            <div className="hero__subtitle d-flex align-items-center">
                                <Subtitle subtitle={'Know Before You Go'}/>
                                <img src={worldimg} alt="" />
                            </div>
                            <h1>Travelling Opens the door to Creating <span className="highlight">memories</span></h1>  
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quis explicabo assumenda laudantium eaque, dolor, repellendus soluta a optio mollitia inventore id impedit libero aspernatur. Sapiente esse ullam ea necessitatibus!</p> 

                        </div>                   
                    </Col>

                    <Col lg='2'>
                        <div className="hero__img-box ">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box hero__video-box mt-4">
                            <video src={heroVideo} alt="" controls/>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-5">
                            <img src={heroImg02} alt="" />
                        </div>
                    </Col>
                    
                    <Col lg="12" className="mt-4">
                            <SearchBar />

                    </Col>
                </Row>
            </Container>
        </section>
        {/* hero section start  */}
        <section>
            <Container>
                <Row>
                    <Col lg='3'>
                        <h5 className="services__subtitle">what we serve </h5>
                        <h2 className='services__title'>we offer our best service </h2>
                    </Col>
                    <Col>
                    <ServiceList />
                    </Col>
                </Row>
            </Container>
        </section>

        {/*=================== Feature Tour Section =================== */}
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5'>
                            <Subtitle subtitle={'Explore'}/>
                            <h2 className="featured__tour-title">Our Featured tours</h2>
                        </Col>
                       
                        <FeaturesTourList />
                       
                    </Row>
                </Container>
            </section>
        {/*=================== Feature Tour Section Ends =================== */}
        {/* experiemce section start  */}
         <section>
        <Container>
            <Row>
                <Col lg="6">
                <div className="experience__content">
                    <Subtitle subtitle={'Experience'} />
                    <h2>With our all experience <br />we will serve you</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br /> Voluptas quis perferendis facere, velit cupiditate itaque numquam officiis
                        </p>  
                </div>
                <div className='counter__wrapper d-flex align-items-center gap-5'>
                    <div className='counter__box'>
                        <span>12K+</span>
                        <h6>successful trip</h6>
                    </div>
                    <div className='counter__box'>
                        <span>2K+</span>
                        <h6>Regular client</h6>
                    </div>
                    <div className='counter__box'>
                        <span>15</span>
                        <h6>Years experience </h6>
                    </div>
                </div>
                </Col>
                <Col lg='6'>
                    <div className="experience__img">
                        <img src={experienceImg} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
        </section>
        {/* expericen section end */}

        {/* ===============Gallery section Start================== */}
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Subtitle subtitle={"Gallery"}/>
                        <h2 className="gallery__title">Visit Our Customers tour Gallery </h2>
                    </Col>
                    <Col lg="12">
                        <MasonryImagesGallery/>
                    </Col>
                </Row>
            </Container>
        </section>

        {/* ===============Gallery section End================== */}
        {/* ================testimonial section start  */}
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                    <Subtitle subtitle={'Fans Love'} />
                    <h2 className='testimonial__title'>what our fans say about us</h2>
                    </Col>
                    <Col lg='12'>
                    <Testimonial/>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* ================testimonial section end */}
        <section>
            <Newsletter/>
        </section>
    </div>
    
  )
}

export default Home