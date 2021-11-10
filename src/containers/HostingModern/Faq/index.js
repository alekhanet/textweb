import React from 'react';
import Fade from 'react-reveal/Fade';

import Container from '../common/components/UI/ContainerTwo';
import Heading from '../common/components/Heading';
import Text from '../common/components/Text';
import SectionHeading from '../SectionHeading';
import SectionWrapper, { ContentWrapper, FaqItem } from './faq.style';
import { faqs } from '../common/data/HostingModern';

export const HostingFaqItem = ({index, itemTitle, children}) => {
  return (
    <Fade key={index} up delay={100 * index}>
      <FaqItem>
        <Heading as="h4" content={itemTitle} />
        <Text content={children} />
      </FaqItem>
    </Fade>
  )
}

const Faq = ({faqTitle,faqDescription, children}) => {
  // const Faqs = faqItems ? faqItems : faqs;
  return (
    <SectionWrapper id="faq">
      <Container>
        <Fade up delay={100}>
          <SectionHeading
            slogan={faqTitle || "Ideal solutions for you"}
            title={faqDescription || "Didn’t find what you were looking for?"}
          />
        </Fade>
        <ContentWrapper>
          {/* {Faqs.map((faq,index) => (          ))} */}
          {children}
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Faq;
