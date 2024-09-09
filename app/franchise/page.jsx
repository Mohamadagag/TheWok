'use client'
import Footer from "@/components/Footer"
import SocialMediaIcons from "@/components/SocialMediaIcons"
import Franchise from "@/public/franchise.png"
import Image from "next/image"
import { useState } from "react"
import axios from "axios"


const FranchisePage = () => {

  const [fullName, setFullName] = useState('');
  const [professionalDetail, setProfessionalDetail] = useState('');
  const [companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [typeOfFranchise, setTypeOfFranchise] = useState('');
  const [investment, setInvestment] = useState('')
  const [previousExperienceWithAFranchiseCompany, setPreviousExperienceWithAFranchiseCompany] = useState('')
  const [attachment, setAttachment] = useState(null); 
  const [capital, setCapital] = useState(0);
  const [country, setCountry] = useState('');
  const [preQualifications, setPreQualifications] = useState([]) // PRE-QUALIFICATIONS array for

  const [isCheckedFirst, setIsCheckedFirst] = useState(false);
  const [isCheckedSecond, setIsCheckedSecond] = useState(false);
  const [isCheckedThird, setIsCheckedThird] = useState(false);
  const [isCheckedFourth, setIsCheckedFourth] = useState(false);
  const [isCheckedFifth, setIsCheckedFifth] = useState(false);
  const [isCheckedSixth, setIsCheckedSixth] = useState(false);

  const handleCheckedFirst = () => {
    setIsCheckedFirst(prevIsCheckedFirst => {
      const newpreQualifications = [...preQualifications];
      const text = "I have a current line of credit or access to capital";
      if(!prevIsCheckedFirst){
        newpreQualifications.push(text);
      } else {
        const index = newpreQualifications.indexOf(text);
        if (index > -1) {
          newpreQualifications.splice(index, 1);
        }
      }
      setPreQualifications(newpreQualifications);
      return !prevIsCheckedFirst;
    });
  };

  const handleCheckedSecond = () => {
    setIsCheckedSecond(prevIsCheckedSecond => {
      const newpreQualifications = [...preQualifications];
      const text = "I am seeking a multi-unit opportunity";
      if(!prevIsCheckedSecond){
        newpreQualifications.push(text);
      } else {
        const index = newpreQualifications.indexOf(text);
        if (index > -1) {
          newpreQualifications.splice(index, 1);
        }
      }
      setPreQualifications(newpreQualifications);
      return !prevIsCheckedSecond;
    });
  };

  const handleCheckedThird = () => {
    setIsCheckedThird(prevIsCheckedThird => {
      const newpreQualifications = [...preQualifications];
      const text = "I have restaurant business experience";
      if(!prevIsCheckedThird){
        newpreQualifications.push(text);
      } else {
        const index = newpreQualifications.indexOf(text);
        if (index > -1) {
          newpreQualifications.splice(index, 1);
        }
      }
      setPreQualifications(newpreQualifications);
      return !prevIsCheckedThird;
    });
  };

  const handleCheckedFourth = () => {
    setIsCheckedFourth(prevIsCheckedFourth => {
      const newpreQualifications = [...preQualifications];
      const text = "I, or one of my partners, has QSR Restaurant Experience";
      if(!prevIsCheckedFourth){
        newpreQualifications.push(text);
      } else {
        const index = newpreQualifications.indexOf(text);
        if (index > -1) {
          newpreQualifications.splice(index, 1);
        }
      }
      setPreQualifications(newpreQualifications);
      return !prevIsCheckedFourth;
    });
  };

  const handleCheckedFifth = () => {
    setIsCheckedFifth(prevIsCheckedFifth => {
      const newpreQualifications = [...preQualifications];
      const text = "I currently am (or have previously been) a business owner";
      if(!prevIsCheckedFifth){
        newpreQualifications.push(text);
      } else {
        const index = newpreQualifications.indexOf(text);
        if (index > -1) {
          newpreQualifications.splice(index, 1);
        }
      }
      setPreQualifications(newpreQualifications);
      return !prevIsCheckedFifth;
    });
  };

  const handleCheckedSixth = () => {
    setIsCheckedSixth(prevIsCheckedSixth => {
      const newpreQualifications = [...preQualifications];
      const text = "I am currently a multi-unit franchise";
      if(!prevIsCheckedSixth){
        newpreQualifications.push(text);
      } else {
        const index = newpreQualifications.indexOf(text);
        if (index > -1) {
          newpreQualifications.splice(index, 1);
        }
      }
      setPreQualifications(newpreQualifications);
      return !prevIsCheckedSixth;
    });
  };


  const [file, setFile] = useState();
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!file) {
      alert("Please select a File");
      return; 
    }
 

    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('typeOfFranchise', typeOfFranchise);
    formData.append('investment', investment);
    formData.append('previousExperienceWithAFranchiseCompany', previousExperienceWithAFranchiseCompany);
    formData.append('professionalDetail', professionalDetail);
    formData.append('companyName', companyName);
    formData.append('capital', capital);
    formData.append('country', country);
    formData.append('attachment', file);

    preQualifications.forEach((qualification, index) => {
      formData.append(`preQualifications[${index}]`, qualification);
    });

    try {
      const response = await axios.post('https://thewokemailservices.onrender.com/sendEmail', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert("Email sent successfully")
    } catch (error) {
      alert("An Error has occurred")
    }
  };

  return (
    <>
      <SocialMediaIcons />
      <main className="flex flex-col 2xl:flex-row xl:justify-center px-5 pb-5 pt-16 mt-[93px] xl:mt-[87px]  2xl:justify-around background-img xl:pt-[100px] xl:px-24 h-full">
      <div className="mb-12 ml-4 2xl:inline-block 2xl:p-5">
        <div className="mb-10">
          <h1 className="text-4xl text-white text-font-semibold md:text-5xl">BECOME A</h1>
          <h1 className="text-5xl md:text-7xl font-bold text-[#970000]">FRANCHISE</h1>
        </div>
        <div>
          <ul className="leading-relaxed text-white">
            <li  style={{ listStyleType: "square" }}>Passion for the industry and strong belief in our concept</li>
            <li  style={{ listStyleType: "square" }}>Willingness and ability to open multiple units over a defined period of time in a specific geographical area</li>
            <li  style={{ listStyleType: "square" }}>Minimum liquidity to open and operate specified number of units over a defined period of time in a specific geographical area</li>
            <li  style={{ listStyleType: "square" }}>Willingness and ability to issue bank guarantee in case needed</li>
            <li  style={{ listStyleType: "square" }}>5 years experience in Food & Beverage services/Restaurant sector</li>
            <li  style={{ listStyleType: "square" }}>Proven record of having developed or operated multi unit concepts</li>
            <li  style={{ listStyleType: "square" }}>Ability to establish an infrastructure dedicated to the development of our brand</li>
            <li  style={{ listStyleType: "square" }}>Local knowledge and expertise in the areas of real estate, government regulations, labor law and supply chain</li>
          </ul>
        </div>
        <div className="2xl:max-w-[50rem] mt-20 hidden 2xl:inline-block">
          <Image src={Franchise} alt="Franchise Image" />
        </div>
        </div>
        
        <div className="w-full mx-auto text-white 2xl:w-[35%]">
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
                        <input type="text" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%]" value={professionalDetail} onChange={(e) => setProfessionalDetail(e.target.value)} />
                      </div>

                    </div>
                    <div className="flex flex-col flex-wrap mb-2 lg:flex-row lg:justify-between lg:max-w-[100%]">
                      <div className="mb-5 lg:w-1/2">
                        <label className="block mb-3">Company Name<span className="text-[#970000]"> *</span></label>
                        <input type="text" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%]" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                      </div>
                    </div>
                    <div className="flex flex-col flex-wrap mb-2 lg:flex-row lg:justify-between lg:max-w-[100%]">
                      <div className="w-full mb-5">
                        <label className="block mb-3">Company Profile (Pdf or Doc)<span className="text-[#970000]"> *</span></label>
                        <input id="uploadBtn" name="uploadBtn" type="file" placeholder="placeholder" onChange={handleFileChange} className="hidden" />
                        <label htmlFor="uploadBtn" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%] block">Upload File</label>
                      </div>
                    </div>

                    <div className="flex flex-col flex-wrap mb-2 lg:flex-row lg:justify-between lg:max-w-[100%]">
                      <div className="mb-5 lg:w-1/2">
                        <label className="block mb-3">Email<span className="text-[#970000]"> *</span></label>
                        <input type="email" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%]" value={email} onChange={(e) => setEmail(e.target.value)}/>
                      </div>

                      <div className="mb-5 lg:w-1/2 ">
                        <label className="block mb-3">Phone Number<span className="text-[#970000]"> *</span></label>
                        <input type="tel" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%]" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                      </div>

                    </div>

                    <div className="flex flex-col flex-wrap mb-2 lg:flex-row lg:justify-between lg:max-w-[100%]">
                      <div className="mb-5 lg:w-1/2">
                        <label className="block mb-3">Capital and assets NetWorth<span className="text-[#970000]"> *</span></label>
                        <input type="number" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%]" value={capital} onChange={(e) => setCapital(e.target.value)}/>
                      </div>

                      <div className="mb-5 lg:w-1/2 ">
                        <label className="block mb-3">Country<span className="text-[#970000]"> *</span></label>
                        <input type="text" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%]" value={country} onChange={(e) => setCountry(e.target.value)}/>
                      </div>

                    </div>

                    <div className="flex flex-col flex-wrap mb-2 lg:flex-row lg:justify-between lg:max-w-[100%]">
                      <div className="mb-5 lg:w-1/2">
                        <label className="block mb-3">Type Of Franchise<span className="text-[#970000]"> *</span></label>
                        <input type="text" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%]" value={typeOfFranchise} onChange={(e) => setTypeOfFranchise(e.target.value)}/>
                      </div>

                      <div className="mb-5 lg:w-1/2 ">
                        <label className="block mb-3">Investment<span className="text-[#970000]"> *</span></label>
                        <input type="text" required placeholder="placeholder" className="bg-[#171717] pl-5 py-3 rounded-3xl w-full max-w-5xl lg:max-w-[98%] 2xl:max-w-[95%]" value={investment} onChange={(e) => setInvestment(e.target.value)}/>
                      </div>
                    </div>

                    <div className="max-w-5xl lg:max-w-[100%] mb-8">
                      <label>Previous Experience With A Franchise Company<span className="text-[#970000]"> *</span></label>
                      <textarea rows="3" required className="bg-[#171717] pl-5 pt-3 mt-3 rounded-2xl block w-full" placeholder="placeholder" value={previousExperienceWithAFranchiseCompany} onChange={(e) => setPreviousExperienceWithAFranchiseCompany(e.target.value)}></textarea>
                    </div>

                    {/* PRE-QUALIFICATIONS */}
                    <div className="flex flex-col flex-wrap mb-2 lg:max-w-[100%]">
                      <h2 className="mb-6 text-2xl font-semibold">PRE-QUALIFICATIONS</h2>
                      
                      <div onClick={handleCheckedFirst} className={`${isCheckedFirst ? 'border border-[#970000]' : ''} flex items-center justify-center w-full text-[#7A7878] bg-[#171717] p-2 rounded-full hover:cursor-pointer sm:text-text-lg mb-5 text-sm text-center md:text-base`} >
                          <label >I have a current line of credit or access to capital</label>
                      </div>

                      <div onClick={handleCheckedSecond} className={`${isCheckedSecond ? 'border border-[#970000]' : ''} flex items-center justify-center w-full text-[#7A7878] bg-[#171717] p-2 rounded-full hover:cursor-pointer sm:text-text-lg mb-5`}>
                          <label className="text-sm text-center md:text-base hover:cursor-pointer">I am seeking a multi-unit opportunity</label>
                      </div>

                      <div onClick={handleCheckedThird} className={`${isCheckedThird ? 'border border-[#970000]' : ''} flex items-center justify-center w-full text-[#7A7878] bg-[#171717] p-2 rounded-full hover:cursor-pointer sm:text-text-lg mb-5`}>
                          <label className="text-sm text-center md:text-base hover:cursor-pointer">I have restaurant business experience</label>
                      </div>

                      <div onClick={handleCheckedFourth} className={`${isCheckedFourth ? 'border border-[#970000]' : ''} flex items-center justify-center w-full text-[#7A7878] bg-[#171717] p-2 rounded-full hover:cursor-pointer sm:text-text-lg mb-5`}>
                          <label className="text-sm text-center md:text-base hover:cursor-pointer">I, or one of my partners, has QSR Restaurant Experience</label>
                      </div>

                      <div onClick={handleCheckedFifth} className={`${isCheckedFifth ? 'border border-[#970000]' : ''} flex items-center justify-center w-full text-[#7A7878] bg-[#171717] p-2 rounded-full hover:cursor-pointer sm:text-text-lg mb-5`}>
                          <label className="text-sm text-center md:text-base hover:cursor-pointer">I currently am (or have previously been) a business owner</label>
                      </div>

                      <div onClick={handleCheckedSixth} className={`${isCheckedSixth ? 'border border-[#970000]' : ''} flex items-center justify-center w-full text-[#7A7878] bg-[#171717] p-2 rounded-full hover:cursor-pointer sm:text-text-lg mb-5`}>
                          <label className="text-sm text-center md:text-base hover:cursor-pointer">I am currently a multi-unit franchise</label>
                      </div>
                    </div>
                    <button className="bg-[#970000] px-16 rounded-3xl py-2 text-xl mt-10 w-full max-w-5xl lg:max-w-[20rem] 2xl:max-w-[16rem] primary-btn" type="submit">SUBMIT</button>
                  </form>
                </>
              </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default FranchisePage