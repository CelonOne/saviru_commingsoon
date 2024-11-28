'use client'
import useCountdown from '@/hooks/useCountdown'
import React from 'react'

const Counter = () => {
  const { days, hours, minutes, seconds } = useCountdown()
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      <div className="flex h-24 w-24 rotate-45 items-center justify-center rounded-3xl bg-neutral-700/50 md:h-32 md:w-32">
        <div className="-rotate-45 text-center">
          <span id="days" className="lg:text-6xl4 text-3xl">
            {days}
          </span>
          <p className="text-sm">days</p>
        </div>
      </div>
      <div className="flex h-24 w-24 rotate-45 items-center justify-center rounded-3xl bg-neutral-700/50 md:h-32 md:w-32">
        <div className="-rotate-45 text-center">
          <span id="hours" className="lg:text-6x4 text-3xl">
            {hours}
          </span>
          <p className="text-sm">Hours</p>
        </div>
      </div>
      <div className="flex h-24 w-24 rotate-45 items-center justify-center rounded-3xl bg-neutral-700/50 md:h-32 md:w-32">
        <div className="-rotate-45 text-center">
          <span id="minutes" className="text-3xl lg:text-4xl">
            {minutes}
          </span>
          <p className="text-sm">Minutes</p>
        </div>
      </div>
      <div className="flex h-24 w-24 rotate-45 items-center justify-center rounded-3xl bg-neutral-700/50 md:h-32 md:w-32">
        <div className="-rotate-45 text-center">
          <span id="seconds" className="text-3xl lg:text-4xl">
            {seconds}
          </span>
          <p className="text-sm">Seconds</p>
        </div>
      </div>
    </div>
  )
}

export default Counter
