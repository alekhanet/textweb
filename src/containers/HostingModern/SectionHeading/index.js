import React from 'react';
import Heading from '../common/components/Heading';
import HGroup from './sectionHeading.style';

const SectionHeading = ({ title, slogan, ...props }) => {
  return (
    <HGroup {...props}>
      <div className="text-bluedar"><Heading as="h4" content={slogan} /></div>
      <Heading as="h2" content={title} />
    </HGroup>
  );
};

export default SectionHeading;
