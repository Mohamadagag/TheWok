import Image from 'next/image'
import Chef from '../public/chef.png'

const FamilyCard = () => {
  return (
  <div className='bg-[#171717] p-10 rounded-xl inline-block '>
    <div className='max-w-md'>
        <div className='max-w-full'>
          <Image src={Chef} alt="Family Image" className='object-cover' />
        </div>
        <h2 className='text-white font-semibold text-2xl mt-4 xl:text-3xl '>Chef</h2>
        <p className='text-white text-lg font-light mt-3 xl:text-xl'>You'll be responsible for preparing, cooking, and presenting food to our guests and customers.</p>
    </div>
    </div>
  )
}

export default FamilyCard