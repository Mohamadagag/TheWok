import FamilyCard from '@/components/FamilyCard'
import Footer from '@/components/Footer'
import SocialMediaIcons from '@/components/SocialMediaIcons'

const Ourfamily = () => {
  return (
    <>
         <SocialMediaIcons />
    <div className='background-img mt-[93px] xl:mt-[87px]'>
        <main className='p-5 mb-10 2xl:mb-[7.5rem] relative'>
          <div className='flex flex-col items-center'>
            <div className='xl:w-[93%]'>
             
              <div className='flex flex-col items-center xl:items-start my-5'>
                  <h1 className='font-bold text-white text-4xl' >MEET OUR</h1>
                  <h2 className='font-bold text-[#970000] text-6xl' >FAMILY</h2>
              </div>

              <div className='grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                <FamilyCard/>
                <FamilyCard/>
                <FamilyCard/>
              </div>
            </div>
          </div>

        </main>


        <Footer />
    </div>
    </>
  )
}

export default Ourfamily