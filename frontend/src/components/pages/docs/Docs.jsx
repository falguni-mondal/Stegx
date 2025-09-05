import React, { useState } from 'react'
import { HiSquares2X2 } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosWarning } from "react-icons/io";
import { IoIosLink } from "react-icons/io";



import step1 from "../../../assets/steps/1.webp";
import step2 from "../../../assets/steps/2.webp";
import step3 from "../../../assets/steps/3.webp";
import step4 from "../../../assets/steps/4.webp";
import step5 from "../../../assets/steps/5.webp";
import step6 from "../../../assets/steps/6.webp";
import step7 from "../../../assets/steps/7.webp";
import step8 from "../../../assets/steps/8.webp";


const Docs = () => {

    return (
        <section className='w-full h-[100vh] font-helv tracking-wide flex bg-[#00000091] overflow-y-scroll' id='docs-section'>
            <section className='w-[20%] min-h-[100vh] hidden lg:block sticky top-0' id="docs-navbar">
                <div className="section-intro p-10 text-zinc-200 flex gap-1 items-center">
                    <HiSquares2X2 />
                    <span className='docs-main-heading'>Documentation</span>
                </div>
                <div className="menu-wrapper text-zinc-300 border-r border-[#504e75fb]">
                    <ul className="menu-container">
                        <li className={`menu-item-container flex gap-2 items-center pl-6 py-1.5`}>
                            <IoIosArrowForward className='text-[0.6rem]' />
                            <a href="#overview" className={`hover:text-[#938bff] paragraph`}>Overview</a>
                        </li>
                        <li className={`menu-item-container flex gap-2 items-center pl-6 py-1.5`}>
                            <IoIosArrowForward className='text-[0.6rem]' />
                            <a href="#using" className={`hover:text-[#938bff] paragraph`}>How to use</a>
                        </li>
                        <li className={`menu-item-container flex gap-2 items-center pl-6 py-1.5`}>
                            <IoIosArrowForward className='text-[0.6rem]' />
                            <a href="#inspiration" className={`hover:text-[#938bff] paragraph`}>Inspiration</a>
                        </li>
                        <li className={`menu-item-container flex gap-2 items-center pl-6 py-1.5`}>
                            <IoIosArrowForward className='text-[0.6rem]' />
                            <a href="#uniqueness" className={`hover:text-[#938bff] paragraph`}>What is unique</a>
                        </li>
                        <li className={`menu-item-container flex gap-2 items-center pl-6 py-1.5`}>
                            <IoIosArrowForward className='text-[0.6rem]' />
                            <a href="#sys-overview" className={`hover:text-[#938bff] paragraph`}>System Overview</a>
                        </li>
                        <li className={`menu-item-container flex gap-2 items-center pl-6 py-1.5`}>
                            <IoIosArrowForward className='text-[0.6rem]' />
                            <a href="#security" className={`hover:text-[#938bff] paragraph`}>Security</a>
                        </li>
                        <li className={`menu-item-container flex gap-2 items-center pl-6 py-1.5`}>
                            <IoIosArrowForward className='text-[0.6rem]' />
                            <a href="#privacy" className={`hover:text-[#938bff] paragraph`}>User Privacy</a>
                        </li>
                        <li className={`menu-item-container flex gap-2 items-center pl-6 py-1.5`}>
                            <IoIosArrowForward className='text-[0.6rem]' />
                            <a href="#real-world-usage" className={`hover:text-[#938bff}`}>Real worls usecase</a>
                        </li>
                        <li className={`menu-item-container flex gap-2 items-center pl-6 py-1.5`}>
                            <IoIosArrowForward className='text-[0.6rem]' />
                            <a href="#challenges" className={`hover:text-[#938bff] paragraph`}>Challenges</a>
                        </li>
                        <li className={`menu-item-container flex gap-2 items-center pl-6 py-1.5`}>
                            <IoIosArrowForward className='text-[0.6rem]' />
                            <a href="#tech" className={`hover:text-[#938bff] paragraph`}>Technologies</a>
                        </li>
                        <li className={`menu-item-container flex gap-2 items-center pl-6 py-1.5`}>
                            <IoIosArrowForward className='text-[0.6rem]' />
                            <a href="#careful" className={`hover:text-[#938bff] paragraph`}>Be Careful</a>
                        </li>
                        <li className={`menu-item-container flex gap-2 items-center pl-6 py-1.5`}>
                            <IoIosArrowForward className='text-[0.6rem]' />
                            <a href="#credits" className={`hover:text-[#938bff] paragraph`}>Developers</a>
                        </li>
                        <li className={`menu-item-container flex gap-2 items-center pl-6 py-1.5`}>
                            <IoIosArrowForward className='text-[0.6rem]' />
                            <a href="#disclaimer" className={`hover:text-[#938bff] paragraph`}>Disclaimer</a>
                        </li>
                        <li className={`menu-item-container flex gap-2 items-center pl-6 py-1.5`}>
                            <IoIosArrowForward className='text-[0.6rem]' />
                            <a href="#explore" className={`hover:text-[#938bff] paragraph`}>Explore more</a>
                        </li>
                    </ul>
                </div>
            </section>

            <section className='lg:w-[80%] px-3 lg:px-20 pt-5 lg:pt-[15vh] text-[#cecece]' id="docs-dets">

                <div className='scroll-mt-24 mb-20' id="overview">
                    <h2 className='docs-heading'>Overview</h2>
                    <p className='docs-subheading'>Securely hide your text inside images (not watermarking).</p>
                    <p className="paragraph mt-8">
                        Stegx is a powerful and intuitive web application designed to perform <span className='highlight'>encryption-based image steganography</span>. It allows users to securely <span className="highlight">hide secret messages inside images</span> using a highly secure, custom-developed algorithm that manipulates pixel-level data without noticeably altering the visual appearance of the image.
                    </p>
                    <p className="paragraph mt-4">
                        Built with a strong focus on security, usability, and innovation, Stegx provides an end-to-end encryption-decryption workflow where the message is converted into a secure binary form and embedded deep within the image data. This process is done entirely on the web, making it accessible and easy to use while maintaining a high standard of cryptographic protection.
                    </p>
                </div>

                <div className='scroll-m-24 mb-20' id="using">
                    <h2 className='docs-heading'>How to use Stegx?</h2>
                    <p className='docs-subheading'>A quick guide to hide and retrieve your messages.</p>
                    <p className="paragraph mt-8 pb-8 mb-8 border-b border-[#504e75fb]">
                        To use Stegx, you have two primary functions: hiding a message within an image (Embedding) and retrieving a message from a processed image. Follow these steps carefully to ensure your data remains secure and accessible.
                    </p>

                    <div>
                        <h3 className='mini-heading font-semibold flex gap-1 items-center'>
                            <HiSquares2X2 className='rotate-45 text-[1.5rem]' />
                            <span>Hiding a Message (Embedding)</span>
                        </h3>
                        <p className='paragraph'>This process allows you to embed a secret message into an image.</p>
                        <ul className='mt-10'>
                            <li>
                                <p className='paragraph mb-2'>
                                    <span className='font-semibold '>1. Select an Image :</span> Click on the image icon to choose a PNG file from your system. The icon will change to display your selected image.
                                </p>
                                <img src={step1} alt="" />
                            </li>
                            <li className='mt-14'>
                                <p className='paragraph mb-2'>
                                    <span className='font-semibold '>2. Write Your Message :</span> In the text area labeled "Write your message / key here!", type or paste the message you want to hide.
                                </p>
                                <img src={step2} alt="" />
                            </li>
                            <li className='mt-14'>
                                <p className='paragraph mb-2'>
                                    <span className='font-semibold '>3. Start the Process :</span> Click the "Hide Message" button. The app will process the image and message. After 3-5 seconds (depending on your network), the process will be complete.
                                </p>
                                <img src={step3} alt="" />
                            </li>
                            <li className='mt-14'>
                                <p className='paragraph mb-2'>
                                    <span className='font-semibold '>4. Download Data :</span> The app will give you two critical pieces of information:
                                </p>
                                <p className='paragraph pl-5 mb-1'>
                                    <span className=''>•</span> <span className='underline'>Processed Image</span> : The image box will now contain the processed image with your hidden message. Click it to download this file.
                                </p>
                                <p className='paragraph pl-5 mb-3'>
                                    <span className=''>•</span> <span className='underline'>Unique Key</span> : The text area will now show a unique key. Copy this key and save it securely. You will need both the processed image and this key to retrieve your message later.
                                </p>
                                <img src={step4} alt="" />
                            </li>
                        </ul>
                    </div>
                    <div className="mt-14">
                        <h3 className='flex gap-1 items-center mini-heading font-semibold mb-3'><IoIosWarning className='text-[1.2rem] text-amber-500' /> Important Warnings</h3>
                        <p className='paragraph pl-3'>
                            <span className='font-semibold'>• Do Not Lose Your Data</span> : If either the processed image or the unique key is lost or altered, your message will be permanently unrecoverable.
                        </p>
                        <p className='paragraph pl-3 mt-3 mb-3'>
                            <span className='font-semibold'>• Avoid Image Compression</span> : Sending the processed image through platforms like WhatsApp, Facebook, or Instagram often compresses te image, which will destroy the hidden message.
                        </p>
                        <p className='paragraph pl-3'>
                            <span className='font-semibold'>• Recommended Sharing Methods</span> : To safely share the image, send it as a document file on platforms like WhatsApp or upload it to a cloud service like Google Drive and share the link.
                        </p>
                    </div>

                    <div className='mt-14'>
                        <h3 className='mini-heading font-semibold flex gap-1 items-center'>
                            <HiSquares2X2 className='rotate-45 text-[1.5rem]' />
                            <span>Retrieving a Message</span>
                        </h3>
                        <p className='paragraph'>To retrieve your hidden message, you need the original processed image and the unique key.</p>
                        <ul className="mt-10">
                            <li>
                                <p className='paragraph mb-2'>
                                    <span className='font-semibold '>1. Upload the Processed Image :</span> Click the "Select Image" box and select the processed image file you previously downloaded from the app.
                                </p>
                                <img src={step5} alt="" />
                            </li>
                            <li className='mt-14'>
                                <p className='paragraph mb-2'>
                                    <span className='font-semibold '>2. Paste the Unique Key :</span> Paste your unique key into the text area. Make sure to paste only the key value itself, excluding the "key:" prefix and any extra spaces.
                                </p>
                                <img src={step6} alt="" />
                            </li>
                            <li className='mt-14'>
                                <p className='paragraph mb-2'>
                                    <span className='font-semibold '>3. Click on Retrieve Message :</span> Click the "Retrieve Message" button. The app will process the image and key, and after a few seconds, your hidden message will appear in the text area.
                                </p>
                                <img src={step7} alt="" />
                            </li>
                            <li className='mt-14'>
                                <p className='paragraph mb-2'>
                                    <span className='font-semibold '>4. Get the message :</span> After few seconds of processing the actual message will appear in the same text area where the unique key was written.
                                </p>
                                <img src={step8} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='scroll-mt-24 mb-20' id="inspiration">
                    <h2 className='docs-heading'>Inspiration</h2>
                    <p className='docs-subheading'>From a Simple Question to a Powerful Tool, The Story Behind Our Technology.</p>
                    <p className="paragraph mt-8">
                        The idea for Stegx was born from a deep curiosity about how digital information can be hidden in plain sight, combined with a passion for solving real-world problems through code. In a world where privacy is increasingly at risk and communication is constantly monitored, there’s a growing need for methods that allow people to share sensitive information discreetly—without raising suspicion or compromising security.
                    </p>
                    <p className="paragraph mt-4">
                        Traditional encryption is powerful, but its output often looks suspicious: garbled text, unreadable formats, or strange files. Steganography, on the other hand, offers a clever alternative—hiding the existence of the message altogether. This subtlety fascinated us.
                    </p>
                    <p className="paragraph mt-4">
                        What started as a simple experiment with basic steganographic techniques evolved into something much more ambitious. We wanted to go beyond the usual Least Significant Bit (LSB) methods and build something that would not only conceal data but also protect it with a custom, layered encryption process that could stand up to real analysis.
                    </p>
                    <p className="paragraph mt-4">
                        The goal was clear : Create a tool that is simple for users, yet extremely difficult to break, even for those who suspect that hidden data exists.
                    </p>
                    <p className="paragraph mt-4">
                        Stegx was developed to bring this vision to life—a modern, secure, and user-friendly steganography tool that proves how creative thinking, math, and code can be combined to build meaningful security solutions.
                    </p>
                    <p className="paragraph mt-4">
                        It’s more than just a project. It’s a statement :<br />
                        Security doesn’t always have to be loud. Sometimes, the best way to protect something is to make sure no one even knows it’s there.
                    </p>
                </div>

                <div className='scroll-mt-24 mb-20' id="uniqueness">
                    <h2 className='docs-heading'>What is Unique?</h2>
                    <p className='docs-subheading'>Beyond the surface what makes our technology uniquely secure</p>
                    <div className='mt-8 pl-5'>
                        <h3 className='mini-heading font-semibold'>🔐 Custom Encryption Before Embedding</h3>
                        <p className="paragraph mt-3">
                            Unlike standard tools that directly hide plain text in image pixels, Stegx encrypts the message using a multi-step custom algorithm before embedding it. This makes the hidden data useless and unreadable unless decrypted with the exact key.
                        </p>
                    </div>
                    <div className='mt-8 pl-5'>
                        <h3 className='mini-heading font-semibold'>🧠 Intelligent Key Generation</h3>
                        <p className="paragraph mt-3">
                            Each operation in Stegx produces a unique decryption key that encodes essential details required to reverse the process—without revealing anything meaningful on its own. The key structure is intentionally obfuscated, making reverse-engineering impractical.
                        </p>
                    </div>
                    <div className='mt-8 pl-5'>
                        <h3 className='mini-heading font-semibold'>🧩 Deep Pixel Manipulation with High Fidelity</h3>
                        <p className="paragraph mt-3">
                            The encrypted data is embedded at the binary level of RGB pixel values, ensuring that the image remains visually identical while carrying an encrypted payload. This advanced method makes detection via statistical or visual analysis extremely difficult.
                        </p>
                    </div>
                    <div className='mt-8 pl-5'>
                        <h3 className='mini-heading font-semibold'>🚫 Difficult to Brute-Force</h3>
                        <p className="paragraph mt-3">
                            With a breaking complexity greater than 429,49,67,29,83,66 (4.2 bilion), Stegx is not vulnerable to common brute-force or dictionary attacks. Without the exact encryption parameters and key, decryption is computationally infeasible—even for attackers who suspect something is hidden.
                        </p>
                    </div>
                    <div className='mt-8 pl-5'>
                        <h3 className='mini-heading font-semibold'>🌐 100% Web-Based, No Installation</h3>
                        <p className="paragraph mt-3">
                            Stegx runs entirely in the browser. No software installation, no data stored on servers—everything happens client-side, giving users complete control and privacy.
                        </p>
                    </div>

                </div>

                <div className="scroll-mt-24 mb-20" id="sys-overview">
                    <h2 className='docs-heading'>System Overview</h2>
                    <p className='docs-subheading mb-8'>Basic overview of the system that powers secure communication</p>

                    <p className='paragraph'>
                        Stegx is built around a secure and carefully layered architecture that transforms textual information into an encrypted binary format and embeds it within an image using pixel-level manipulation. The entire process is designed to be lightweight, browser-accessible, and highly secure, ensuring ease of use without compromising the integrity of the hidden message.
                    </p>
                    <p className='paragraph mt-4'>
                        At its core, Stegx follows a three-phase flow: Input Handling → Encryption & Embedding → Output & Key Generation.
                        <br />Each phase plays a critical role in maintaining the confidentiality, accuracy, and reversibility of the steganographic process.
                    </p>

                    <div>
                        <h2 className='mb-2 mt-10 mini-heading font-semibold tracking-wide'>1. Input Handling</h2>
                        The system begins by accepting two user inputs:

                        <ul className='list-disc pl-10'>
                            <li className='paragraph'>A cover image (the image in which the message will be hidden)</li>
                            <li className='paragraph'>A text message (the secret information to be concealed)</li>
                        </ul>
                        <br />
                        <p className='paragraph'>Before proceeding, the system checks for:</p>
                        <ul className='list-disc pl-10'>
                            <li className='paragraph'>Validity of the image file (PNG in this case.)</li>
                            <li className='paragraph'>Length and size compatibility between the message and image capacity</li>
                            <li className='paragraph'>Cleaned and normalized input to ensure proper encryption</li>
                        </ul>
                    </div>
                    <div className='mt-10'>
                        <h2 className='mb-2 mini-heading font-semibold tracking-wide'>2. Encryption & Embedding (Black Box View)</h2>
                        <p className='paragraph'>This is the heart of the system where the actual steganographic transformation happens. Without revealing internal logic, the process can be described in the following way:</p>

                        <ul className='list-disc pl-10'>
                            <li className='paragraph'>The message is converted into a numeric form, pre-processed using mathematical operations, and encrypted using a dynamically generated random value.</li>
                            <li className='paragraph'>The result is a binary payload that represents the encrypted version of the message.</li>
                            <li className='paragraph'>This binary data is embedded into the RGB channels of selected image pixels using a precise bit-level modification technique, specifically targeting the least significant bits to ensure the image’s appearance remains unchanged to the human eye.</li>
                        </ul>
                        <br />
                        <p className='paragraph'>The embedding is designed to be:</p>
                        <ul className='list-disc pl-10'>
                            <li className='paragraph'>Randomized to avoid patterns</li>
                            <li className='paragraph'>Irreversible without complete knowledge of the encryption key</li>
                            <li className='paragraph'>Undetectable using common steganalysis methods</li>
                        </ul>
                    </div>
                    <div className='mt-10'>
                        <h2 className='mb-2 mini-heading font-semibold tracking-wide'>3. Output Generation & Key Management</h2>
                        <p className="paragraph">Once the message is successfully embedded:</p>

                        <ul className='list-disc pl-10'>
                            <li className='paragraph'>A new stego-image is generated and provided to the user for download</li>
                            <li className='paragraph'>Alongside, a unique decryption key is generated which contains critical parameters required to reverse the process</li>
                        </ul>
                        <br />
                        <p className="paragraph">The key includes:</p>
                        <ul className='list-disc pl-10'>
                            <li className='paragraph'>A hexadecimal-encoded version of the random masking value used in encryption</li>
                            <li className='paragraph'>Metadata like message length and encryption factors</li>
                            <li className='paragraph'>All key parts are separated using non-hex characters to obscure their structure and prevent unauthorized extraction</li>
                        </ul>
                        <br />
                        <p className="paragraph">This key must be securely stored by the user, as it is the only way to decrypt the message hidden in the image.</p>
                    </div>
                    <div className='mt-10'>
                        <h2 className='mb-2 mini-heading font-semibold tracking-wide'>4. Decryption (Reverse Flow)</h2>
                        <p className="paragraph">Users with access to the stego-image and the correct key can perform the reverse operation:</p>

                        <ul className='list-disc pl-10'>
                            <li className='paragraph'>The system extracts the modified pixel values</li>
                            <li className='paragraph'>Reconstructs the embedded binary payload</li>
                            <li className='paragraph'>Reverses the encryption transformation using the exact same random and calculated values</li>
                            <li className='paragraph'>Finally, retrieves the original message with full accuracy</li>
                        </ul>
                        <br />
                        <p className="paragraph">If any part of the key is incorrect, the system will fail to produce a valid output—ensuring that even small deviations result in complete message loss, reinforcing data confidentiality.</p>
                    </div>
                </div>

                <div className="scroll-mt-24 mb-20" id="security">
                    <h2 className='docs-heading'>Security</h2>
                    <p className='docs-subheading mb-8'>Security measures that protect your messages</p>

                    <p className='paragraph'>
                        At the heart of Stegx lies a commitment to robust, intelligent, and tamper-resistant security. Unlike basic steganography tools that simply insert data into the least significant bits of an image, Stegx takes it a step further—encrypting the message through multiple transformations before embedding it into the image. This layered approach ensures that even if someone identifies that an image is suspicious, they cannot extract or interpret the hidden message without the correct decryption key.
                    </p>

                    <h3 className='mini-heading pl-5 mt-10 mb-2 font-semibold'>Key security highlights</h3>
                    <ul className='list-disc pl-5'>
                        <li className='paragraph mb-4 mt-4'>
                            <h4 className='mb-1'>Custom unique algorithm :</h4>
                            <p>Before embedding any message, Stegx encrypts it using a multi-step algorithm that introduces randomness, mathematical transformations, and non-linear logic. This ensures the data is unreadable in its embedded form and protected against known steganalysis methods.</p>
                        </li>
                        <li className='paragraph mb-4'>
                            <h4 className='mb-1'>Decryption Key Dependency :</h4>
                            <p>A uniquely generated key is required to decrypt any hidden message. This key includes critical values like encryption multipliers and binary masks, but these are disguised within the key using a custom format that prevents easy parsing or reverse engineering. Without the exact key, decryption is virtually impossible.</p>
                        </li>
                        <li className='paragraph mb-4'>
                            <h4 className='mb-1'>High Brute-Force Complexity :</h4>
                            <p>With a breaking complexity exceeding 429,49,67,29,83,66 (4.2 bilion), the system is resistant to brute-force attacks. The key space is large and randomized, making exhaustive search methods computationally infeasible.</p>
                        </li>
                        <li className='paragraph mb-4'>
                            <h4 className='mb-1'>Obfuscation of Parameters :</h4>
                            <p>All essential encryption parameters are mixed with non-hex characters in the key, making it unreadable without the internal logic of Stegx. This prevents attackers from extracting usable hints from the key format alone.</p>
                        </li>
                        <li className='paragraph mb-4'>
                            <h4 className='mb-1'>Stealth by Design :</h4>
                            <p>The message is embedded in a way that doesn’t alter the visible quality of the image, making the existence of hidden data nearly undetectable to the naked eye and resistant to histogram and pixel-based detection.</p>
                        </li>
                        <li className='paragraph mb-4'>
                            <h4 className='mb-1'>One-Time Key System :</h4>
                            <p>Each encryption session uses a fresh random binary mask, ensuring that even the same message embedded in the same image will produce a different encrypted output and key every time. This enhances unpredictability and security.</p>
                        </li>
                    </ul>
                </div>

                <div className="scroll-mt-24 mb-20" id="privacy">
                    <h2 className='docs-heading'>User Privacy</h2>
                    <p className='docs-subheading mb-8'>Our commitment to user privacy and data anonymity</p>

                    <p className='paragraph'>
                        At Stegx, user privacy is treated with utmost importance. While the platform uses a backend server to perform the encryption and embedding operations, none of the user-provided data is ever stored or retained after processing.
                    </p>

                    <h3 className='mini-heading mb-2 mt-10 pl-5 font-semibold'>The Handling :</h3>
                    <ul className='list-disc pl-5'>
                        <li className='paragraph mb-4 mt-4'>
                            <h4 className='mb-1'>Temporary Server Processing</h4>
                            <p>When you input the image and message, the data is temporarily sent to a secure backend server. The server performs the encryption algorithm and image processing, then immediately sends back the encrypted image and decryption key.</p>
                        </li>
                        <li className='paragraph mb-4'>
                            <h3 className='mb-1'>No Permanent Storage</h3>
                            <p>Stegx does not store your message, image, or generated key in any database or persistent storage. Once the response is sent to your browser, all associated data is deleted from the server immediately.</p>
                        </li>
                        <li className='paragraph mb-4'>
                            <h3 className='mb-1'>No User Account Required</h3>
                            <p>Stegx doesn’t require sign-ups or logins. No personal information is collected during usage.</p>
                        </li>
                        <li className='paragraph mb-4'>
                            <h3 className='mb-1'>No Tracking or Analytics</h3>
                            <p>The application does not track your activity, store usage logs, or monitor content in any way.</p>
                        </li>
                        <li className='paragraph mb-4'>
                            <h3 className='mb-1'>End-to-End Privacy Responsibility</h3>
                            <p>Once the encrypted image and key are returned, you are solely responsible for downloading and safeguarding them. Without the correct key, the encrypted image remains completely undecipherable, even to us.</p>
                        </li>
                    </ul>
                </div>

                <div className="scroll-mt-24 mb-20" id="real-world-usage">
                    <h2 className='docs-heading'>Real-world Usage</h2>
                    <p className='docs-subheading mb-8'>Putting Stegx to work, Real-world applications for communication and security</p>

                    <p className='paragraph'>
                        In today’s digital age, where data privacy is under constant threat and online surveillance is increasingly common, the need for secure and discreet communication methods is more critical than ever. Stegx addresses this challenge by offering a practical, easy-to-use tool that hides sensitive information within everyday images, making private communication possible—even across public platforms.
                    </p>
                    <p className='paragraph mt-5'>
                        Unlike typical encryption tools that simply scramble text, Stegx embeds the encrypted message directly into the pixels of an image. This not only conceals the content but also the very fact that a message exists. The result is a highly secure and subtle form of communication that blends seamlessly into modern digital workflows.
                    </p>

                    <h3 className='mini-heading mb-2 mt-10 pl-5 font-semibold'>But How?</h3>
                    <ul className='list-disc pl-5'>
                        <li className='paragraph mb-4 mt-4'>
                            <h4 className='mb-1'>Private Conversations in Public Channels</h4>
                            <p>Users can share steganographically encoded images through email, or cloud platforms. Even if intercepted, the image looks completely normal to unintended viewers.</p>
                        </li>
                        <li className='paragraph mb-4'>
                            <h3 className='mb-1'>Educational Demonstrations & Academic Research</h3>
                            <p>Stegx serves as a great educational tool for students, researchers, and cybersecurity enthusiasts to explore how encryption and image processing can work together to create advanced steganography systems.</p>
                        </li>
                        <li className='paragraph mb-4'>
                            <h3 className='mb-1'>Digital Rights and Content Ownership</h3>
                            <p>Creators can embed invisible identifiers or digital signatures inside images to claim ownership or track misuse of their content.</p>
                        </li>
                        <li className='paragraph mb-4'>
                            <h3 className='mb-1'>Secure File Transfers</h3>
                            <p>Organizations and individuals can use Stegx to embed confidential codes, internal references, or access keys into images for added security during file exchanges.</p>
                        </li>
                        <li className='paragraph mb-4'>
                            <h3 className='mb-1'>Forensic and Investigative Use</h3>
                            <p>In investigative environments, professionals may use tools like Stegx to conceal information in plain sight when operating in high-risk or monitored environments.</p>
                        </li>
                        <li className='paragraph'>
                            <h3 className='mb-1'>Password and Key Distribution</h3>
                            <p>Instead of storing or sharing raw keys or credentials, Stegx can hide them inside a harmless-looking image—adding an extra layer of protection.</p>
                        </li>
                    </ul>
                </div>

                <div className="scroll-mt-24 mb-20" id="challenges">
                    <h2 className='docs-heading'>Challenges</h2>
                    <p className='docs-subheading mb-8'>Discover our challenging journey to create Stegx</p>

                    <p className='paragraph'>
                        Building Stegx was a technically rewarding yet challenging journey. One of the earliest hurdles was designing an encryption algorithm that goes beyond the standard LSB (Least Significant Bit) approach. It wasn’t just about hiding data—it was about doing so in a way that would be extremely difficult to reverse-engineer without the correct key. Striking a balance between complexity and performance was a recurring challenge, especially when working with bitwise operations and binary arithmetic at scale. Ensuring that the algorithm added sufficient randomness while still being reversible through a key took several iterations and careful logic design.
                    </p>
                    <p className='paragraph mt-5'>
                        Another major challenge was preserving the visual integrity of the image while embedding data. Since the RGB color values of each pixel were being altered at the binary level, even a slight miscalculation could result in noticeable distortion or color shift. Extensive testing was required to confirm that the image would remain visually identical after embedding, regardless of the size of the hidden message.
                    </p>
                    <p className='paragraph mt-5'>
                        Managing fixed-length binary conversions, handling negative numbers, and making the algorithm compatible with a variety of image sizes and dimensions posed additional difficulties. The system had to be robust enough to embed and extract data reliably even in edge cases—such as extremely short messages or very small images—without breaking or throwing errors.
                    </p>
                    <p className='paragraph mt-5'>
                        Another layer of complexity arose during the development of the decryption process. Because the encryption algorithm involved mathematical transformations that depend on both the message and a randomly generated value, the decryption logic had to perfectly mirror the encryption steps in reverse. Any mismatch in how numbers were transformed, padded, or converted could lead to completely unreadable results.
                    </p>
                    <p className='paragraph mt-5'>
                        From a backend perspective, image processing through libraries like Sharp had its own limitations, requiring code-level optimizations to maintain acceptable processing speed without overloading server resources. Additionally, maintaining image quality during read-write operations, while manipulating individual pixels precisely, was a non-trivial task.
                    </p>
                    <p className='paragraph mt-5'>
                        Finally, designing a secure but user-friendly decryption key format was unexpectedly tricky. The key needed to contain all the required components to reverse the encryption, yet its structure had to be obfuscated enough to resist pattern recognition or brute-force attempts. This meant creating a custom key format that mixed essential values with non-hex characters to confuse potential attackers while still keeping it parseable by the system.
                    </p>
                </div>

                <div className="scroll-mt-24 mb-20" id="tech">
                    <h2 className='docs-heading'>Technologies</h2>
                    <p className='docs-subheading mb-8'>The building blocks of a poweful, stealthy web app - Stegx</p>

                    <p className='paragraph'>
                        The development of Stegx involved a modern and efficient tech stack, combining powerful frontend and backend tools to ensure smooth performance, real-time processing, and secure handling of image data.
                    </p>

                    <h3 className='mini-heading mb-2 mt-10 pl-5 font-semibold'>Frontend</h3>
                    <ul className='list-disc pl-5'>
                        <li className='paragraph mb-2 mt-4'>
                            React.js – Used to build a dynamic and responsive user interface with a component-based architecture.
                        </li>
                        <li className='paragraph mb-2'>
                            Vite – Provided a lightning-fast development environment and optimized build system for React.
                        </li>
                        <li className='paragraph mb-2'>
                            Tailwind CSS – Enabled rapid UI styling with a utility-first approach, ensuring a clean and responsive design across devices.
                        </li>
                        <li className='paragraph'>
                            React-router-dom - To handle client-side routing in React applications, allowing for the creation of Single Page Applications (SPAs)
                        </li>
                    </ul>

                    <h3 className='mini-heading mb-2 mt-10 pl-5 font-semibold'>Backend</h3>
                    <ul className='list-disc pl-5'>
                        <li className='paragraph mb-2 mt-4'>
                            Node.js – Served as the runtime environment for handling server-side logic and asynchronous operations.
                        </li>
                        <li className='paragraph'>
                            Express.js – A minimalist web framework used to create the backend API endpoints for encryption and image handling.
                        </li>
                    </ul>

                    <h3 className='mini-heading mb-2 mt-10 pl-5 font-semibold'>Image Processing & File Handling (Backend)</h3>
                    <ul className='list-disc pl-5'>
                        <li className='paragraph mb-2 mt-4'>
                            Sharp – A fast library, used for manipulating images at the pixel level, allowing the embedding and extraction of hidden messages.
                        </li>
                        <li className='paragraph'>
                            Multer – Middleware used for handling image file uploads from the client side to the server securely and efficiently.
                        </li>
                    </ul>
                </div>

                <div className="scroll-mt-24 mb-20" id="careful">
                    <h2 className='docs-heading'>Be Careful</h2>
                    <p className='docs-subheading mb-8'>Understanding the constraints: limitations of Stegx</p>

                    <p className='paragraph'>
                        While Stegx is designed to offer a high level of security and ease of use, like any software system, it comes with a few limitations that are important to acknowledge. These limitations do not affect its core functionality but may influence how and where it is best applied.
                    </p>

                    <ul className='list-disc pl-5 mb-5'>
                        <li className='mb-4 mt-4'>
                            <h3 className='mini-heading mb-1 font-semibold'>Message Size</h3>
                            <p className='paragraph mb-3'>The amount of data that can be hidden is directly dependent on the number of pixels available in the image. Larger messages require higher-resolution images to store them effectively. Trying to embed a long message into a small image will result in failure or message truncation.</p>

                            <p className='paragraph'>However, users don’t need to worry about this limitation unless the message is humongous. Our app Stegx is highly optimized and can fit more than 1500 characters into an image with just 100×100 resolution, ensuring smooth performance for most practical use cases.</p>
                        </li>
                        <li className='mb-4'>
                            <h3 className='mini-heading mb-1 font-semibold'>File Compression</h3>
                            <p className='paragraph mb-3'>Images processed by Stegx should not be compressed or re-encoded (for example, by uploading to certain social media platforms), as lossy compression can destroy the embedded data. This makes Stegx unsuitable for scenarios where image integrity cannot be preserved after embedding.</p>

                            <p className='paragraph'>However you can share the image by sending it as a document in the platforms like Whatsapp, or using cloud platforms like Google Drive.</p>
                        </li>
                        <li className='mb-4'>
                            <h3 className='mini-heading mb-1 font-semibold'>Image File</h3>
                            <p className='paragraph'>As of now, Stegx supports only .png image format. Other image formats or media types like audio, video, or PDFs are not supported for data embedding.</p>
                        </li>
                        <li className='mb-4'>
                            <h3 className='mini-heading mb-1 font-semibold'>Decryption Key</h3>
                            <p className='paragraph'>The decryption process depends on a precise combination of values provided in the key. If any part of the key is incorrect or missing, the message cannot be recovered, and the result will be meaningless.</p>
                        </li>
                        <li className='mb-4'>
                            <h3 className='mini-heading mb-1 font-semibold'>Recovery</h3>
                            <p className='paragraph'>If the image is modified after encryption or if the key is slightly wrong, there is no way to detect or recover partial data. The system is all-or-nothing by design, prioritizing security over fault tolerance.</p>
                        </li>
                        <li>
                            <h3 className='mini-heading mb-1 font-semibold'>Web Performance</h3>
                            <p className='paragraph'>Being a browser-based tool, Stegx may face performance limitations when handling very large images or extremely long messages, especially on devices with low memory or processing power.</p>
                        </li>
                    </ul>
                    <p className='paragraph'>Despite these limitations, Stegx remains a robust proof-of-concept and practical tool for real-world steganography, especially when used with proper understanding and care in appropriate contexts. Future versions may address some of these constraints with added flexibility and improved error handling.</p>
                </div>

                <div className="scroll-mt-24 mb-20" id="credits">
                    <h2 className='docs-heading'>Developers & Contributors</h2>
                    <p className='docs-subheading mb-8'>Meet the developers and contributors of Stegx</p>

                    <div className="developers">
                        <h3 className='mini-heading font-semibold tracking-wide'>Core Algorithm Innovators / Developers</h3>
                        <p className='paragraph'>The encryption and embedding logic that powers Stegx is entirely custom-built. The core algorithm was developed from scratch by the following contributors:</p>
                        <ul className='list-disc pl-7 mb-8 mt-5'>
                            <li className="paragraph mb-2">Aditya Sharma ( <a href='mailto:adi19082001@gmail.com?subject=Amazed by Stegx&body=From Stegx Webapp' className='text-blue-700'>adi19082001@gmail.com</a> )</li>
                            <li className="paragraph mb-2">Aman Kumar ( <a href='mailto:kaman514297@gmail.com?subject=Amazed by Stegx&body=From Stegx Webapp' className='text-blue-700'>kaman514297@gmail.com</a> )</li>
                            <li className="paragraph mb-2">Shahbaj Husain ( <a href='mailto:husainshahbaj19@gmail.com?subject=Amazed by Stegx&body=From Stegx Webapp' className='text-blue-700'>husainshahbaj19@gmail.com</a> )</li>
                            <li className='paragraph'>Falguni Mondal ( <a href='mailto:career.falguni@gmail.com?subject=Amazed by Stegx&body=From Stegx Webapp' className='text-blue-700'>career.falguni@gmail.com</a> )</li>
                        </ul>
                    </div>

                    <div className="guide">
                        <h3 className='mini-heading font-semibold tracking-wide'>Guide / Mentor</h3>
                        <p className='paragraph'>This project was carried out under the guidance of : <span>Mr. Shiv Prasad Sir</span></p>
                    </div>

                    <div className="historical mt-10">
                        <h3 className='mini-heading font-semibold'>Acknowledgements & Historical Steganography</h3>
                        <ul className='paragraph list-disc pl-5'>
                            <li className='mb-3 mt-1'>
                                <h3>Johannes Trithemius (1462–1516)</h3>
                                <p>Often regarded as the father of modern steganography, his book Steganographia (written 1499, published 1606) laid early theoretical foundations for hiding messages in plain sight.</p>
                            </li>
                            <li className='mb-3'>
                                <h3>LSB Steganography – Romana “Cypherella” Machado</h3>
                                <p>In the early 1990s, Machado introduced an LSB-based steganography tool called Stego for Macintosh, which masked messages inside the least significant bits of image pixels—a technique that underpins much of digital image steganography today.</p>
                            </li>
                            <li>
                                <h3>Academic & Research Contributions</h3>
                                <p>Numerous adaptive LSB variations, edge-adaptive techniques, and multi-domain transformations have been explored in literature for instance, embedding in edge / smooth areas, spatial vs. frequency domain methods, wavelet-based embedding, and hybrid encryption - LSB combinations</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="scroll-mt-24 mb-20" id="disclaimer">
                    <h2 className='docs-heading'>Disclaimer</h2>
                    <p className='docs-subheading mb-8'>Please read carefully before using Stegx</p>

                    <p className='paragraph mb-5'>
                        Stegx is developed purely for educational, research, and ethical use. It is intended to demonstrate how digital steganography can be used to protect information in creative and secure ways. The platform showcases a custom-built algorithm designed to raise awareness about data privacy, encryption, and secure communication.
                    </p>

                    <p className='paragraph'>
                        The developer(s) of Stegx do not promote or support the use of this tool for any illegal, malicious, or unauthorized activities, including but not limited to:
                    </p>
                    <ul className='paragraph list-disc mt-3 mb-5 pl-7'>
                        <li className="mb-2">Hiding harmful content or code</li>
                        <li className="mb-2">Circumventing law enforcement or legal boundaries</li>
                        <li>Engaging in cybercrime, fraud, or unauthorized surveillance</li>
                    </ul>

                    <p className='paragraph mb-2'>
                        Users are solely responsible for how they choose to use this application. By using Stegx, you agree to comply with all applicable local, national, and international laws and regulations.
                    </p>
                    <p className='paragraph'>
                        The creators of Stegx shall not be held liable for any misuse, data loss, or damage resulting from the use of this platform.
                    </p>
                    <p className='paragraph mt-2'>Use it responsibly. Respect privacy. Promote security.</p>
                </div>

                <div className="scroll-mt-24 mb-20" id="explore">
                    <h2 className='docs-heading'>Explore More</h2>
                    <p className='docs-subheading mb-8'>Reach us out in other platforms</p>
                    <h3 className='mini-heading font-semibold tracking-wider mb-3'>Want to see how Stegx works under the hood or try it yourself?</h3>
                    <div className="github paragraph">
                        <p>👉 View the Source Code on GitHub :</p>
                        <a className="link flex items-center gap-1" href='https://github.com/falguni-mondal/Stegx' target='_blank'>
                            <IoIosLink />
                            <span className='text-blue-700 text-[1.05rem] paragraph'>github.com/falguni-mondal/Stegx</span>
                        </a>
                        <br />
                    </div>
                    <p className='paragraph'>Feel free to explore, test, and contribute responsibly!</p>
                </div>
                <div className="h-10"></div>
            </section>
        </section >
    )
}

export default Docs