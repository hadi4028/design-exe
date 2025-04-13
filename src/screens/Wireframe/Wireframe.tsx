import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

export const Wireframe = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { text: "HOME", position: "left-[410px]" },
    { text: "product", position: "left-[826px]" },
    { text: "ABOUT", position: "left-[1217px]" },
    { text: "SUPPORT", position: "left-[1581px]" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] h-[5575px] relative">
        <div className="absolute w-[1828px] h-[3240px] top-[-105px] left-[-349px]">
          {/* Hero background image */}
          <img
            className="absolute w-[1440px] h-[1024px] top-[105px] left-[349px] object-cover"
            alt="Ocean background"
            src="/rectangle-3.png"
          />

          {/* Sustainable futures text */}
          <div className="absolute top-[260px] left-[896px] [font-family:'Koulen',Helvetica] font-normal text-white text-4xl text-center tracking-[3.60px] leading-[normal]">
            SUSTAINABLE FUTURES
          </div>

          {/* Main product title */}
          <div className="absolute w-[1286px] top-[690px] left-[426px] [font-family:'Syne',Helvetica] font-bold text-white text-8xl text-center tracking-[4.80px] leading-[normal]">
            THE OCEAN TUMBLER
          </div>

          {/* Navigation bar background */}
          <div className="absolute w-[1414px] h-[73px] top-32 left-[362px] bg-[#d9d9d9] rounded-[70px]" />

          {/* Navigation menu */}
          <NavigationMenu className="absolute top-[142px] left-[362px] w-[1414px]">
            <NavigationMenuList className="w-full justify-between">
              {navItems.map((item, index) => (
                <NavigationMenuItem
                  key={index}
                  className={`absolute w-[140px] ${item.position}`}
                >
                  <NavigationMenuLink className="[font-family:'Koulen',Helvetica] font-normal text-[#00445a] text-2xl text-center tracking-[2.40px] leading-[normal]">
                    {item.text}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Product image */}
          <img
            className="absolute w-[1024px] h-[1024px] top-0 left-[557px] object-cover"
            alt="Ocean Tumbler product"
            src="/chatgpt-image-apr-13--2025--03-03-53-am-1.png"
          />

          {/* Second section background */}
          <div className="absolute w-[1440px] h-[1023px] top-[1163px] left-[349px] bg-[#d9d9d9]" />

          {/* Ocean background image */}
          <img
            className="absolute w-[1828px] h-[1371px] top-[984px] left-0"
            alt="Ocean waves"
            src="/naja-bertolt-jensen-oxbzn6ky17s-unsplash-1.png"
          />

          {/* Placeholder content text */}
          <div className="absolute w-[809px] top-[1443px] left-[638px] [font-family:'Inter',Helvetica] font-black text-white text-4xl text-center tracking-[0] leading-[normal]">
            add rest content
            <br />
            and ocean waste
            <br />
            images and stuff <br />
            rest necessary content
            <br />
            finished this at 4 am
          </div>

          {/* Learn more link */}
          <div className="absolute top-[1045px] left-[1016px] [font-family:'Inter',Helvetica] font-normal text-center leading-[normal] whitespace-nowrap">
            <span className="font-bold text-white tracking-[0] underline">
              LEARN MORE
            </span>
          </div>

          {/* Product description */}
          <div className="absolute top-[920px] left-[797px] [font-family:'Inter',Helvetica] font-semibold italic text-[#ffefef] text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Made from 100% ocean plastic. Every purchase removes 1kg of waste.
          </div>

          {/* Pre-order button background */}
          <div className="absolute w-[201px] h-[62px] top-[962px] left-[960px] bg-[#d9d9d9] rounded-[80px]" />

          {/* Pre-order button */}
          <Button className="absolute w-[164px] top-[962px] left-[977px] h-[62px] rounded-[80px] bg-[#d9d9d9] hover:bg-[#c5c5c5]">
            <span className="[font-family:'Inter',Helvetica] font-black text-[#00445a] text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Pre-Order Now
            </span>
          </Button>

          {/* Third section background */}
          <img
            className="absolute w-[1440px] h-[1023px] top-[2217px] left-[349px] object-cover"
            alt="Ocean section"
            src="/rectangle-8.png"
          />
        </div>

        {/* Fourth section background */}
        <img
          className="absolute w-[1440px] h-[1022px] top-[3166px] left-0 object-cover"
          alt="Ocean plastic waste"
          src="/rectangle-7.png"
        />

        {/* Fifth section background */}
        <img
          className="absolute w-[1440px] h-[1023px] top-[4217px] left-0 object-cover"
          alt="Deep ocean"
          src="/rectangle-9.png"
        />
      </div>
    </div>
  );
};
