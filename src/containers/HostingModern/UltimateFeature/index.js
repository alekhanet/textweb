import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';

import FeatureBlock from '../common/components/FeatureBlock';
import Container from '../common/components/UI/ContainerTwo';
import Text from '../common/components/Text';
import Link from '../common/components/Link';
import Heading from '../common/components/Heading';
import SectionWrapper, { FeatureWrapper } from './ultimateFeature.style';
import SectionHeading from '../SectionHeading';
import { features } from '../common/data/HostingModern';

import FutureIcon from '../common/assets/image/hostingModern/features/1.png'
export const HostingFeatureBlock = ({title,description,buttonText,linkUrl,iconSrc}) => {


  return (
    <FeatureBlock
      icon={<img className="mx-auto" src={iconSrc || FutureIcon} alt={title} />}
      title={<Heading as="h4" content={title} />}
      description={
        <>
          <Text content={description || "description"} />
          <Link href="#" className="learn__more">
            {buttonText || "learn more"} <Icon icon={chevronRight} />
          </Link>
        </>
      }
      className="ultimateFeature"
    />
  )
}


const HostingUltimateFeatures = ({title, description, children}) => {
  return (
    <SectionWrapper id="features">
      <Container>
        <SectionHeading
          mb="20px"
          slogan={title || "Product features"}
          title={description || "Ultimate features that works"}
        />

        <FeatureWrapper>
          {children}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

HostingUltimateFeatures.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
};

HostingUltimateFeatures.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['-30px', '-30px', '-30px', '-25px', '-30px'],
    mr: ['-30px', '-30px', '-30px', '-25px', '-45px'],
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
  },
};

export default HostingUltimateFeatures;
