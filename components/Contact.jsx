import Image from "next/image";
import React from "react";

//For Import Image
import ContactImg from "../public/assets/aboutWenHaoLight.png";

//For Import Icons
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";

//For CSS Design
import classes from "../styles/contact.module.css";

//For Constant Text
import userData from "../constants/data";

export const Contact = () => {
  return (
    <div id="contact" className="bg-[#ecf0f3] text-[#1f2937] w-full pt-20 dark:bg-gray-900 select-none">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] dark:text-[#64ffda]">
          {userData.contact.title}
        </p>
        <h2 className="py-4 dark:text-[#ffffff]">{userData.contact.getintouch}</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 dark:bg-[#112340] dark:shadow-none">
            <div className="lg:p-4 h-full ">
              <div className="items-center justify-center">
                <Image
                  className="rounded-xl items-center justify-center"
                  src={ContactImg}
                  width="450"
                  height="350"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2 pt-5 dark:text-[#ffffff]">{userData.contact.wenhao}</h2>
                <p className="dark:text-[#ffffff]">{userData.contact.softwaredeveloper}</p>
                <p className="py-4 dark:text-[#ffffff]">{userData.contact.contactdesc}</p>
              </div>

              <ul className={`${classes.contact__info__list}`}>
                <linocursor className={`${classes.info__item}`}>
                  <span className="dark:text-[#ffffff]">
                    <HiOutlineLocationMarker />
                  </span>
                  <p className="dark:text-[#ffffff]">{userData.contact.location}{userData.contact.klmalaysia}</p>
                </linocursor>
                <linocursor className={`${classes.info__item}`}>
                  <span className="dark:text-[#ffffff]">
                    <HiOutlineMail />
                  </span>
                  <p className="dark:text-[#ffffff]">{userData.contact.emailtitle}{userData.contact.emailhaowen}</p>
                </linocursor>
                <linocursor className={`${classes.info__item}`}>
                  <span className="dark:text-[#ffffff]">
                    <HiOutlinePhone />
                  </span>
                  <p className="dark:text-[#ffffff]">{userData.contact.phonenotitle}{userData.contact.phonenoconfi}</p>
                </linocursor>
              </ul>

              <div>
                {/* <p className="uppercase pt-8">Connect With Me</p> */}
                <div className="flex items-center justify-between py-4">
                  <a href="https://github.com/P-WHao"
                  target="_blank"
                  rel="noreferrer">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer dark:shadow-none dark:text-[#ffffff] dark:bg-transparent dark:border-2 dark:border-[#ffffff] dark:hover:bg-[#2d3c50] hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/p-whao/"
                  target="_blank"
                  rel="noreferrer">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer dark:shadow-none dark:text-[#ffffff] dark:bg-transparent dark:border-2 dark:border-[#ffffff] dark:hover:bg-[#2d3c50] hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a href="mailto:whphoongeneral@gmail.com?subject = Let's Connect"
                  target="_blank"
                  rel="noreferrer">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer dark:shadow-none dark:text-[#ffffff] dark:bg-transparent dark:border-2 dark:border-[#ffffff] dark:hover:bg-[#2d3c50] hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </a>
                  <a href="https://www.facebook.com/phoon.wenhao/"
                  target="_blank"
                  rel="noreferrer">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer dark:shadow-none dark:text-[#ffffff] dark:bg-transparent dark:border-2 dark:border-[#ffffff] dark:hover:bg-[#2d3c50] hover:scale-110 ease-in duration-300">
                      <FaFacebook />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 dark:bg-[#112340] dark:shadow-none">
            <div className="p-4">
              <form
                action="https://getform.io/f/f3038e13-05ff-40e2-9ae9-125d3f3b5e22"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 dark:text-[#ffffff] after:content-['*'] after:ml-1 after:text-red-500">
                      {userData.contact.name}
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-gray-900 dark:border-[#112340] dark:text-white"
                      type="text"
                      name="name"
                      required="required"
                      placeholder={userData.contact.enteryourname}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 dark:text-[#ffffff] after:content-['*'] after:ml-1 after:text-red-500">
                      {userData.contact.phoneno}
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-gray-900 dark:border-[#112340] dark:text-white"
                      type="text"
                      name="phone"
                      required="required"
                      placeholder={userData.contact.enteryourphoneno}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 dark:text-[#ffffff] after:content-['*'] after:ml-1 after:text-red-500">
                    {userData.contact.email}
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-gray-900 dark:border-[#112340] dark:text-white"
                    type="email"
                    name="email"
                    required="required"
                    placeholder={userData.contact.enteryouremail}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 dark:text-[#ffffff] after:content-['*'] after:ml-1 after:text-red-500">
                    {userData.contact.subject}
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-gray-900 dark:border-[#112340] dark:text-white"
                    type="text"
                    name="subject"
                    required="required"
                    placeholder={userData.contact.enterasubject}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 dark:text-[#ffffff] after:content-['*'] after:ml-1 after:text-red-500">
                    {userData.contact.message}
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 dark:bg-gray-900 dark:border-[#112340] dark:text-white"
                    rows="15"
                    name="message"
                    required="required"
                    placeholder={userData.contact.enteryourmessage}
                  ></textarea>
                </div>
                <button className="w-full p-4 bg-[#5651e5] hover:bg-[#9996ef] dark:text-[#ffffff] dark:bg-gray-900 dark:border-2 dark:border-[#ffffff] dark:shadow-none dark:hover:bg-[#2d3c50] text-gray-100 mt-4">
                  {userData.contact.sendmessage}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
