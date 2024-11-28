import { currentYear, developedBy } from '@/app/common/constants'
import img4 from '@/assets/images/4.jpg'
import logo from '@/assets/images/logo.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import Counter from './Counter'

const ComingSoon4 = () => {
  return (
    <section className="relative flex items-center justify-center py-10 xl:h-screen">
      <div className="overflow-hidden">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={img4}
          alt="build your website image"
        />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-neutral-950/90 to-orange-500/50" />
      </div>
      <div className="relative">
        <div>
          <div className="mt-12 text-center">
            <a href="#" className="mx-auto mb-12 flex justify-center">
              <Image
                src={logo}
                width={48}
                height={48}
                alt="logo"
                className="h-12"
              />
            </a>
            <h3 className="mb-5 text-xl font-medium text-gray-200">
              Our Teaaching Site is
            </h3>
            <h2 className="mb-5 text-5xl uppercase text-white">Coming Soon</h2>
            <h3 className="text-xl font-medium text-gray-200">Stay Tuned</h3>
          </div>
          <div className="mb-20 mt-24 flex items-center justify-center">
            <div className="text-white">
              <Counter />
            </div>
          </div>
          <div className="text-center">
            <IconifyIcon
              icon="fa6-solid:arrow-down-long"
              className="inline-flex text-2xl text-white"
            />
            <div className="mt-14">
              <a
                href="#"
                className="rounded-full bg-white px-6 py-3 text-xl font-semibold uppercase text-orange-500">
                Notify me
              </a>
            </div>
          </div>
          <p className="pt-20 text-center text-white opacity-75">
            {' '}
            © {currentYear}&nbsp; Design with{' '}
            <IconifyIcon
              icon="fa6-solid:heart"
              className="inline-flex text-red-500"
            />
            <a href="#"> by {developedBy}.</a>
          </p>
        </div>
      </div>
      <div className="absolute end-0 top-1/2 hidden md:block">
        <div className="flex rotate-90 items-center justify-center gap-5">
          <a
            href="#"
            className="-rotate-90 text-xl text-white transition-all hover:text-blue-600">
            <IconifyIcon icon="fa6-brands:facebook-f" />
          </a>
          <a
            href="#"
            className="-rotate-90 text-xl text-white transition-all hover:text-blue-600">
            <IconifyIcon icon="fa6-brands:twitter" />
          </a>
          <a
            href="#"
            className="-rotate-90 text-xl text-white transition-all hover:text-blue-600">
            <IconifyIcon icon="fa6-brands:instagram" />
          </a>
          <a
            href="#"
            className="-rotate-90 text-xl text-white transition-all hover:text-blue-600">
            <IconifyIcon icon="fa6-solid:globe" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ComingSoon4
