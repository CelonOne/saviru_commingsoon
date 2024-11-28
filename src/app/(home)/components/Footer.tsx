import { currentYear } from '@/app/common/constants'
import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container">
        <div className="flex">
          <div className="w-full">
            <div className="text-center">
              <p className="text-muted mt-8">
                {' '}
                ©{currentYear} Saviru. By{' '}
                <a className="font-medium" href="#">
                  Saviru
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
