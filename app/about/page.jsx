import Footer from "@/components/Footer"
import SocialMediaIcons from "@/components/SocialMediaIcons"
import Image from "next/image"
import About from '@/public/aboutUs.png'

const AboutUs = () => {
  return (
    <>
      <SocialMediaIcons />
      <main className=" xl:justify-center px-5 pb-5 pt-16 mt-[93px] xl:mt-[87px] 2xl:flex 2xl:justify-around background-img xl:pt-[100px] xl:px-24">
        <div className="w-full mx-auto text-white 2xl:w-1/2">
          <div className="font-bold tracking-wide">
            <h1 className="text-4xl lg:text-5xl">ABOUT <span className="text-[#970000]">US</span></h1>
          </div>
          <p className="mt-20 text-xl font-light mb-5 leading-8">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <p className="mt-10 text-xl font-light mb-5 leading-8">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          <p className="mt-10 text-xl font-light mb-5 leading-8">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
          <p className="mt-10 text-xl font-light mb-5 leading-8">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          <p className="mt-10 text-xl font-light mb-5 leading-8">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum.</p>
          <div className="w-full mx-auto">
                <>
                </>
              </div>
        </div>
        <div className="hidden 2xl:inline-block 2xl:p-5 2xl:max-w-[50rem]">
          <Image src={About} alt="About Us Image" />
        </div>
      </main>
 <Footer />   
</>
  )
}

export default AboutUs