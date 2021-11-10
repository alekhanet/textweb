import React from 'react';
import Icon from 'react-icons-kit';
import { checkmarkCircled } from 'react-icons-kit/ionicons/checkmarkCircled';
import Container from '../common/components/UI/ContainerTwo';
import NextImage from '../common/components/NextImage';
import Heading from '../common/components/Heading';
import Text from '../common/components/Text';
import List from '../common/components/List';
import SectionWrapper, {
  ContentWrapper,
  Figure,
  Content,
  IconList,
} from './customerSupport.style';
import messenger from '../common/assets/image/hostingModern/messenger.png';



export const HostingIconList = ({title}) => {
  return (
    <List
      className="listItem"
      icon={<Icon icon={checkmarkCircled} size="18" />}
      text={ title || "This is the default text"}
    />
  )
}

const HostingCustomerSupport = ({title,description,imageSrc,children}) => {
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <Figure>
            <NextImage src={imageSrc || messenger} alt="messenger" />
          </Figure>
          <Content>
            <Heading 
            content={title || "Customer support is our main priority."} />
            <Text content={ description || "Get your tests delivered home collect sample ."} />

            <IconList>
              {children}
            </IconList>
          </Content>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default HostingCustomerSupport;
