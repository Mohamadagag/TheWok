import Footer from '@/components/Footer'
import SocialMediaIcons from '@/components/SocialMediaIcons'
import TeamCard from '@/components/TeamCard'

const JoinUs = () => {
  return (
    <>
        <SocialMediaIcons />
        
    <div className='background-img mt-[93px] xl:mt-[87px]'>
      <main className='p-5 mb-1 lg:mb-10 2xl:mb-16 relative'>
       
        <div className='flex flex-col items-center xl:items-start my-5 xl:px-16'>
            <h1 className='font-bold text-white text-4xl' >JOIN OUR</h1>
            <h2 className='font-bold text-[#970000] text-6xl' >TEAM</h2>
        </div>

        <div className='flex justify-center xl:px-16'>
          <div className='grid grid-cols-1 justify-center my-12 gap-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-5'>
            <div><TeamCard /></div>
            <div><TeamCard /></div>
            <div><TeamCard /></div>
            <div><TeamCard /></div>
            <div><TeamCard /></div>
            <div><TeamCard /></div>   
          </div>
        </div>

        {/* <SocialMediaIcons /> */}
      </main>

        <Footer />
    </div>
    </>
  )
}

export default JoinUs