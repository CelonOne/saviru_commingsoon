'use client'
import useCountdown from '@/hooks/useCountdown'
import React from 'react'

const Counter = () => {
  const { days, hours, minutes, seconds } = useCountdown()
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
      <div className="border-b-solid flex h-36 w-40 items-center justify-center border-2 border-dashed border-neutral-700/90">
        <div className="flex items-center justify-center md:h-40 md:w-44">
          <div className="text-center">
            <span id="days" className="text-3xl md:text-6xl">
              {days}
            </span>
            <p className="mt-2">days</p>
          </div>
        </div>
      </div>
      <div className="border-b-solid flex h-36 w-40 items-center justify-center border-2 border-dashed border-neutral-700/90">
        <div className="flex items-center justify-center md:h-40 md:w-44">
          <div className="text-center">
            <span id="hours" className="text-3xl md:text-6xl">
              {hours}
            </span>
            <p className="mt-2">Hours</p>
          </div>
        </div>
      </div>
      <div className="border-b-solid flex h-36 w-40 items-center justify-center border-2 border-dashed border-neutral-700/90">
        <div className="flex items-center justify-center md:h-40 md:w-44">
          <div className="text-center">
            <span id="minutes" className="text-3xl md:text-6xl">
              {minutes}
            </span>
            <p className="mt-2">Minutes</p>
          </div>
        </div>
      </div>
      <div className="border-b-solid flex h-36 w-40 items-center justify-center border-2 border-dashed border-neutral-700/90">
        <div className="flex items-center justify-center md:h-40 md:w-44">
          <div className="text-center">
            <span id="seconds" className="text-3xl md:text-6xl">
              {seconds}
            </span>
            <p className="mt-2">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter
