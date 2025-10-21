"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Star, Heart, MessageSquare, MapPin } from "lucide-react";

const assetMap: { id: string; url: string; alt?: string }[] = [
  {"id":"hero-bakery","url":"https://images.pexels.com/photos/13308388/pexels-photo-13308388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of sliced artisan bread on a wooden board, showcasing rustic texture."},
  {"id":"about-baker","url":"https://images.pexels.com/photos/8136879/pexels-photo-8136879.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Chef sifting flour into a bowl, preparing dough in a rustic kitchen setting."},
  {"id":"feature-bread-1","url":"https://images.pexels.com/photos/5732756/pexels-photo-5732756.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A freshly baked rustic loaf of bread resting on a wooden cutting board in a cozy kitchen."},
  {"id":"feature-pastries-1","url":"https://images.pexels.com/photos/14363849/pexels-photo-14363849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A display case filled with assorted pastries and breads in a bakery setting, showcasing fresh baked goods."},
  {"id":"feature-cakes-1","url":"https://images.pexels.com/photos/30372662/pexels-photo-30372662.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Closeup of a homemade tiramisu Swiss roll with cream and cocoa topping."},
  {"id":"croissant-product","url":"https://images.pexels.com/photos/7966014/pexels-photo-7966014.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of buttery croissants on a plate, perfect for breakfast."},
  {"id":"sourdough-product","url":"https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Freshly sliced whole grain bread with oats and flour provides a rustic and nutritious appeal."},
  {"id":"chocolate-cake-product","url":"https://images.pexels.com/photos/30700682/pexels-photo-30700682.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Indulge in this rich chocolate hazelnut cake topped with sweets, perfect for dessert lovers."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/7552730/pexels-photo-7552730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Hands holding color swatches over cupcakes and packaging in a bright setting."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/4393655/pexels-photo-4393655.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Smiling man in an apron holding a delivery bag in a cozy cafe setting, ready for service."},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/3985080/pexels-photo-3985080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A joyful moment of a mother and her daughter choosing pastries in a supermarket."},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Young woman with curly hair working on her laptop in a cozy home setting, exuding confidence and focus."},
  {"id":"contact-bakery","url":"https://images.pexels.com/photos/4551154/pexels-photo-4551154.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Defocused interior of restaurant illuminated with various bright lamps shining with warm lights in evening"}
];

