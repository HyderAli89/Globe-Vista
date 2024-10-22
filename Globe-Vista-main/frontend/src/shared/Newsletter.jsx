import React from 'react'
import './newsletter.css'

import { Container,Row,Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

export const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                <div className="newsletter__content">
                    <h2>subscribe to get useful travelling information</h2>
                    <div className="newsletter__input">
                        <input type="email" placeholder='enter your email' />
                          <button className="btn newsletter__btn">Subscribe</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati earum laudantium ducimus veritatis reiciendis officia ipsum aliquam incidunt? Unde quasi corporis, similique aut dolorem illo esse maxime dignissimos atque explicabo!</p>
                </div>
               
                </Col>
                <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt="" />
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
export default Newsletter
