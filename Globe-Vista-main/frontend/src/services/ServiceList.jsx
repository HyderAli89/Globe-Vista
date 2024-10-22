import React from 'react'
import ServiceCard from './serviceCard'
import {Col, Row} from 'reactstrap'
import weatherImg  from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const ServicesData=[
    {
        imgUrl:weatherImg,
        title: 'calculate weather',
        desc : "Lorem ipsum dolor sit amet consectetur "
    },
    {
        imgUrl:guideImg,
        title: 'Best Tour Guide',
        desc : "Lorem ipsum dolor sit amet consectetur "
    },
    {
        imgUrl:customizationImg,
        title: 'customization',
        desc : "Lorem ipsum dolor sit amet consectetur "
    }
]
const ServiceList = () => {
  return (
    <div>
      <Row>
        {
            ServicesData.map((item,index)=><Col lg="4" md="6" sm="12" className="mb-4" key={index}><ServiceCard item={item}/></Col>)
        }
        </Row>
    </div>
  )
}

export default ServiceList