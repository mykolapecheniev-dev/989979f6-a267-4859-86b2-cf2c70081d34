"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeLargeTitles"
        background="grid"
        cardStyle="glass-depth"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Arrangements",
          id: "arrangements",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Niko"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars",
      }}
      title="Artistry in Every Petal"
      description="Niko is a boutique flower studio dedicated to crafting bespoke floral arrangements that tell your unique story. From intimate gatherings to grand celebrations, we bring nature's elegance to your doorstep."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-couple-celebrating-engagement_23-2149401311.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-young-man-talking-telephone-using-calculator-florist-shop_23-2148075321.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/attractive-african-woman-florist-smiling-making-bouquet-flowers-workplace-white-wall_176420-12262.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-cocktail-dress-gold-chain-bright-spring-pink-makeup-white-background-holds-bouquet-orange-dried-flowers-gift-march-8_343596-8221.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/eucalyptus-plant-white-vase-table_23-2149420692.jpg",
          alt: "Client 5",
        },
      ]}
      avatarText="Loved by floral enthusiasts"
      buttons={[
        {
          text: "View Collection",
          href: "#arrangements",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Fresh Seasonal Blooms",
        },
        {
          type: "text",
          text: "Artisanal Design",
        },
        {
          type: "text",
          text: "Bespoke Arrangements",
        },
        {
          type: "text",
          text: "Nationwide Delivery",
        },
        {
          type: "text",
          text: "Sustainable Sourcing",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="The Niko Philosophy"
      description="We believe flowers are more than decoration; they are a language of emotion. Each arrangement at Niko is thoughtfully designed, sourcing the freshest seasonal blooms to create art that breathes life into any space."
      metrics={[
        {
          value: "10+ years",
          title: "Floral Artistry",
        },
        {
          value: "5k+",
          title: "Bespoke Bouquets",
        },
        {
          value: "100%",
          title: "Fresh Sourced",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/crop-florist-attaching-ribbon-bouquet_23-2147761002.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="arrangements" data-section="arrangements">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Ethereal Morning",
          price: "$85",
          variant: "Seasonal",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-orange-roses-female-hands_169016-19138.jpg",
        },
        {
          id: "p2",
          name: "Wild Garden",
          price: "$95",
          variant: "Wildflower",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-flowers-right-side-orange-with-copy-space_141793-6498.jpg",
        },
        {
          id: "p3",
          name: "Modern Elegance",
          price: "$120",
          variant: "Boutique",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-flowers-with-word_23-2148162959.jpg",
        },
        {
          id: "p4",
          name: "Peony Dreams",
          price: "$110",
          variant: "Signature",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-dried-plants-medium-shot_23-2149513669.jpg",
        },
        {
          id: "p5",
          name: "Spring Tulips",
          price: "$75",
          variant: "Classic",
          imageSrc: "http://img.b2bpic.net/free-photo/bouquet-fresh-tulips-white-bed-top-view_169016-34833.jpg",
        },
        {
          id: "p6",
          name: "Midnight Bloom",
          price: "$150",
          variant: "Premium",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-floral-composition_23-2150969053.jpg",
        },
      ]}
      title="Signature Arrangements"
      description="Explore our curated collection of artisanal bouquets designed for every occasion."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Elena R.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-curly-hair-holding-bouquet-white-flowers_273609-22562.jpg",
        },
        {
          id: "2",
          name: "Marcus W.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-short-hair-holding-greeting-card-bouquet-flowers-looking-camera-confused-surprised-doing-ok-sign-celebrating-international-women-s-day-march-8-standing-white-background_141793-110883.jpg",
        },
        {
          id: "3",
          name: "Sarah J.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-female-florist-with-bunch-red-flowers_23-2147882061.jpg",
        },
        {
          id: "4",
          name: "David T.",
          imageSrc: "http://img.b2bpic.net/free-photo/natural-woman-holding-flowers_23-2148442555.jpg",
        },
        {
          id: "5",
          name: "Lucy K.",
          imageSrc: "http://img.b2bpic.net/free-photo/indoor-shot-cheerful-surprised-dark-skinned-woman-receives-flowers-from-stranger_273609-25321.jpg",
        },
      ]}
      cardTitle="Our Blooming Community"
      cardTag="Testimonials"
      cardAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      title="Start Your Story"
      description="Whether you have a specific request or just want to brighten your home, we're here to help. Reach out and let's craft something beautiful together."
      imageSrc="http://img.b2bpic.net/free-photo/hot-drink-near-warm-accessories-laptop_23-2147943333.jpg"
      mediaAnimation="slide-up"
      inputPlaceholder="Your email address"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Niko"
      columns={[
        {
          title: "Studio",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Arrangements",
              href: "#arrangements",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "FAQs",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Niko Flower Studio. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
