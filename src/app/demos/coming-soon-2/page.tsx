import { currentYear, developedBy } from '@/app/common/constants'
import img3 from '@/assets/images/3.jpg'
import logo from '@/assets/images/logo.png'
import wave2 from '@/assets/images/wave-shape/wave2.png'
import wave3 from '@/assets/images/wave-shape/wave3.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import Counter from './Counter'

const ComingSoon2 = () => {
  return (
    <section
      className="rounded- relative flex h-screen !border-collapse items-center justify-center"
      id="home">
      <div className="overflow-hidden">
        <Image
          className="absolute inset-0 h-full w-full bg-cover bg-bottom object-cover"
          src={img3}
          alt="build your website image"
        />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-neutral-950 to-neutral-900 opacity-80" />
      </div>
      <div className="container">
        <div className="relative py-9 text-center text-white">
          <a href="#" className="mx-auto mb-12 flex justify-center">
            <Image
              src={logo}
              alt="logo"
              width={48}
              height={48}
              className="h-12"
            />
          </a>
          <h2 className="text-5xl uppercase">Coming Soon</h2>
          <div className="z-30 my-10 text-white">
            <Counter />
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-medium text-gray-300">
              Subscribe to get notified!
            </h3>
            <form className="mt-7 flex w-full items-center justify-center">
              <div className="rounded-md border border-neutral-500 shadow-lg">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border-0 bg-transparent p-4 text-sm focus:outline-none focus:ring-0 sm:w-96"
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
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
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
          <div className="mt-20 text-center text-gray-300">
            {' '}
            © {currentYear}&nbsp; Design with{' '}
            <span className="text-base text-red-500">❤️</span>
            <a href="#"> by {developedBy}.</a>
          </div>
        </div>
      </div>
      <div className="wave-anim absolute inset-x-0 bottom-0 m-auto h-32 overflow-hidden">
        <div className="absolute bottom-0 z-30 h-full w-full overflow-hidden opacity-30">
          <div
            className="wave wave-one"
            style={{ backgroundImage: `url(${wave2.src})` }}
          />
        </div>
        <div className="absolute bottom-0 z-20 h-full w-full overflow-hidden opacity-40">
          <div
            className="wave wave-two"
            style={{ backgroundImage: `url(${wave2.src})` }}
          />
        </div>
        <div className="absolute bottom-0 z-10 h-full w-full overflow-hidden opacity-50">
          <div
            className="wave wave-three"
            style={{ backgroundImage: `url(${wave3.src})` }}
          />
        </div>
      </div>
    </section>
  )
}

export default ComingSoon2
