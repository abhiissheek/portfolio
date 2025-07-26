
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />

        <div className='w-max flex items-center gap-2 mx-auto'>
  <Image src={assets.mail_icon} alt='' className='w-6'/>
  <a href="mailto:abhishekchoubey371@gmail.com" className="text-gray-700 hover:text-blue-500">
    abhishekchoubey371@gmail.com
  </a>
</div>



      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
  <p>© 2025 Abhishek Choubey. All rights reserved.</p>
  <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
    <li>
      <a target='_blank' href="https://github.com/abhiissheek">GitHub</a>
    </li>
    <li>
      <a target='_blank' href="https://www.linkedin.com/in/abhishek-choubey-8293b6249/">LinkedIn</a>
    </li>
    <li>
      <a target='_blank' href="https://leetcode.com/">LeetCode</a>
    </li>
  </ul>
</div>



    </div>
  )
}

export default Footer
