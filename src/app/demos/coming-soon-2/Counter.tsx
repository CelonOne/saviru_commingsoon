'use client'
import useCountdown from '@/hooks/useCountdown'
import React from 'react'

const Counter = () => {
  const { days, hours, minutes, seconds } = useCountdown()
  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="flex h-40 w-44 items-center justify-center after:ps-5 after:text-2xl after:font-extrabold after:text-gray-300 after:content-[':'] md:after:ps-12">
        <div className="text-center">
          <span id="days" className="text-3xl md:text-6xl">
            {days}
          </span>
          <p className="mt-2">days</p>
        </div>
      </div>
      <div className="flex h-40 w-44 items-center justify-center after:ps-5 after:text-2xl after:font-extrabold after:text-gray-300 after:content-[':'] md:after:ps-12">
        <div className="text-center">
          <span id="hours" className="text-3xl md:text-6xl">
            {hours}
          </span>
          <p className="mt-2">Hours</p>
        </div>
      </div>
      <div className="flex h-40 w-44 items-center justify-center after:ps-5 after:text-2xl after:font-extrabold after:text-gray-300 after:content-[':'] md:after:ps-12">
        <div className="text-center">
          <span id="minutes" className="text-3xl md:text-6xl">
            {minutes}
          </span>
          <p className="mt-2">Minutes</p>
        </div>
      </div>
      <div className="flex h-40 w-44 items-center justify-center">
        <div className="text-center">
          <span id="seconds" className="text-3xl md:text-6xl">
            {seconds}
          </span>
          <p className="mt-2">Seconds</p>
        </div>
      </div>
    </div>
  )
}

export default Counter
