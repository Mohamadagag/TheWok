'use client'
import Footer from "@/components/Footer"
import SocialMediaIcons from "@/components/SocialMediaIcons"
import MessageUsPic from '@/public/MessageUs.png'
import Image from "next/image"
import { useState } from "react"
import axios from "axios"

const MessageUs = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [recommendation, setRecommendations] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
  
    axios.post('https://thewokemailservices.onrender.com/sendEmail', {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      recommendation: recommendation
    }).then(response => {
      alert("Email sent successfully")
      }).catch(error => {
        alert("An Error has occurred")
      });
  }

  return (
    <div>
         <SocialMediaIcons />
         <main className="message-bg xl:justify-center px-5 pt-16 mt-[93px] xl:mt-[87px] 2xl:flex 2xl:justify-around background-img h-screen xl:pt-[100px] xl:px-24">
         <div className="w-full mx-auto 2xl:w-1/2">
                <>
                  <form  className="text-white 2xl:pt-10" onSubmit={handleSubmit}>
                     <h1 className="mb-10 text-5xl font-bold tracking-wide text-white lg:text-7xl">MESSAGE <span className="text-[#970000]">US</span></h1>
                      <div className="flex flex-col flex-wrap mb-5 lg:flex-row lg:justify-between lg:max-w-[100%]">
                        <div className="mb-5 lg:w-1/3">
                          <label className="block mb-3">Full Name<span className="text-[#970000]"> *</span></label>
                          <input required type="text" placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%]" value={fullName} onChange={(e) => setFullName(e.target.value)} />                        
                        </div>

                        <div className="mb-5 lg:w-1/3 ">
                          <label className="block mb-3">Phone Number<span className="text-[#970000]"> *</span></label>
                          <input type="tel" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%]" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                         </div>

                        <div className="lg:w-1/3 ">
                          <label className="block mb-3">Email<span className="text-[#970000]"> *</span></label>
                          <input type="email" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%]" value={email} onChange={(e) => setEmail(e.target.value)} />       
                        </div> 

                      </div>
                      <div className="max-w-5xl lg:max-w-[100%]">
                        <label className="">Share with us new item recommendations to be added to our menu<span className="text-[#970000]"> *</span></label>
                        <textarea rows="6" required className="bg-[#171717] pl-5 pt-3 mt-3 rounded-2xl block w-full" placeholder="placeholder" value={recommendation} onChange={(e) => setRecommendations(e.target.value)} /> 
                     </div>
                      <button type="submit" className="primary-btn px-16 rounded-3xl py-2 text-xl mt-10 w-full max-w-5xl lg:max-w-[20rem] 2xl:max-w-[16rem]">SUBMIT</button>
                  </form>
                </>
              </div>

              <div className="hidden 2xl:block 2xl:p-5 2xl:max-w-[50rem] ">
                <Image src={MessageUsPic} alt="Message Us Image" />
              </div>
          </main> 
    <Footer />
    </div>
  )
}

export default MessageUs