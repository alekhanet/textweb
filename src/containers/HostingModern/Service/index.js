import React from 'react';
import Zoom from 'react-reveal/Zoom';

import Container from '../common/components/UI/ContainerTwo';

import SectionHeading from '../SectionHeading';
import ServiceSection, { ServiceWrapper, ServiceItem } from './service.style';
import { Services } from '../common/data/HostingModern';


export const HostingServiceItem = ({title, price}) => {
  return (
    <ServiceItem>
      <Zoom delay={50 * 1}>
        <h4>{title}</h4>
        <p className="text-bluedar">${price}/mo</p>
      </Zoom>
    </ServiceItem>
  )
} 

const HostingService = ({serviceTitle, description, children}) => {
  return (
    <ServiceSection id="services">
      <Container>
        <SectionHeading
          slogan={serviceTitle || "Ideal solutions for you"}
          title={description || "Didn’t find what you were looking for?"}
        />
        <ServiceWrapper>
          {children}
        </ServiceWrapper>
      </Container>
    </ServiceSection>
  );
};

export default HostingService;
