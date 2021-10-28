import Alert from "./daisyUI/alert"
import Button from "./daisyUI/button"
import TwoCols from "./daisyUI/two-cols"
import Footer from "./daisyUI/footer"
import Header from "./daisyUI/header"
import Heading from "./daisyUI/heading"
import Hero from "./daisyUI/hero"
import Image from "./daisyUI/image"
import Section from "./daisyUI/section"

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
}

export default MDXComponents
