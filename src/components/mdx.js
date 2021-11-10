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
import HostingBanner from "./HostingModern/HostingBanner"
import HostingCallToA from "./HostingModern/HostingCallToA"
import HostingCustomerSupport , {HostingIconList} from "../containers/HostingModern/CustomerSupport"
import HostingNavbar from "./HostingModern/HostingNavbar"
import HostingTopBar from "../containers/HostingModern/TopBar"
import HostingFooter, { HostingFooterWidget, HostingWidgetLink } from "../containers/HostingModern/Footer"
import HostingFeature, { HostingFeatureAccordion} from "../containers/HostingModern/Feature"
import HostingFaq , { HostingFaqItem } from "../containers/HostingModern/Faq"
import HostingNewsFeed, { HostingFeedPost } from "../containers/HostingModern/NewsFeed"
import HostingPricing , { HostingPricingTable , HostingFuturesList} from "../containers/HostingModern/Pricing"
import HostingService, {HostingServiceItem} from "../containers/HostingModern/Service"
import HostingTestimonials,{ HostingTestimonialsSlider , HostingTestimonialsSwiper } from "../containers/HostingModern/Testimonials"
import HostingUltimateFeatures, { HostingFeatureBlock } from "../containers/HostingModern/UltimateFeature"

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
  HostingCustomerSupport, HostingIconList,
  HostingCallToA,
  HostingFaq, HostingFaqItem,
  HostingFooter, HostingFooterWidget, HostingWidgetLink,
  HostingNewsFeed, HostingFeedPost,
  HostingTestimonials, HostingTestimonialsSlider,
  HostingTopBar,
  HostingPricing, HostingPricingTable, HostingFuturesList,
  HostingService, HostingServiceItem,
  HostingUltimateFeatures, HostingFeatureBlock,
  HostingFeature, HostingFeatureAccordion,
  
}
export default MDXComponents

