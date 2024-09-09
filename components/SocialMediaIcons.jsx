import Tiktok from '../public/social media/tiktok.svg'
import Facebook from '../public/social media/facebook.svg'
import Youtube from '../public/social media/youtube.svg'
import Instagram from '../public/social media/instagram.svg'
import Image from 'next/image'

const SocialMediaIcons = () => {
  return (
    <div className='hidden xl:block'>

    <div className="fixed top-1/2 left-5  z-[999999]">
      <a href="https://www.facebook.com/thewoklb" target='_blank'>
        <Image className='mb-3' src={Facebook} alt='Facebook Icon' />
      </a>
      <a href="https://www.tiktok.com/@thewokarabia" target='_blank'>
        <Image className='mb-3' src={Tiktok} alt='Tiktik Icon' />
      </a>
      <a href="https://www.instagram.com/thewokarabia" target='_blank'>
        <Image className='mb-3' src={Instagram} alt='Instagram Icon' />
      </a>
      <a href="http://www.youtube.com/@thewokarabia" target='_blank'>
        <Image src={Youtube} alt='Youtube Icon' />
      </a>
    </div>
    </div>
  )
}

export default SocialMediaIcons

