import Alert from "./daisyUI/alert";
import Button from "./daisyUI/button";
import TwoCols from "./daisyUI/two-cols";
import Footer from "./daisyUI/footer";
import Header from "./daisyUI/header";
import Heading from "./daisyUI/heading";
import Hero from "./daisyUI/hero";
import Image from "./daisyUI/image";
import Section from "./daisyUI/section";
import Box from "./daisyUI/box";
import Header2 from "./daisyUI/header-2";
import InfoCard from "./daisyUI/info-card";
import ThreeCols from "./daisyUI/three-cols";
import InfoHeading from "./daisyUI/info-heading-1";
import InfoText from "./daisyUI/info-text-1";
import InfoSubHeader from "./daisyUI/info-sub-header-1";
import Footer2 from "./daisyUI/footer-2";
const MDXComponents = {
  Alert,
  Button,
  TwoCols,
  Footer,
  Header,
  Heading,
  Hero,
  Badge: ({ children }) => <div>{children}</div>,
  Image,
  Section,
  Box,
  Header2,
  InfoCard,
  ThreeCols,
  InfoHeading,
  InfoText,
  InfoSubHeader,
  Footer2,
};

export default MDXComponents;
