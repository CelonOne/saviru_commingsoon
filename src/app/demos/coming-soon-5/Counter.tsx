'use client'
import useCountdown from '@/hooks/useCountdown'
import React from 'react'

const Counter = () => {
  const { days, hours, minutes, seconds } = useCountdown()
  return (
    <div className="flex flex-wrap items-center justify-center md:justify-start">
      <div className="flex h-40 w-44 items-center justify-center border border-dotted border-neutral-600">
        <div className="text-center">
          <span id="days" className="text-3xl lg:text-6xl">
            {days}
          </span>
          <p>days</p>
        </div>
      </div>
      <div className="flex h-40 w-44 items-center justify-center border border-dotted border-neutral-600">
        <div className="text-center">
          <span id="hours" className="text-3xl lg:text-6xl">
            {hours}
          </span>
          <p>Hours</p>
        </div>
      </div>
      <div className="flex h-40 w-44 items-center justify-center border border-dotted border-neutral-600">
        <div className="text-center">
          <span id="minutes" className="text-3xl lg:text-6xl">
            {minutes}
          </span>
          <p>Minutes</p>
        </div>
      </div>
      <div className="flex h-40 w-44 items-center justify-center border border-dotted border-neutral-600">
        <div className="text-center">
          <span id="seconds" className="text-3xl lg:text-6xl">
            {seconds}
          </span>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  )
}

export default Counter
