import { currentYear, developedBy } from '@/app/common/constants'
import Counter from './Counter'
import img6 from '@/assets/images/6.jpg'
import logo from '@/assets/images/logo.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'

const ComingSoon6 = () => {
  return (
    <section className="relative flex flex-col items-center justify-center lg:h-screen">
      <div className="overflow-hidden">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={img6}
          alt="build your website image"
        />
        <div className="absolute inset-0 h-full w-full bg-black/70" />
      </div>
      <div className="relative my-12">
        <div className="container">
          <div className="mt-10">
            <a href="#" className="mx-auto mb-12 flex justify-center">
              <Image
                src={logo}
                width={48}
                height={48}
                alt="logo"
                className="h-12"
              />
            </a>
            <h2 className="text-center text-4xl text-white">Coming Soon</h2>
            <p className="mt-10 text-center text-lg text-slate-300">
              {' '}
              We&apos;re working hard to bring you something amazing. Stay
              tuned!
            </p>
            <div className="z-30 my-20 text-white">
              <Counter />
            </div>
            <form className="flex w-full items-center justify-center">
              <div className="mt-14 rounded-md border border-neutral-500 shadow-lg">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border-0 bg-transparent p-4 text-sm text-white focus:outline-none focus:ring-0 sm:w-96"
                  placeholder="Enter Your Email"
                  autoComplete="off"
                />
                <button className="me-2 rounded-md border-0 bg-neutral-800/60 px-6 py-2 text-sm font-semibold text-white transition-all duration-500 hover:bg-neutral-800">
                  <div className="flex items-center justify-center gap-1">
                    <p>Submit</p>
                    <IconifyIcon icon="fa6-solid:arrow-right" />
                  </div>
                </button>
              </div>
            </form>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
              <a
                href="#"
                className="flex items-center gap-3 text-slate-200 transition-all hover:text-indigo-600">
                <IconifyIcon
                  icon="fa6-brands:instagram"
                  width={13}
                  height={15}
                />
                <span>Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-slate-200 transition-all hover:text-indigo-600">
                <IconifyIcon
                  icon="fa6-brands:whatsapp"
                  width={13}
                  height={15}
                />
                <span>Whatsapp</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-slate-200 transition-all hover:text-indigo-600">
                <IconifyIcon
                  icon="fa6-brands:linkedin"
                  width={13}
                  height={15}
                />
                <span>Linkedin</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-slate-200 transition-all hover:text-indigo-600">
                <IconifyIcon
                  icon="fa6-brands:dribbble"
                  width={13}
                  height={15}
                />
                <span>Dribbble</span>
              </a>
            </div>
            <p className="py-16 text-center text-white opacity-75">
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
      </div>
    </section>
  )
}

export default ComingSoon6
