import React, { Children } from 'react';
import Fade from 'react-reveal/Fade';

import Container from '../common/components/UI/ContainerTwo';
import Heading from '../common/components/Heading';
import Image from '../common/components/Image';
import Link from '../common/components/Link';
import Text from '../common/components/Text';
import List from '../common/components/List';
import NextImage from '../common/components/NextImage';


import FooterWrapper, {
  FooterInner,
  CopyrightInfo,
  FooterWidget,
  Nav,
} from './footer.style';
import LogoImage from '../common/assets/image/hostingModern/logo.png';

import data from '../common/data/HostingModern/index.json';
import twitter from '../common/assets/image/hostingModern/icons/dribbble.png';
import dribbble from '../common/assets/image/hostingModern/icons/facebook.png';
import facebook from '../common/assets/image/hostingModern/icons/github.png';
import github from '../common/assets/image/hostingModern/icons/twitter.png';

export const HostingWidgetLink = ({linkTitle, linkUrl, iconSrc}) => {
  return (
    <>
      <Link href={linkUrl || "#"}>
        <div className="flex items-center">
          {iconSrc && 
          <div className="relative mr-2 w-4 h-4 flex items-center">
            <NextImage src={""} alt="" />
          </div>}
          {linkTitle || "unamed link"}
        </div>
      </Link>
    </>
  )
}

export const HostingFooterWidget = ({ title, children }) => {
  return (
    <>
      <FooterWidget>
        <Fade up delay={200}>
          <Heading as="h4" content={title || "About Us"} />
          <Nav>
              {children}
          </Nav>
        </Fade>
      </FooterWidget>
    </>
  )
} 

const Footer = ({ logoSrc, children }) => {
  return (
    <FooterWrapper>
      <Container>
        <FooterInner>
          <CopyrightInfo>
            <Fade up delay={100}>
              <Image src={ logoSrc || LogoImage?.src } alt="Logo" />
              <p>
                <Link href="#">Terms of use</Link> |{' '}
                <Link href="#">Privacy</Link>
              </p>
              <Text
                className="copyright"
                content="Copyright by 2019 Redq, Inc"
              />
            </Fade>
          </CopyrightInfo>
          {children}
        </FooterInner>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
