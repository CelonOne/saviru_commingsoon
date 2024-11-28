'use client'
import useCountdown from '@/hooks/useCountdown'
import React from 'react'

const Counter = () => {
  const { days, hours, minutes, seconds } = useCountdown()
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      <div className="flex h-40 w-40 items-center justify-center rounded-full bg-neutral-900/30 text-center">
        <div>
          <span id="days" className="text-3xl lg:text-5xl">
            {days}
          </span>
          <p className="mt-2 text-base">days</p>
        </div>
      </div>
      <div className="flex h-40 w-40 items-center justify-center rounded-full bg-neutral-900/30 text-center">
        <div>
          <span id="hours" className="text-3xl lg:text-5xl">
            {hours}
          </span>
          <p className="mt-2 text-base">Hours</p>
        </div>
      </div>
      <div className="flex h-40 w-40 items-center justify-center rounded-full bg-neutral-900/30 text-center">
        <div>
          <span id="minutes" className="text-3xl lg:text-5xl">
            {minutes}
          </span>
          <p className="mt-2 text-base">Minutes</p>
        </div>
      </div>
      <div className="flex h-40 w-40 items-center justify-center rounded-full bg-neutral-900/30 text-center">
        <div>
          <span id="seconds" className="text-3xl lg:text-5xl">
            {seconds}
          </span>
          <p className="mt-2 text-base">Seconds</p>
        </div>
      </div>
    </div>
  )
}

export default Counter
