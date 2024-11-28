'use client'
import useCountdown from '@/hooks/useCountdown'
import React from 'react'

const Counter = () => {
  const { days, hours, minutes, seconds } = useCountdown()
  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-neutral-500/30">
        <div className="text-center">
          <span id="days" className="text-3xl lg:text-4xl">
            {days}
          </span>
          <p>days</p>
        </div>
      </div>
      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-neutral-500/30">
        <div className="text-center">
          <span id="hours" className="text-3xl lg:text-4xl">
            {hours}
          </span>
          <p>Hours</p>
        </div>
      </div>
      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-neutral-500/30">
        <div className="text-center">
          <span id="minutes" className="text-3xl lg:text-4xl">
            {minutes}
          </span>
          <p>Minutes</p>
        </div>
      </div>
      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-neutral-500/30">
        <div className="text-center">
          <span id="seconds" className="text-3xl lg:text-4xl">
            {seconds}
          </span>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  )
}

export default Counter
