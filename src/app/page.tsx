"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="large"
      background="radialGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Yamada Resort"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763741621614-rdd7cw7g.jpg"
          navItems={[
            { name: "Experience", id: "experience" },
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Gallery", id: "gallery" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Reserve Now", href: "contact" }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="YAMADA"
          description="Nestled in the Japanese Alps, an authentic mountain sanctuary where ancient tradition meets contemporary luxury"
          buttons={[
            { text: "Explore", href: "experience" },
            { text: "Reserve", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763741622161-u0h3cqz2.jpg"
          imageAlt="Japanese mountain landscape"
          showDimOverlay={true}
          containerClassName="relative h-screen"
          logoClassName="text-7xl font-light tracking-widest"
          descriptionClassName="text-lg font-light tracking-wide opacity-90"
        />
      </div>
      
      <div id="experience" data-section="experience">
        <TextAbout
          title="Immerse yourself in the tranquility of mountain living. A sanctuary where natural beauty guides every moment, honoring centuries of hospitality tradition."
          buttons={[
            { text: "Learn More", href: "rooms" }
          ]}
          titleClassName="text-5xl md:text-6xl font-light leading-tight tracking-wide"
          containerClassName="py-32 px-6"
        />
      </div>
      
      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Accommodations"
          description="Each room is designed to showcase the mountain views and natural serenity surrounding our resort"
          products={[
            {
              id: "1",
              name: "Deluxe Mountain View",
              price: "¥280,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763741622817-md0ihtfq.jpg",
              imageAlt: "Deluxe room with mountain view"
            },
            {
              id: "2",
              name: "Premier Suite",
              price: "¥450,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763741623371-opihcb7l.jpg",
              imageAlt: "Premier suite with valley panorama"
            },
            {
              id: "3",
              name: "Garden Pavilion",
              price: "¥380,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763741625276-bos7zg62.jpg",
              imageAlt: "Private garden pavilion accommodation"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          textboxLayout="default"
          titleClassName="text-4xl font-light tracking-wide"
          descriptionClassName="text-lg font-light opacity-80"
          cardNameClassName="text-sm font-light tracking-wide uppercase"
          cardPriceClassName="text-2xl font-light tracking-tight"
        />
      </div>
      
      <div id="amenities" data-section="amenities">
        <FeatureCardNine
          title="Authentic Experiences"
          description="Discover the essence of Japanese hospitality through carefully curated mountain experiences"
          features={[
            {
              id: 1,
              title: "Private Onsen",
              description: "Natural hot spring bathing overlooking mountain peaks. A meditative ritual connecting you to nature's warmth and the seasons.",
              phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763741624211-a0iqdime.jpg" },
              phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763741625276-bos7zg62.jpg" }
            },
            {
              id: 2,
              title: "Kaiseki Dining",
              description: "Multi-course traditional Japanese cuisine using seasonal mountain ingredients prepared by master chefs.",
              phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763741625895-f59uoe1u.jpg" },
              phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763741622161-u0h3cqz2.jpg" }
            }
          ]}
          showStepNumbers={false}
          textboxLayout="default"
          titleClassName="text-4xl font-light tracking-wide"
          featureTitleClassName="text-2xl font-light tracking-wide"
          featureDescriptionClassName="text-base font-light opacity-80"
        />
      </div>
      
      <div id="gallery" data-section="gallery">
        <TestimonialCardOne
          title="Guest Experiences"
          description="Reflections from travelers who found serenity in our mountain sanctuary"
          testimonials={[
            {
              id: "1",
              name: "Yuki Tanaka",
              role: "Tokyo",
              company: "Architect",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763741626942-6lvqzgzf.jpg",
              imageAlt: "Yuki Tanaka"
            },
            {
              id: "2",
              name: "Hiroshi Yamamoto",
              role: "Kyoto",
              company: "Philosopher",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763741627582-dlxydwgx.jpg",
              imageAlt: "Hiroshi Yamamoto"
            },
            {
              id: "3",
              name: "Mei Chen",
              role: "Singapore",
              company: "Artist",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763741628479-0ba50n1s.jpg",
              imageAlt: "Mei Chen"
            },
            {
              id: "4",
              name: "David Park",
              role: "Seoul",
              company: "Writer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763741629202-o81wo9i1.jpg",
              imageAlt: "David Park"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          textboxLayout="default"
          titleClassName="text-4xl font-light tracking-wide"
          descriptionClassName="text-lg font-light opacity-80"
          nameClassName="text-sm font-light tracking-wide"
          roleClassName="text-xs font-light opacity-70"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Begin Your Journey"
          description="Reserve your retreat in the Japanese mountains. Our team ensures every detail of your stay reflects our commitment to excellence."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "dates", type: "text", placeholder: "Preferred Dates", required: true },
            { name: "guests", type: "number", placeholder: "Number of Guests", required: true }
          ]}
          textarea={{ name: "message", placeholder: "Special requests or questions", rows: 4, required: false }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763741629709-ava1ng0f.jpg"
          imageAlt="Mountain resort evening view"
          mediaPosition="right"
          buttonText="Reserve Now"
          titleClassName="text-3xl font-light tracking-wide"
          descriptionClassName="text-base font-light opacity-80"
          buttonClassName="px-8 py-3 font-light tracking-wide"
          containerClassName="py-32"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="YAMADA RESORT"
          columns={[
            {
              items: [
                { label: "Accommodations", href: "rooms" },
                { label: "Experiences", href: "experience" },
                { label: "Amenities", href: "amenities" }
              ]
            },
            {
              items: [
                { label: "Gallery", href: "gallery" },
                { label: "Contact", href: "contact" },
                { label: "Reservations", href: "contact" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "experience" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" }
              ]
            }
          ]}
          logoClassName="text-2xl font-light tracking-widest mb-12"
          columnClassName="flex flex-col space-y-4"
          itemClassName="text-sm font-light tracking-wide hover:opacity-70 transition-opacity"
          containerClassName="py-16"
        />
      </div>
    </ThemeProvider>
  );
}