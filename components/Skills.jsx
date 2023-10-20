import Image from 'next/image';
import React from 'react';

//For Constant Text
import userData from "../constants/data";

//For Import Image
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import Firebase from '../public/assets/skills/firebase.png';

import NodeJS from '../public/assets/skills/nodejs.png'
import LaravelImg from '../public/assets/skills/laravel.png';
import Java from '../public/assets/skills/java.png';
import Solidity from '../public/assets/skills/solidity.png';

import ReactImg from '../public/assets/skills/react.png';
import NextJS from '../public/assets/skills/nextjs.png'
import VueJS from '../public/assets/skills/vuejs.png'
import NuxtJS from '../public/assets/skills/nuxtjs.png';

export const Skills = () => {
  return (
    <div id='skills' className='bg-[#ecf0f3] text-[#1f2937] dark:bg-gray-800 w-full pb-40 pt-40 p-2 select-none'>
      <div className='max-w-[1400px] mx-auto flex flex-col h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5] dark:text-[#64ffda]'>
          {userData.skills.title}
        </p>
        <h2 className='py-4 dark:text-[#ffffff]'>{userData.skills.whaticando}</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 border-4 border-[#5651e5] rounded-xl hover:scale-105 ease-in duration-300 dark:border-[#64ffda]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Html} width='64px' height='64px' alt='HTML' />
              </div>
              <div className='flex flex-col items-center justify-center dark:text-[#ffffff]'>
                <h3>{userData.skills.html}</h3>
              </div>
            </div>
          </div>
          <div className='p-6 border-4 border-[#5651e5] rounded-xl hover:scale-105 ease-in duration-300 dark:border-[#64ffda]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width='64px' height='64px' alt='CSS' />
              </div>
              <div className='flex flex-col items-center justify-center dark:text-[#ffffff]'>
                <h3>{userData.skills.css}</h3>
              </div>
            </div>
          </div>
          <div className='p-6 border-4 border-[#5651e5] rounded-xl hover:scale-105 ease-in duration-300 dark:border-[#64ffda]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='Javascript' />
              </div>
              <div className='flex flex-col items-center justify-center dark:text-[#ffffff]'>
                <h3>{userData.skills.javascript}</h3>
              </div>
            </div>
          </div>
          <div className='p-6 border-4 border-[#5651e5] rounded-xl hover:scale-105 ease-in duration-300 dark:border-[#64ffda]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Firebase} width='64px' height='64px' alt='Firebase' />
              </div>
              <div className='flex flex-col items-center justify-center dark:text-[#ffffff]'>
                <h3>{userData.skills.firebase}</h3>
              </div>
            </div>
          </div>
          <div className='p-6 border-4 border-[#5651e5] rounded-xl hover:scale-105 ease-in duration-300 dark:border-[#64ffda]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NodeJS} width='64px' height='64px' alt='NodeJS' />
              </div>
              <div className='flex flex-col items-center justify-center dark:text-[#ffffff]'>
                <h3>{userData.skills.nodejs}</h3>
              </div>
            </div>
          </div>
          <div className='p-6 border-4 border-[#5651e5] rounded-xl hover:scale-105 ease-in duration-300 dark:border-[#64ffda]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={LaravelImg} width='64px' height='64px' alt='Laravel' />
              </div>
              <div className='flex flex-col items-center justify-center dark:text-[#ffffff]'>
                <h3>{userData.skills.laravelimg}</h3>
              </div>
            </div>
          </div>
          <div className='p-6 border-4 border-[#5651e5] rounded-xl hover:scale-105 ease-in duration-300 dark:border-[#64ffda]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Java} width='64px' height='64px' alt='Java' />
              </div>
              <div className='flex flex-col items-center justify-center dark:text-[#ffffff]'>
                <h3>{userData.skills.java}</h3>
              </div>
            </div>
          </div>
          <div className='p-6 border-4 border-[#5651e5] rounded-xl hover:scale-105 ease-in duration-300 dark:border-[#64ffda]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Solidity} width='64px' height='64px' alt='Solidity' />
              </div>
              <div className='flex flex-col items-center justify-center dark:text-[#ffffff]'>
                <h3>{userData.skills.solidity}</h3>
              </div>
            </div>
          </div>
          <div className='p-6 border-4 border-[#5651e5] rounded-xl hover:scale-105 ease-in duration-300 dark:border-[#64ffda]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='64px' height='64px' alt='ReactJS' />
              </div>
              <div className='flex flex-col items-center justify-center dark:text-[#ffffff]'>
                <h3>{userData.skills.reactimg}</h3>
              </div>
            </div>
          </div>
          <div className='p-6 border-4 border-[#5651e5] rounded-xl hover:scale-105 ease-in duration-300 dark:border-[#64ffda]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NextJS} width='64px' height='64px' alt='NextJS' />
              </div>
              <div className='flex flex-col items-center justify-center dark:text-[#ffffff]'>
                <h3>{userData.skills.nextjs}</h3>
              </div>
            </div>
          </div>
          <div className='p-6 border-4 border-[#5651e5] rounded-xl hover:scale-105 ease-in duration-300 dark:border-[#64ffda]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={VueJS} width='64px' height='64px' alt='VueJS' />
              </div>
              <div className='flex flex-col items-center justify-center dark:text-[#ffffff]'>
                <h3>{userData.skills.vuejs}</h3>
              </div>
            </div>
          </div>
          <div className='p-6 border-4 border-[#5651e5] rounded-xl hover:scale-105 ease-in duration-300 dark:border-[#64ffda]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NuxtJS} width='64px' height='64px' alt='NuxtJS' />
              </div>
              <div className='flex flex-col items-center justify-center dark:text-[#ffffff]'>
                <h3>{userData.skills.nuxtjs}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
