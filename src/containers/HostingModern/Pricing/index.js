import React, { Children } from 'react';
import Icon from 'react-icons-kit';
import { checkmarkCircled } from 'react-icons-kit/ionicons/checkmarkCircled';
import { closeCircled } from 'react-icons-kit/ionicons/closeCircled';

import Container from '../common/components/UI/ContainerTwo';
import Heading from '../common/components/Heading';
import Button from '../common/components/Button';
import Text from '../common/components/Text';
import List from '../common/components/List';
import SectionHeading from '../SectionHeading';
import SectionWrapper, {
  ContentWrapper,
  PriceTable,
  Price,
} from './pricing.style';
import { pricingInfo } from '../common/data/HostingModern';


export const HostingFuturesList = ({isDisabled,name}) => {
  return (
    <List
      className={`listItem ${isDisabled && 'disabled'}`}
      text={name}
      icon={
        <Icon
          style={{
            color: isDisabled ? '#CED7E1' : '#E9C46A',
          }}
          icon={
            isDisabled ? closeCircled : checkmarkCircled
          }
          size="18"
        />
        }
    />
  )
}

export const HostingPricingTable = ({isRecommended,price,title,desc,buttonText,children}) => {
  return (
    <PriceTable
    className={isRecommended && 'recommended'}
  >
    <Text as="div" className="rec-label"
      content={isRecommended ? 'Highly Recommended' : ''}
    />
    <Heading as="h4" content={title} />
    <Text className="desc" content={desc} />
    <Price>
      ${price}/<span>per mo.</span>
    </Price>
    <Button
      className={`${!isRecommended && "solid "} start-trial ${
        !isRecommended && ' outlined'
      }`}
      title={buttonText}
    />
    {children}
  </PriceTable>
  )
}

const HostingPricing = ({title,description,children}) => {
  return (
    <SectionWrapper id="pricing">
      <Container>
        <SectionHeading
          slogan={ title || "Deal for your business"}
          title={ description || "Meet our pricing plan that suit you"}
        />
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default HostingPricing;
