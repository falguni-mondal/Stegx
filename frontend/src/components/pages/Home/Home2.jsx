import React, { useState } from 'react'
import imgIcon from "../../../assets/image.png"
import encrypt from '../../../assets/encrypt.png'
import hide from '../../../assets/hide.png'
import retrieve from '../../../assets/retrieve.png'
const Home = () => {
  const [service, setService] = useState(0);

  const process = [
    {
      heading: "Secure Encryption",
      desc: "Protect messages with advanced encryption for ultimate privacy.",
      img: encrypt
    },
    {
      heading: "Stealthy Embedding",
      desc: "Hide data in images without visible alterations.",
      img: hide
    },
    {
      heading: "Easy Retrieval",
      desc: "Effortlessly extract hidden messages with perfect accuracy.",
      img: retrieve
    },
  ]
  return (
    <section className='homepage w-full pt-28 px-10 flex flex-col items-center gap-10'>
      <div className="heading-container text-center w-1/2 text-[#dedede]">
        <h1 className='heading-txt text-[5.5rem] w-full leading-none tracking-tighter'>Talk in Pixels Not in Words.</h1>
        <p className='heading-paragraph text-[1.2rem] leading-tight tracking-tighter mt-6'>Securely encode your confidential messages within images, ensuring privacy, stealth, and easy retrieval with our advanced steganography technology—fast, reliable, and undetectable.</p>
        <div className="actions">
        <button className='py-3 w-[9rem] mt-8 rounded-md border-[#dedede] border font-bold mr-3'>Learn More</button>
        <button className='py-3 w-[9rem] mt-8 rounded-md bg-[#7220ff] font-bold shadow-2xl shadow-[#491cb3]'>Try Now</button>
        </div>
      </div>
      {/* <div className="service-container col-span-2 flex flex-col items-center">
        <div className="img-upload-bg w-[200px] h-[200px] border-2 border-[#dedede] rounded-3xl mt-8 text-[#dedede] mb-10 flex justify-center items-center relative">
          <img src={imgIcon} className='w-[90%] h-[90%] object-cover' alt="" />
          <span className='flex justify-center w-[10rem] absolute rounded-full bg-[#ffffff31] backdrop-blur-md left-[50%] bottom-[20px] -translate-x-[50%] py-2'>Select Image</span>
        </div>
        <textarea className='w-full bg-[#5f5f5f28] backdrop-blur-lg border-b-2 border-zinc-500 outline-none p-3 resize-none rounded-[5px_5px_0px_0px] text-[#dedede]' rows={5} placeholder='Write your secret here!🤫' name="msg" autoFocus></textarea>
        <button className='py-2.5 w-[10rem] rounded-lg bg-[#7220ff] shadow-2xl shadow-[#491cb3] font-medium text-[#dedede] mt-5'>Hide Message</button>
      </div> */}
      <div className="overview-container flex justify-center gap-5">
        {
          process.map(({ heading, desc, img }) => (
            <div key={img} className="encrypt-desc w-[250px] text-[#dedede] flex flex-col items-center bg-[#80808034] p-3 rounded-md">
              <img className='w-[30px] h-[30px] object-cover' src={img} alt="" />
              <div>
                <h3 className='text-[1.050rem] font-bold mb-1 mt-2 w-full text-center'>{heading}</h3>
                <p className='w-full mx-auto leading-none tracking-tight text-[#a5a5a5] text-center'>{desc}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Home