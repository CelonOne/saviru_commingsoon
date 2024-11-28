import AppProviders from '@/components/wrappers/AppProviders'
import Image from 'next/image'
import { Be_Vietnam_Pro } from 'next/font/google'
import logo from '@/assets/images/logo.png'

import '@/assets/scss/style.scss'
import { Metadata } from 'next'
import { DEFAULT_PAGE_TITLE } from './common/constants'

const vietnam = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  style: 'normal',
})

export const metadata: Metadata = {
  title: {
    template: 'Saviru',
    default: DEFAULT_PAGE_TITLE,
  },
  description:
    'Techsoon - Coming Soon Tailwind CSS 3 HTML Template is a multi purpose landing page template built for any Count Down Web Page, Coming Soon Page, Launching Web, Launching Product Website, agency or business Startup. It’s fully responsive and built Tailwind v3',
}

const splashScreenStyles = `
#splash-screen {
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
  display: flex;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: all 15s linear;
  overflow: hidden;
}

#splash-screen.remove {
  animation: fadeout 0.7s forwards;
  z-index: 0;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style suppressHydrationWarning>{splashScreenStyles}</style>
      </head>
      <body className={` ${vietnam.className} antialiased`}>
        <div id="splash-screen">
          <Image
            alt="Logo"
            width={112}
            height={24}
            src={logo}
            style={{ height: '6%', width: 'auto' }}
            priority
          />
        </div>
        <div id="__next_splash">
          <AppProviders>{children}</AppProviders>
        </div>
      </body>
    </html>
  )
}
