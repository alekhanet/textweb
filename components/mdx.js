import Alert from "./daisyUI/alert";
import Button from "./daisyUI/button";
import TwoCols from "./daisyUI/two-cols";
import Footer from "./daisyUI/footer";
import Header from "./daisyUI/header";
import Heading from "./daisyUI/heading";
import Hero from "./daisyUI/hero";
import Image from "./daisyUI/image";
import Section from "./daisyUI/section";
import Navbar from "./daisyUI/navbar";
import NavbarLogo from "./daisyUI/navbar-logo";
import NavbarNavigation from "./daisyUI/navabs-navigation";
import Box from "./daisyUI/box";

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
  NavbarLogo,
  Navbar,
  NavbarNavigation,
  Box,
};

export default MDXComponents;
