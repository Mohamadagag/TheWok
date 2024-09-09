import Image from "next/image";
import Banner from '../public/HomePageBanner.png'
import Facebook from '../public/social media/facebook.svg'
import Tiktok from '../public/social media/tiktok.svg'
import Instagram from '../public/social media/instagram.svg'
import Youtube from '../public/social media/youtube.svg'
import OurStory from '../public/OurStory.png'
import BuildYourOwnWokBottom from '../public/RedSection.svg'
import Hungry from '../public/Hungry.png'
import MobileVector from '../public/mobile.png'
import Think from '../public/ThinkInsideTheBox.png'
import MobileRed from '../public/MobileRed.png'
import Woked from '../public/Woked.png'
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <main className="relative background-img mt-[85px] xl:mt-[87px]">
    {/* Secion */}
    <div className="relative">
      <Image src={Banner} alt="Home Page Banner" className="object-cover w-full"/>
      <div className="absolute order-btn-container">
      <a href="https://heylink.me/thewok?fbclid=PAAaYSf8A7ru06PtyFji2jlUjyRlGCMm6042dVv2pJMevReWJ-uf3j0Eae6ko" target="_blank" className="text-sm order-btn rounded-full text-white">ORDER NOW</a>
      </div>
      <div className="hidden xl:flex xl:flex-col xl:fixed xl:bottom-1/2 xl:right-9 z-[80]">
        <a href="https://www.facebook.com/thewoklb" target='_blank' className="inline-block xl:mb-2 2xl:mb-5"><Image src={Facebook} alt="Facebook" /></a>
        <a href="https://www.tiktok.com/@thewokarabia" target='_blank' className="inline-block xl:mb-2 2xl:mb-5"><Image src={Tiktok} alt="Tiktok" /></a>
        <a href="https://www.instagram.com/thewokarabia" target='_blank' className="inline-block xl:mb-2 2xl:mb-5"><Image src={Instagram} alt="Instagram" /></a>
        <a href="http://www.youtube.com/@thewokarabia" target='_blank' className="inline-block"><Image src={Youtube} alt="Youtube" /></a>
      </div>
    </div>

    {/* Secion */}
    <div className=" w-full px-4 my-10 flex flex-col items-center md:flex-row md:justify-between md:items-center 2xl:px-8  2xl:pt-5">
      <div className="text-white max-w-full 2xl:max-w-[45rem]">
        <h2 className=" text-2xl mb-3 text-[#B61414] 2xl:text-[40px] 2xl:font-bold 2xl:mb-6">OUR STORY</h2>
        <p className="2xl:font-light 2xl:text-2xl 2xl:mb-6 text-justify 2xl:leading-9">Welcome to The Wok, where we're flipping the script on Asian cuisine in Lebanon.</p>
        <p className="2xl:font-light 2xl:text-2xl 2xl:mb-6 text-justify 2xl:leading-9">We're not your average spot – we're the trendsetters, bringing that authentic street food experience straight to your taste buds.</p>
        <p className="2xl:font-light 2xl:text-2xl 2xl:text-justify  2xl:leading-9">We're all about quality and flavor, using only the freshest ingredients and staying true to Asian culinary traditions. Each bite is a burst of excitement that'll have you hooked from the first taste.</p>
      </div>  
      <div className="w-48 md:w-fit md:mt-0  mt-10 md:ml-10  2xl:min-w-max">
        <Image src={OurStory} alt="Our Story" className="object-cover" />
      </div>
    </div>

      {/* Secion */}
        <div className="2xl:pt-16 relative lg:hidden">
        <div className=" mb-10">
          <Image src={MobileRed} alt="Build Your Own Wok Bottom" className="object-cover" />
              <div className="absolute top-20 w-full px-2 top-container">
                <div className="text-white inline-block">
                  <div className="text-container">
                    <h2 className=" font-semibold mb-6 mobile-margin__h2">BUILD YOUR OWN WOK</h2>
                    <p className="leading-2 font-light text-xs mb-4 mobile-margin__p mobile-margin__p_first">Think of us as your culinary playground. With our Build Your Own Concept, you're the boss. Pick your noodles, load up on toppings, and splash on your favorite sauce. It's like creating your own masterpiece in a box!We're all about keeping it real.</p>
                    <p className=" leading-12 font-light text-xs mobile-margin__p ">Our ingredients are top-notch, and our recipes stay true to the soul of Asian street food. Every bite is a burst of flavor that'll have you coming back for more.</p>
                  </div>
                </div>
              </div>
        </div>
      </div>


      {/* Desktop */}
      <div className=" relative hidden lg:block">
        <>
          <Image src={BuildYourOwnWokBottom} alt="Build Your Own Wok Bottom" className="w-full object-cover" />
              <div className="absolute bottom-[32%] pl-5 2xl:bottom-[35%] 2xl:pl-8">
                <div className="text-white">
                  <div className="lg:max-w-xl 2xl:max-w-2xl">
                    <h2 className="lg:text-2xl lg:font-semibold lg:mb-5 2xl:text-5xl 2xl:font-semibold 2xl:mb-10">BUILD YOUR OWN WOK</h2>
                    <p className="lg:mb-3 lg:font-light lg:leading-6 2xl:text-xl 2xl:mb-7 2xl:leading-10 ">Think of us as your culinary playground. With our Build Your Own Concept, you're the boss. Pick your noodles, load up on toppings, and splash on your favorite sauce. It's like creating your own masterpiece in a box!We're all about keeping it real.</p>
                    <p className="font-light lg:leading-6 2xl:text-xl 2xl:leading-10 ">Our ingredients are top-notch, and our recipes stay true to the soul of Asian street food. Every bite is a burst of flavor that'll have you coming back for more.</p>
                  </div>
                </div>
              </div>
        </>
      </div>

    {/* Secion */}
    <div className="relative">
      <div className="w-full flex justify-center">
        <div>
      <Image src={MobileVector} className="block lg:hidden" alt="Think Inside The Box"/>
        </div>
      <Image src={Think} className="hidden lg:block" alt="Think Inside The Box"/>
      </div>
        <div className="flex flex-col items-center absolute px-10 max-w-[75ch] top-[31%] sm:top-[42%] sm:max-w-[65ch] sm:left-[10%] md:top-[37%] md:left-[17%] lg:left-[25%] lg:top-[30%] xl:top-[36%] xl:left-[28%] 2xl:left-[31%] 2xl:top-[38%] bggersc">
          <div className=" text-center">
          <h2 className=" text-red-800 font-bold text-2xl mb-1 max-w-[14ch] md:text-4xl md:mb-10">THINK INSIDE THE BOX</h2>
          </div>
          <p className="text-center text-base md:text-2xl">Picture this: a box filled with noodles, topped with all your favorite fixings, and drenched in mouthwatering sauce. That's our Build Your Own Concept in action. It's like creating your own flavor-packed adventure every time you visit</p>
        </div>
      </div>

    {/* Section */}
    <div className="flex flex-col md:flex-row justify-between items-center mb-10 px-4 lg:px-8 2xl:px-10">
      <div className="max-w-xs mr-3 md:max-w-sm xl:max-w-none">
        <h2 className="text-red-800 font-bold text-2xl mb-3 sm:text-3xl sm:mb-4 md:text-4xl xl:max-w-sm 2xl:text-5xl 2xl:max-w-[26rem] 2xl:mb-16">Noodles Wok'd to Perfection</h2>
        <div className="xl:max-w-md 2xl:max-w-[34rem] font-light">
        <p className="text-white mb-3 xl:text-xl 2xl:text-2xl 2xl:mb-8">So, if you're ready to ditch the ordinary and dive into something extraordinary, join us at The Wok. Get ready to taste Asia in every bite – right here in Lebanon.</p>
        <p className="text-white xl:text-xl 2xl:text-2xl">Let's wok and roll.</p>
        </div>
      </div>
      <div className="max-w-[15rem] mt-5 md:mt-0 md:max-w-[20rem] 2xl:max-w-full">
        <Image src={Woked} alt="Woked" className="object-cover w-full" />
      </div>
    </div>

      {/* Section */}
      <div className="w-full">
       <Image src={Hungry} alt="Hungry Banner" className="object-cover w-full"/>
      </div>

      <Footer />
  </main>);
}