export default function Home() {
  // Resolve asset URLs
  const getAssetUrl = (assetId: string) => {
    const asset = assetMap.find(a => a.id === assetId);
    return asset?.url ?? "/public/images/placeholder.webp";
  };

  const getAssetAlt = (assetId: string) => {
    const asset = assetMap.find(a => a.id === assetId);
    return asset?.alt ?? "Decorative image";
  };

  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            {name: "About", id: "about"},
            {name: "Menu", id: "products"},
            {name: "Reviews", id: "testimonials"},
            {name: "Contact", id: "contact"}
          ]}
          brandName="Golden Crust Bakery"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Fresh Baked Goodness Every Day"
          description="Experience the authentic taste of traditional artisan baking with our daily fresh breads, pastries, and custom cakes"
          tag="Family Owned Since 1952"
          tagIcon={Award}
          imageSrc={getAssetUrl("hero-bakery")}
          imageAlt={getAssetAlt("hero-bakery")}
          buttons={[
            {text: "View Menu", href: "products"},
            {text: "Visit Us", href: "contact"}
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "For over 70 years, Golden Crust Bakery has been crafting exceptional baked goods using time-honored recipes and the finest ingredients.",
            "Our master bakers start before dawn each day, hand-shaping artisan breads and creating delicate pastries that bring joy to our community."
          ]}
          buttons={[
            {text: "Learn More", href: "about"}
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Our Signature Items"
          description="Handcrafted daily with premium ingredients and traditional techniques"
          tag="Best Sellers"
          tagIcon={Star}
          products={[
            {
              id: "1",
              brand: "Golden Crust",
              name: "Butter Croissant",
              price: "$3.50",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: getAssetUrl("croissant-product"),
              imageAlt: getAssetAlt("croissant-product")
            },
            {
              id: "2",
              brand: "Golden Crust",
              name: "Artisan Sourdough",
              price: "$6.75",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: getAssetUrl("sourdough-product"),
              imageAlt: getAssetAlt("sourdough-product")
            },
            {
              id: "3",
              brand: "Golden Crust",
              name: "Chocolate Layer Cake",
              price: "$24.99",
              rating: 5,
              reviewCount: "956",
              imageSrc: getAssetUrl("chocolate-cake-product"),
              imageAlt: getAssetAlt("chocolate-cake-product")
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="What Makes Us Special"
          description="Discover the craftsmanship and quality behind every Golden Crust creation"
          tag="Our Promise"
          tagIcon={Heart}
          features={[
            {
              title: "Fresh Daily Baking",
              description: "All our breads and pastries are baked fresh every morning using traditional methods and premium ingredients",
              imageSrc: getAssetUrl("feature-bread-1"),
              imageAlt: getAssetAlt("feature-bread-1")
            },
            {
              title: "Artisan Pastries",
              description: "Our skilled bakers create delicate croissants, Danish pastries, and seasonal specialties with meticulous attention to detail",
              imageSrc: getAssetUrl("feature-pastries-1"),
              imageAlt: getAssetAlt("feature-pastries-1")
            },
            {
              title: "Custom Celebrations",
              description: "From birthday cakes to wedding desserts, we create custom confections that make your special moments unforgettable",
              imageSrc: getAssetUrl("feature-cakes-1"),
              imageAlt: getAssetAlt("feature-cakes-1")
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real testimonials from our valued community members"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Local Resident",
              company: "Downtown District",
              rating: 5,
              testimonial: "The best bakery in town! Their sourdough bread is absolutely incredible, and the staff is always so friendly and helpful.",
              imageSrc: getAssetUrl("testimonial-1"),
              imageAlt: getAssetAlt("testimonial-1")
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Restaurant Owner",
              company: "Chen's Cafe",
              rating: 5,
              testimonial: "Golden Crust has been our go-to supplier for years. Their consistency and quality are unmatched in the area.",
              imageSrc: getAssetUrl("testimonial-2"),
              imageAlt: getAssetAlt("testimonial-2")
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Event Planner",
              company: "Perfect Occasions",
              rating: 5,
              testimonial: "Their custom cakes have made every event special. The attention to detail and taste is phenomenal!",
              imageSrc: getAssetUrl("testimonial-3"),
              imageAlt: getAssetAlt("testimonial-3")
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Corporate Buyer",
              company: "Thompson & Associates",
              rating: 5,
              testimonial: "We order from Golden Crust for all our corporate events. Professional service and delicious products every time.",
              imageSrc: getAssetUrl("testimonial-4"),
              imageAlt: getAssetAlt("testimonial-4")
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          tagIcon={MapPin}
          title="Experience Golden Crust Today"
          description="Stop by our bakery to taste the difference that quality ingredients and traditional baking methods make. We're open daily with fresh selections."
          imageSrc={getAssetUrl("contact-bakery")}
          imageAlt={getAssetAlt("contact-bakery")}
          inputPlaceholder="Enter your email for updates"
          buttonText="Stay Updated"
          termsText="Join our mailing list for special offers and seasonal menu updates."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Golden Crust Bakery"
          columns={[
            {
              items: [
                {label: "About Us", href: "about"},
                {label: "Our Story", href: "about"},
                {label: "Baking Process", href: "feature"}
              ]
            },
            {
              items: [
                {label: "Menu", href: "products"},
                {label: "Daily Specials", href: "products"},
                {label: "Custom Orders", href: "contact"}
              ]
            },
            {
              items: [
                {label: "Reviews", href: "testimonials"},
                {label: "Contact Us", href: "contact"},
                {label: "Visit Store", href: "contact"}
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}