import React, { Children } from 'react';
import { Icon } from 'react-icons-kit';
import { thinRight } from 'react-icons-kit/entypo/thinRight';
import Container from '../common/components/UI/ContainerTwo';
import NextImage from '../common/components/NextImage';
import Text from '../common/components/Text';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion';
import '@reach/accordion/styles.css';
import SectionHeading from '../SectionHeading';
import FeatureWrapper, { FeatureContent, Content, Ipad } from './feature.style';
import { accordions } from '../common/data/HostingModern';
import iPad from '../common/assets/image/hostingModern/ipad.png';



export const HostingFeatureAccordion = ({title,children}) => {
  return (
    <AccordionItem>
      <AccordionButton>
        {title} <Icon icon={thinRight} />
      </AccordionButton>
      <AccordionPanel>{children}</AccordionPanel>
    </AccordionItem>
  );
}

const HostingFeature = ({imageSrc, content, title, description, children}) => {
  return (
    <FeatureWrapper id="features">
      <Ipad>
        <NextImage src={imageSrc || iPad} alt="" />
      </Ipad>
      <Container>
        <FeatureContent>
          <SectionHeading
            mb="20px"
            slogan={title || "Website content builder"}
            title={description || "Meet our premium features that will make you wow"}
            textAlign="left"
          />
          <Content>
            <Text
              className="caption"
              content={content || "Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents."}
            />
            <Accordion>
              {children}
            </Accordion>
          </Content>
        </FeatureContent>
      </Container>
    </FeatureWrapper>
  );
};

export default HostingFeature;
