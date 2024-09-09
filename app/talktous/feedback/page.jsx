'use client'

import Footer from "@/components/Footer"
import Image from "next/image"
import Feedback from '@/public/feedback.png'
import SocialMediaIcons from "@/components/SocialMediaIcons"
import { useState } from "react"
import axios from "axios"

const feedback = () => {
  const [fullName, setFullName] = useState('');
  const [professionalDetail, setprofessionalDetail] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [yourExperience, setYourExperience] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
  
    axios.post('https://thewokemailservices.onrender.com/sendEmail', {
      fullName: fullName,
      professionalDetail: professionalDetail,
      email: email,
      phoneNumber: phoneNumber,
      recommendation: recommendation,
      yourExperience: yourExperience,
    }).then(response => {
      alert("Email sent successfully")
      }).catch(error => {
        alert("An Error has occurred")
      });
  }
  return (
    <>
         <SocialMediaIcons />
      <main className=" xl:justify-center px-5 pb-5 pt-16 mt-[93px] xl:mt-[87px] 2xl:flex 2xl:justify-around background-img xl:pt-[100px] xl:px-24">
        <div className="w-full mx-auto text-white 2xl:w-1/2">
          <div className="font-bold tracking-wide ">
            <h1 className="text-4xl lg:text-5xl">SHARE YOUR</h1>
            <h2 className="text-6xl  lg:text-7xl text-[#970000]">FEEDBACK</h2>
          </div>
          <p className="mt-10 text-xl font-light max-w-[55ch] mb-5 ">Our aim is to grant you an outstanding yourExperience!Let us know how we're doing.</p>
          <div className="w-full mx-auto">
                <>
                  <form className="text-white 2xl:pt-10 2xl:max-w-[35rem] md:w-full" onSubmit={handleSubmit}>
                    <div className="flex flex-col flex-wrap mb-2 lg:flex-row lg:justify-between lg:max-w-[100%]">
                      <div className="mb-5 lg:w-1/2">
                        <label className="block mb-3">Full Name<span className="text-[#970000]"> *</span></label>
                        <input type="text" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%]" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                </div>

                      <div className="mb-5 lg:w-1/2 ">
                        <label className="block mb-3">Profession Details<span className="text-[#970000]"> *</span></label>
                        <input type="text" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%]" value={professionalDetail} onChange={(e) => setprofessionalDetail(e.target.value)} />
                      </div>
                    </div>

                    <div className="flex flex-col flex-wrap mb-2 lg:flex-row lg:justify-between lg:max-w-[100%]">
                      <div className="mb-5 lg:w-1/2">
                        <label className="block mb-3">Email<span className="text-[#970000]"> *</span></label>
                        <input type="email" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%]" value={email} onChange={(e) => setEmail(e.target.value)} />
                       </div>

                      <div className="mb-5 lg:w-1/2 ">
                        <label className="block mb-3">Phone Number<span className="text-[#970000]"> *</span></label>
                        <input type="tel" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%]" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />    
                      </div>
                    </div>

                    <div className="max-w-5xl lg:max-w-[100%] mb-5">
                      <label>Share with us new item recommendations to be added to our menu<span className="text-[#970000]"> *</span></label>
                      <textarea rows="5" required className="bg-[#171717] pl-5 pt-3 mt-3 rounded-2xl block w-full " placeholder="placeholder" value={recommendation} onChange={(e) => setRecommendation(e.target.value)} />
                    </div>
                    <div className="max-w-5xl lg:max-w-[100%]">
                      <label>How was your your experience at The Wok?<span className="text-[#970000]"> *</span></label>
                      <textarea rows="5" required className="bg-[#171717] pl-5 pt-3 mt-3 rounded-2xl block w-full" placeholder="placeholder" value={yourExperience} onChange={(e) => setYourExperience(e.target.value)} />                  
                    </div>
                    <button type="submit" className="primary-btn px-16 rounded-3xl py-2 text-xl mt-10 w-full max-w-5xl lg:max-w-[20rem] 2xl:max-w-[16rem]">SUBMIT</button>
                  </form>
                </>
              </div>
        </div>
        <div className="hidden 2xl:inline-block 2xl:p-5 2xl:max-w-[50rem]">
          <Image src={Feedback} alt="Feedback Image" />
        </div>
      </main>
      <Footer />   
    </>
  )
}

export default feedback