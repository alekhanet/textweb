import Alert from "./daisyUI/alert"
import Button from "./daisyUI/button"
import TwoCols from "./daisyUI/two-cols"
import Footer from "./daisyUI/footer"
import Header from "./daisyUI/header"
import Heading from "./daisyUI/heading"
import Hero from "./daisyUI/hero"
import Image from "./daisyUI/image"
import Section from "./daisyUI/section"

// Hosting Modern Template
// Hosting Modern Template
// Hosting Modern Template
import HostingBanner from "./HostingModern/HostingBanner"
import HostingCallToA from "./HostingModern/HostingCallToA"
import HostingCSupport from "./HostingModern/HostingCSupport"
import HostingNavbar from "./HostingModern/HostingNavbar"
import HostingTopBar from "./HostingModern/HostingTopBar"
import HostingFooter from "./HostingModern/HostingFooter"
import HostingFeature from "./HostingModern/HostingFeature"
import HostingFaq from "./HostingModern/HostingFaq"
import HostingNewsFeed from "./HostingModern/HostingNewsFeed"
import HostingPricing from "./HostingModern/HostingPricing"
import HostingService from "./HostingModern/HostingService"
import HostingTestimonials from "./HostingModern/HostingTestimonials"
import HostingUltimateFeature from "./HostingModern/HostingUltimateFeature"

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

  // Hosting Modern Template
  HostingNavbar,
  HostingBanner,
  HostingCSupport,
  HostingCallToA,
  HostingFaq,
  HostingFooter,
  HostingNewsFeed,
  HostingTestimonials,
  HostingTopBar,
  HostingPricing,
  HostingService,
  HostingUltimateFeature,
  HostingFeature
}

export default MDXComponents

