import React from 'react'
import {Carousel} from 'antd'
import {bgBanner} from './links'
import {ImageBanner} from '../styleds'

const Banner = () => {

    return (
        <Carousel autoplay>
            {bgBanner.map((image, index) => (
                <a href={image.a}>
                    <ImageBanner key={index} alt={image.id} src={image.link} />
                </a>
            ))}
      </Carousel>    
    )
}

export default Banner