import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form';
import axios from "axios";
import imgIcon from "../../../assets/image.png"
import selectedImg from '../../../assets/image2.png'
import { IoIosArrowDown } from "react-icons/io";

import test1 from "../../../assets/test/1.png";
import test2 from "../../../assets/test/2.png";
import test3 from "../../../assets/test/3.png";
import test4 from "../../../assets/test/4.png";


const Steg = ({ setLoad }) => {

    const { register, handleSubmit, setValue } = useForm();
    const actionRef = useRef("");
    const imgInputRef = useRef(null);
    const testBtnRef = useRef(null);
    const [img, setImg] = useState(null);
    const [data, setData] = useState(null);
    const [showMenu, setShowMenu] = useState(false);

    const handleUploadClick = () => {
        if (data && actionRef.current === "encrypt") {
            const link = document.createElement("a");
            link.href = data.image;
            link.download = "encrypted.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        else {
            imgInputRef.current.click();
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const allowedTypes = ["image/png"];
            if (!allowedTypes.includes(file.type)) {
                alert("Only PNG files are allowed.");
                return;
            }
            setValue('image', e.target.files);
            setImg(file);
        }
    }

    const testImgHandler = async (src, filename) => {
        const response = await fetch(src);
        const blob = await response.blob();
        const file = new File([blob], filename, { type: blob.type });
        setImg(file);
    }

    const submitHandler = async (data) => {
        if (!img) {
            alert("Image is missing!");
            return;
        }
        setLoad(true);
        const formData = new FormData();

        formData.append('image', img);
        formData.append('text', data.text);
        formData.append('action', actionRef.current);

        const baseUrl = import.meta.env.VITE_BACKEND_API;

        try {
            const response = await axios.post(`${baseUrl}/api/stegx`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });

            setData(response.data);
            setLoad(false);
        } catch (err) {
            alert('Upload Failed');
            setLoad(false);
            console.log(err);
        }
    }

    useEffect(() => {
        if (data) {
            const txt = document.getElementById("text-area");
            if (actionRef.current === "encrypt") {
                txt.value = `Key : ${data.text}`;
            }
            else txt.value = `Message : ${data.text}`;
        }
    }, [data]);

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if(e.target !== testBtnRef.current){
                setShowMenu(false);
            }
        })
    }, [])


    return (
        <div className="service-container neue-txt lg:col-span-2">

            <div className="test-img-container relative flex flex-col items-center gap-[4vw] lg:gap-[0.7vw] mb-[4vw] lg:mb-[0.7vw] text-zinc-200 text-[4vw] lg:text-[1.15vw]">
                <div className="text-image-ele relative">
                    <span ref={testBtnRef} onClick={() => setShowMenu(prev => !prev)} className='flex items-center gap-2 text-[4.5vw] lg:text-[1.3vw] py-[2vw] lg:py-[0.3vw] px-[9vw] lg:px-[3vw] pr-[7vw] lg:pr-[2vw] border-2 border-zinc-300 border-dashed rounded-full cursor-pointer'>Test Image <IoIosArrowDown /></span>

                    <div className={`test-img-menu ${showMenu ? "h-fit border-[0.6vw] lg:border-[0.25vw]" : "h-0 border-0"} absolute z-[99] top-[115%] left-0 rounded-lg w-full bg-[#0a091ffa] overflow-hidden border-[#1d1b42fa]`}>
                        <ul className='text-[4vw] lg:text-[1.1vw]'>
                            <li onClick={() => testImgHandler(test1, "test1.png")} className='py-[1.5vw] lg:py-[0.6vw] px-[3vw] lg:px-[1vw] hover:bg-zinc-300 hover:text-black cursor-pointer'>Test image 1</li>
                            <li onClick={() => testImgHandler(test2, "test2.png")} className='py-[1.5vw] lg:py-[0.6vw] px-[3vw] lg:px-[1vw] hover:bg-zinc-300 hover:text-black cursor-pointer'>Test image 2</li>
                            <li onClick={() => testImgHandler(test3, "test3.png")} className='py-[1.5vw] lg:py-[0.6vw] px-[3vw] lg:px-[1vw] hover:bg-zinc-300 hover:text-black cursor-pointer'>Test image 3</li>
                            <li onClick={() => testImgHandler(test4, "test4.png")} className='py-[1.5vw] lg:py-[0.6vw] px-[3vw] lg:px-[1vw] hover:bg-zinc-300 hover:text-black cursor-pointer'>Test image 4</li>
                        </ul>
                    </div>
                </div>


                OR
            </div>

            <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col items-center'>
                <div className="img-upload-bg whiteglow-hover w-[50vw] h-[50vw] lg:w-[14vw] lg:h-[14vw] duration-500 transition-all border-2 border-[#dedede] border-dashed rounded-3xl text-[#dedede] mb-6 flex justify-center items-center relative">
                    <img src={img ? selectedImg : imgIcon} className='w-[90%] h-[90%] object-cover' alt="" />
                    <span className={`flex justify-center absolute rounded-full ${img ? "bg-[#0000003a] w-[34vw] lg:w-[9vw]" : "bg-[#ffffff31] w-[40vw] lg:w-[11vw]"} backdrop-blur-md left-1/2 bottom-[20px] -translate-x-1/2 py-[2vw] lg:py-[0.6vw] text-[4vw] lg:text-[1.15vw]`}>{data && actionRef.current === "encrypt" ? "Download" : img ? "Selected" : "Select Image"}</span>

                    <div onClick={handleUploadClick} className="img-overlay w-full h-full absolute top-0 left-0 cursor-pointer"></div>

                    <input onChange={(e) => handleFileChange(e)} ref={imgInputRef} accept="image/png" className='img-input hidden' type="file" />

                </div>

                <textarea id='text-area' {...register('text', { required: true })} className='w-full h-[50vw] lg:h-[11vw] max-h-[300px] bg-[#1c144b2c] lg:bg-[#0000002c] backdrop-blur-lg border-b-2 border-zinc-500 outline-none p-3 resize-none rounded-[5px_5px_0px_0px] text-[#dedede] text-[3.8vw] lg:text-[1.12vw]' placeholder='Write your message🤫 / key🔑 here!' required></textarea>

                <div className="actions w-full mt-5 flex justify-between">
                    <button onClick={() => (actionRef.current = 'decrypt')} type='submit' className='py-[2.7vw] lg:py-[0.7vw] w-[45vw] lg:w-[13vw] text-[3.7vw] lg:text-[1.1vw] rounded-lg bg-[#b3b3b3] shadow-2xl shadow-[#8a8a8a] font-medium text-black'>Retrieve Message</button>
                    <button onClick={() => (actionRef.current = 'encrypt')} type='submit' className='py-[2.7vw] lg:py-[0.7vw] w-[45vw] lg:w-[13vw] text-[3.7vw] lg:text-[1.1vw] rounded-lg bg-[#5038d8] shadow-2xl shadow-[#491cb3] font-medium text-[#dedede]'>Hide Message</button>
                </div>
            </form>
        </div>
    )
}

export default Steg