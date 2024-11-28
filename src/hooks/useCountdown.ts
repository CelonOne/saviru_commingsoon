'use client'
import { useEffect, useState } from 'react'

// Define the return type of the hook
interface Countdown {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const useCountdown = (targetDate: string): Countdown => {
  // Convert the target date to a timestamp
  const targetTime = new Date(targetDate).getTime()

  // Initialize state with the time difference between target and current time
  const [countdown, setCountdown] = useState(targetTime - new Date().getTime())

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(targetTime - new Date().getTime())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [targetTime])

  // Calculate days, hours, minutes, and seconds from the countdown value
  const days = Math.floor(countdown / (1000 * 60 * 60 * 24))
  const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}

export default useCountdown
