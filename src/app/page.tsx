"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardCarouselSplit from '@/components/sections/hero/HeroBillboardCarouselSplit';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureCardFifteen from '@/components/sections/feature/FeatureCardFifteen';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Factory, Globe, Linkedin, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="mediumSizeExtraLargeSpacing"
      background="fluid"
      cardStyle="neon-glow"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered 
          brandName="AUTOZAZ"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139811510-n9knt0v0.jpg"
          logoAlt="AUTOZAZ Factory Logo"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Get Quote", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarouselSplit 
          title="Premium Factory Manufacturing Excellence"
          mediaItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hero-vehicle-1", imageAlt: "AUTOZAZ manufactured vehicle 1" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hero-vehicle-2", imageAlt: "AUTOZAZ manufactured vehicle 2" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hero-vehicle-3", imageAlt: "AUTOZAZ manufactured vehicle 3" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hero-vehicle-4", imageAlt: "AUTOZAZ manufactured vehicle 4" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hero-vehicle-5", imageAlt: "AUTOZAZ manufactured vehicle 5" }
          ]}
          buttons={[
            { text: "Explore Products", href: "#features" },
            { text: "Contact Sales", href: "contact" }
          ]}
          ariaLabel="AUTOZAZ factory showcase hero section"
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard 
          tag="About AUTOZAZ"
          tagIcon={Factory}
          title="Building Quality Vehicles Since Day One"
          description="Dmitri Volkov"
          subdescription="Founder & CEO"
          icon={Shield}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=about-factory-image"
          imageAlt="AUTOZAZ manufacturing facility"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFifteen 
          title="Manufacturing Capabilities"
          description="Advanced production techniques and quality assurance"
          tag="What We Do"
          features={[
            {
              id: "1",
              title: "Precision Engineering",
              description: "State-of-the-art CNC machinery ensures exact specifications and zero tolerance",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=feature-precision",
              imageAlt: "Precision manufacturing equipment"
            },
            {
              id: "2",
              title: "High-Speed Production",
              description: "Efficient assembly lines producing up to 500 vehicles monthly",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=feature-production",
              imageAlt: "Factory production line"
            },
            {
              id: "3",
              title: "Advanced Technology",
              description: "Automated robotic systems with AI quality control monitoring",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=feature-technology",
              imageAlt: "Advanced manufacturing technology"
            },
            {
              id: "4",
              title: "Fast Delivery",
              description: "Rapid logistics and nationwide distribution capabilities",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140583824-0thdxmzl.jpg",
              imageAlt: "Vehicle delivery and logistics"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Learn More", href: "#" }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardEleven 
          title="AUTOZAZ Performance"
          description="Proven track record of excellence and growth"
          metrics={[
            {
              id: "1",
              value: "50K+",
              title: "Vehicles Produced",
              description: "Total vehicles manufactured since founding",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=metric-production-image",
              imageAlt: "Production statistics"
            },
            {
              id: "2",
              value: "99.8%",
              title: "Quality Rate",
              description: "Industry-leading quality assurance standard",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=metric-quality-image",
              imageAlt: "Quality control metrics"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree 
          title="Leadership Team"
          description="Experienced professionals driving excellence"
          members={[
            {
              id: "1",
              name: "Dmitri Volkov",
              role: "Founder & CEO",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140581190-ft9jvi9y.jpg",
              imageAlt: "Dmitri Volkov",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Globe, url: "https://autozaz.com" }
              ]
            },
            {
              id: "2",
              name: "Elena Sokolov",
              role: "Chief Engineer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766137145255-i5mln4iu.jpg",
              imageAlt: "Elena Sokolov",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "3",
              name: "Viktor Petrov",
              role: "Production Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766137145255-i5mln4iu.jpg",
              imageAlt: "Viktor Petrov",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "4",
              name: "Natasha Mikhailova",
              role: "Quality Assurance Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766137145255-i5mln4iu.jpg",
              imageAlt: "Natasha Mikhailova",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm 
          title="Get in Touch"
          description="Have questions about our manufacturing services? Contact our team to discuss your needs."
          inputs={[
            { name: "company", type: "text", placeholder: "Company Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your manufacturing needs...",
            rows: 5,
            required: true
          }}
          useInvertedBackground="noInvert"
          buttonText="Send Inquiry"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal 
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139811510-n9knt0v0.jpg"
          logoAlt="AUTOZAZ Logo"
          logoWidth={48}
          logoHeight={48}
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Capabilities", href: "features" },
                { label: "Team", href: "team" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Manufacturing Standards", href: "#" },
                { label: "Quality Certifications", href: "#" },
                { label: "Technical Specs", href: "#" },
                { label: "Pricing Info", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 AUTOZAZ Factory. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}