import { currentYear, developedBy } from '@/app/common/constants'
import img1 from '@/assets/images/1.jpg'
import logo from '@/assets/images/logo.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import Counter from './Counter'

const ComingSoon1 = () => {
  return (
    <section
      className="relative flex items-center px-6 py-20 md:h-screen"
      id="home">
      <div className="overflow-hidden">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={img1}
          alt="build your website image"
        />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800/70 to-slate-900/80" />
      </div>
      <div className="container">
        <div className="relative flex items-center justify-center">
          <div className="max-w-xl py-20 text-center text-white">
            <a href="#" className="mx-auto mb-12 flex justify-center">
              <Image
                src={logo}
                width={48}
                height={48}
                alt="logo"
                className="h-12"
              />
            </a>
            <h2 className="mb-7 text-4xl">We Are Coming Soon...</h2>
            <p className="text-neutral-300">
              Start working with Techwind that can provide everything you need
              to generate awareness, drive traffic, connect.
            </p>
            <div>
              <div className="p z-30 my-10 text-white">
                <Counter />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-20 opacity-75">
          <div className="flex items-center justify-center gap-4">
            <a href="#">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-500/50">
                <IconifyIcon
                  icon="fa6-brands:facebook-f"
                  className="text-xl text-green-500 hover:text-emerald-400"
                />
              </div>
            </a>
            <a href="#">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-500/50">
                <IconifyIcon
                  icon="fa6-brands:instagram"
                  className="text-xl text-green-500 hover:text-emerald-400"
                />
              </div>
            </a>
            <a href="#">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-500/50">
                <IconifyIcon
                  icon="fa6-brands:twitter"
                  className="text-xl text-green-500 hover:text-emerald-400"
                />
              </div>
            </a>
            <a href="#">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-500/50">
                <IconifyIcon
                  icon="fa6-brands:youtube"
                  className="text-xl text-green-500 hover:text-emerald-400"
                />
              </div>
            </a>
          </div>
          <p className="pt-7 text-center text-white">
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
    </section>
  )
}

export default ComingSoon1
