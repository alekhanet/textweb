import React from 'react';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { angleRight } from 'react-icons-kit/fa/angleRight';
import Container from '../common/components/UI/ContainerTwo';
import BlogPost from '../common/components/BlogPost';
import SectionHeading from '../SectionHeading';
import SectionWrapper, { ContentWrapper } from './newsFeed.style';
import { newsFeed } from '../common/data/HostingModern';


import news3 from '../common/assets/image/hostingModern/news3.png';
export const HostingFeedPost = ({ id, imageSrc, description, title, linkUrl, linkText }) => {

  return (
    <BlogPost
      key={id}
      thumbUrl={imageSrc || news3}
      title={title || "default title"}
      excerpt={description || "lorem ipsup dolor set amet rurbe ejezz"}
      link={
        <Link href={linkUrl || "#"}>
          <a className="excerptLink">
            {linkText || "link text"} <Icon icon={angleRight} />
          </a>
        </Link>
      }
    />
  )
}

const NewsFeed = ({
  title,
  description,
  children,
}) => {
  return (
    <SectionWrapper id="news">
      <Container>
        <SectionHeading
          slogan={ title || "Latest newsfeed"}
          title={ description || "Our recent blog post that updated"}
        />
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default NewsFeed;
