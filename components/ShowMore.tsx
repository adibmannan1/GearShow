"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { ShowMoreProps } from '@/types'
import CustomButton from './CustomButton'
import { updateSearchParams } from '@/utils'


const ShowMore = ({pageNumber, isNext, setLimit}: ShowMoreProps) => {

  const handleClick = () => {
    const newLimit = (pageNumber+1)*9
    setLimit(newLimit)
  }

  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNext && (
        <CustomButton 
          title='Show More' 
          btnType='button' 
          containerStyles='text-white bg-[#381d2a] rounded btn btn-white btn-        animate'
          handleClick={handleClick}
        />
      )}
    </div>
  )
}

export default ShowMore