import React, { Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../common/components/UI/ContainerTwo';
import Heading from '../common/components/Heading';
import NextImage from '../common/components/NextImage';
import SectionWrapper, {
  Content,
  Testimonial,
  Figure,
  Caption,
} from './testimonials.style';

import { testimonials } from '../common/data/HostingModern';


const settings = {
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: (index, className) => {
      return `<button class="${className} swiper-custom-pagination"></button>`;
    },
  },
};

import 'swiper/css';
import Author from '../common/assets/image/hostingModern/author1.png';



export const HostingTestimonialsSlider = ({description,author,job,imageSrc}) => {
  return (
    <SwiperSlide>
      <Testimonial>
        <Figure>
          <NextImage src={imageSrc || Author} alt="" />
        </Figure>
        <Caption>
          <Heading content={description || "Best host I've had in 10 years. Smooth migration, no stress, and friendly support one click away. I'm very happy and recommend their services"} />
          <p>
            <strong>{author || "Melina Pettendorfer"}</strong>,{' '}
            {job || "CEO of Uber"}
          </p>
        </Caption>
      </Testimonial>
    </SwiperSlide>
  )
}

const HostingTestimonials = ({testimonials}) => {
  return (
    <SectionWrapper id="testimonials">
      <Container>
        <Content>
          <Swiper className="slider" {...settings}>
            {testimonials.map((e) => 
              <SwiperSlide>
                <Testimonial>
                  <Figure>
                    <NextImage src={ Author} alt="" />
                  </Figure>
                  <Caption>
                    <Heading content={e.desc || "Best host I've had in 10 years. Smooth migration, no stress, and friendly support one click away. I'm very happy and recommend their services"} />
                    <p>
                      <strong>{e.author || "Melina Pettendorfer"}</strong>,{' '}
                      {e.job || "CEO of Uber"}
                    </p>
                  </Caption>
                </Testimonial>
            </SwiperSlide>
            )}
          </Swiper>
        </Content>
      </Container>
    </SectionWrapper>
  );
};

export default HostingTestimonials;
