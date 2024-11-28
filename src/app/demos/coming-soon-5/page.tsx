import { currentYear, developedBy } from '@/app/common/constants'
import img5 from '@/assets/images/5.jpg'
import logo from '@/assets/images/logo.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import Counter from './Counter'

const ComingSoon5 = () => {
  return (
    <section className="relative flex items-center lg:h-screen">
      <div className="overflow-hidden">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={img5}
          alt="build your website image"
        />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-neutral-900/90 to-neutral-950/80" />
      </div>
      <div className="container relative my-16">
        <a href="#" className="mb-12 flex">
          <Image
            src={logo}
            width={48}
            height={48}
            alt="logo"
            className="h-12"
          />
        </a>
        <h2 className="mb-4 text-start text-5xl uppercase text-white">
          Coming Soon
        </h2>
        <div className="my-10 text-white">
          <Counter />
        </div>
        <p className="text-base text-gray-300 md:text-xl">
          Our Team Have Been Working On Something Amazing <br /> We Will Be Back
          Soon.
        </p>
        <form className="flex w-full items-center">
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
        <div className="mt-10 flex flex-wrap items-center gap-10">
          <a
            href="#"
            className="flex items-center gap-3 text-slate-200 transition-all hover:text-indigo-600">
            <IconifyIcon icon="fa6-brands:instagram" width={13} height={15} />
            <span>Instagram</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-slate-200 transition-all hover:text-indigo-600">
            <IconifyIcon icon="fa6-brands:whatsapp" width={13} height={15} />
            <span>Whatsapp</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-slate-200 transition-all hover:text-indigo-600">
            <IconifyIcon icon="fa6-brands:linkedin" width={13} height={15} />
            <span>Linkedin</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-slate-200 transition-all hover:text-indigo-600">
            <IconifyIcon icon="fa6-brands:dribbble" width={13} height={15} />
            <span>Dribbble</span>
          </a>
        </div>
        <p className="py-8 text-white opacity-75">
          {' '}
          © {currentYear}&nbsp; Design with{' '}
          <IconifyIcon
            icon="fa6-solid:heart"
            className="inline-flex text-red-500"
          />
          <a href="#"> by {developedBy}.</a>
        </p>
      </div>
    </section>
  )
}

export default ComingSoon5
