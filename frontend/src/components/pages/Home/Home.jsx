import React, { useRef, useState } from 'react';
import {useForm} from 'react-hook-form';
import axios from "axios";
import imgIcon from "../../../assets/image.png"
import encrypt from '../../../assets/encrypt.png'
import hide from '../../../assets/hide.png'
import retrieve from '../../../assets/retrieve.png'
import selectedImg from '../../../assets/image2.png'
import Process from './Process'
const Home = () => {
  const { register, handleSubmit, setValue} = useForm();
  const actionRef = useRef("");
  const imgInputRef = useRef(null);
  const downloadRef = useRef(null);
  const [img, setImg] = useState(null);
  const [ data, setData ] = useState(null);

  const handleUploadClick = () => {
    if(data){
      downloadRef.current.click();
    }
    else{
      imgInputRef.current.click();
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
      if (!allowedTypes.includes(file.type)) {
        alert("Only JPG, JPEG, PNG, and WEBP files are allowed.");
        return;
      }
      setValue('image', e.target.files);
      setImg(file);
    }
  }

  const submitHandler = async (data) => {
    const formData = new FormData();

    formData.append('image', img);
    formData.append('text', data.text);
    formData.append('action', actionRef.current);

    const baseUrl = import.meta.env.VITE_BACKEND_API;

    try{
      const response = await axios.post(`${baseUrl}/stegx`, formData, {
        headers : {
          'Content-Type' : 'multipart/form-data'
        },
      });
      setData(response.data);
    }catch(err){
      console.error('Upload failed:', err);
    }
  }

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
    <section className='homepage w-full pt-28 px-10 grid grid-cols-6 gap-16'>
      {/* LEFT SECTION */}
      <div className="heading-container col-span-2 text-[#dedede]">
        <h1 className='heading-txt text-[5rem] w-full leading-none tracking-tighter'>Talk in Pixels Not in Words.</h1>
        <p className='heading-paragraph text-[1.2rem] leading-tight tracking-tighter mt-6'>Securely encode your confidential messages within images, ensuring privacy, stealth, and easy retrieval with our advanced steganography technology—fast, reliable, and undetectable.</p>
        <button className='py-2 w-[8rem] mt-8 rounded-lg border-[#dedede] border font-bold whiteglow-hover transition-all duration-500'>Learn More</button>
      </div>

      {/* MIDDLE SECTION */}
      <div className="service-container neue-txt col-span-2">
        <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col items-center'>
          <div className="img-upload-bg whiteglow-hover duration-500 transition-all w-[200px] h-[200px] border-2 border-[#dedede] border-dashed rounded-3xl mt-8 text-[#dedede] mb-10 flex justify-center items-center relative">
            <img src={img ? selectedImg : imgIcon} className='w-[90%] h-[90%] object-cover' alt="" />
            <span className={`flex justify-center absolute rounded-full ${img ? "bg-[#0000003a] w-[8rem]" : "bg-[#ffffff31] w-[10rem]"} backdrop-blur-md left-[50%] bottom-[20px] -translate-x-[50%] py-2`}>{data ? "Download" : img ? "Selected" : "Select Image"}</span>

            <div onClick={handleUploadClick} className="img-overlay w-full h-full absolute top-0 left-0 cursor-pointer"></div>

            <input onChange={(e) => handleFileChange(e)} ref={imgInputRef} accept="image/*" className='img-input hidden' type="file" />
            <a ref={downloadRef} download={"Secret.png"} href={data && `data.image`}></a>

          </div>

          <textarea {...register('text', { required: true })} className='w-full bg-[#0000002c] backdrop-blur-lg border-b-2 border-zinc-500 outline-none p-3 resize-none rounded-[5px_5px_0px_0px] text-[#dedede]' rows={5} placeholder='Write your message🤫 / key🔑 here!' autoFocus value={data && `Key : ${data.text}`}></textarea>

          <div className="actions mt-5">
            <button onClick={() => (actionRef.current = 'decrypt')} type='submit' className='py-2.5 w-[10rem] rounded-lg bg-[#b3b3b3] shadow-2xl shadow-[#8a8a8a] font-medium text-black mr-3'>Retrieve Message</button>
            <button onClick={() => (actionRef.current = 'encrypt')} type='submit' className='py-2.5 w-[10rem] rounded-lg bg-[#7220ff] shadow-2xl shadow-[#491cb3] font-medium text-[#dedede]'>Hide Message</button>
          </div>
        </form>
      </div>

      {/* RIGHT SECTION */}
      <div className="overview-container col-span-2 flex flex-col gap-10 mt-10">
        {
          process.map(({ heading, desc, img }) => (
            <Process key={heading} heading={heading} desc={desc} img={img} />
          ))
        }
      </div>
    </section>
  )
}

export default Home