import { currentYear, developedBy } from '@/app/common/constants'
import img5 from '@/assets/images/5.jpg'
import logo from '@/assets/images/logo.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import Counter from './Counter'

const ComingSoon3 = () => {
  return (
    <section className="overflow-hidden">
      <div className="flex-row-reverse lg:flex lg:flex-row">
        <div className="relative w-full lg:w-1/2">
          <div className="overflow-hidden">
            <Image
              className="absolute inset-0 -z-20 h-full w-full object-cover"
              src={img5}
              alt="build your website image"
            />
            <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-neutral-900/70 to-neutral-950/80" />
          </div>
          <div className="z-30 my-10 py-[364px] text-white">
            <Counter />
          </div>
        </div>
        <div className="relative flex h-screen w-full items-center px-10 py-28 lg:w-1/2">
          <div className="text-center text-white">
            <a href="#" className="mx-auto mb-12 flex justify-center">
              <Image
                src={logo}
                width={48}
                height={48}
                alt="logo"
                className="h-12"
              />
            </a>
            <p className="mb-5 uppercase tracking-widest">Our Website Is</p>
            <h2 className="mb-7 text-5xl uppercase">Coming Soon</h2>
            <div className="flex items-center justify-center">
              <p className="leading-8 text-neutral-300 lg:w-3/5">
                Currently we are working on our new website. We&apos;ll be here
                soon, subscribe to get notified and get ready for the grand day.
              </p>
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-medium text-gray-300">
                Subscribe to get notified!
              </h3>
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
                      <i className="fa-solid fa-arrow-right" />
                    </div>
                  </button>
                </div>
              </form>
            </div>
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
            <p className="pb-8 pt-20 text-center text-white opacity-75">
              {' '}
              © {currentYear}&nbsp; Design with{' '}
              <IconifyIcon
                icon="fa6-solid:heart"
                className="inline-flex text-red-500"
              />
              <a href="#"> by {developedBy}.</a>
            </p>
          </div>
          <div className="overflow-hidden">
            <div className="y-96 absolute end-0 top-80 -z-10 h-full w-full object-cover">
              <svg
                viewBox="0 0 881 211"
                fill="white"
                aria-hidden="true"
                className="pointer-events-none absolute -right-44 top-14 w-[55.0625rem] origin-top-right rotate-[30deg] overflow-visible opacity-70">
                <defs>
                  <filter id=":Rmd6:">
                    <feGaussianBlur in="SourceGraphic" stdDeviation=".5" />
                  </filter>
                </defs>
                <path
                  stroke="white"
                  strokeOpacity="0.2"
                  strokeDasharray={1}
                  strokeDashoffset={1}
                  pathLength={1}
                  fill="transparent"
                  d="M 247,103L261,86L307,104L357,36"
                  className="invisible"
                  style={{ strokeDashoffset: 0, visibility: 'visible' }}
                />
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={247}
                    cy={103}
                    r={1}
                    style={{
                      transformOrigin: '15.4375rem 6.4375rem',
                      opacity: 1,
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={261}
                    cy={86}
                    r={1}
                    style={{
                      transformOrigin: '16.3125rem 5.375rem',
                      opacity: 1,
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={307}
                    cy={104}
                    r={1}
                    style={{
                      transformOrigin: '19.1875rem 6.5rem',
                      opacity: 1,
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={357}
                    cy={36}
                    r={1}
                    style={{
                      transformOrigin: '22.3125rem 2.25rem',
                      opacity: 1,
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <path
                  stroke="white"
                  strokeOpacity="0.2"
                  strokeDasharray={1}
                  strokeDashoffset={1}
                  pathLength={1}
                  fill="transparent"
                  d="M 586,120L516,100L491,62L440,107L477,180L516,100"
                  className="invisible"
                  style={{
                    strokeDashoffset: 0,
                    visibility: 'visible',
                    fill: 'rgba(255, 255, 255, 0.02)',
                  }}
                />
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={586}
                    cy={120}
                    r={1}
                    style={{
                      transformOrigin: '36.625rem 7.5rem',
                      opacity: 1,
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={516}
                    cy={100}
                    r={1}
                    style={{
                      transformOrigin: '32.25rem 6.25rem',
                      opacity: 1,
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={491}
                    cy={62}
                    r={1}
                    style={{
                      transformOrigin: '30.6875rem 3.875rem',
                      opacity: 1,
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={440}
                    cy={107}
                    r={1}
                    style={{
                      transformOrigin: '27.5rem 6.6875rem',
                      opacity: 1,
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={477}
                    cy={180}
                    r={1}
                    style={{
                      transformOrigin: '29.8125rem 11.25rem',
                      opacity: 1,
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <path
                  stroke="white"
                  strokeOpacity="0.2"
                  strokeDasharray={1}
                  strokeDashoffset={1}
                  pathLength={1}
                  fill="transparent"
                  d="M 733,100L803,120L879,113L823,164L803,120"
                  className="invisible"
                  style={{
                    strokeDashoffset: 0,
                    visibility: 'visible',
                    fill: 'rgba(255, 255, 255, 0.02)',
                  }}
                />
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={733}
                    cy={100}
                    r={1}
                    style={{
                      transformOrigin: '45.8125rem 6.25rem',
                      opacity: 1,
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={803}
                    cy={120}
                    r={1}
                    style={{
                      transformOrigin: '50.1875rem 7.5rem',
                      opacity: 1,
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={879}
                    cy={113}
                    r={1}
                    style={{
                      transformOrigin: '54.9375rem 7.0625rem',
                      opacity: 1,
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={823}
                    cy={164}
                    r={1}
                    style={{
                      transformOrigin: '51.4375rem 10.25rem',
                      opacity: 1,
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={4}
                    cy={4}
                    r={1}
                    style={{
                      transformOrigin: '0.25rem 0.25rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                    filter="url(#:Rmd6:)"
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={4}
                    cy={44}
                    r={1}
                    style={{
                      transformOrigin: '0.25rem 2.75rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={36}
                    cy={22}
                    r={1}
                    style={{
                      transformOrigin: '2.25rem 1.375rem',
                      opacity: 1,
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={50}
                    cy={146}
                    r={1}
                    style={{
                      transformOrigin: '3.125rem 9.125rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                    filter="url(#:Rmd6:)"
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={64}
                    cy={43}
                    r={1}
                    style={{
                      transformOrigin: '4rem 2.6875rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                    filter="url(#:Rmd6:)"
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={76}
                    cy={30}
                    r={1}
                    style={{
                      transformOrigin: '4.75rem 1.875rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={101}
                    cy={116}
                    r={1}
                    style={{
                      transformOrigin: '6.3125rem 7.25rem',
                      opacity: 1,
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={140}
                    cy={36}
                    r={1}
                    style={{
                      transformOrigin: '8.75rem 2.25rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={149}
                    cy={134}
                    r={1}
                    style={{
                      transformOrigin: '9.3125rem 8.375rem',
                      opacity: 1,
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={162}
                    cy={74}
                    r={1}
                    style={{
                      transformOrigin: '10.125rem 4.625rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={171}
                    cy={96}
                    r={1}
                    style={{
                      transformOrigin: '10.6875rem 6rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                    filter="url(#:Rmd6:)"
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={210}
                    cy={56}
                    r={1}
                    style={{
                      transformOrigin: '13.125rem 3.5rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                    filter="url(#:Rmd6:)"
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={235}
                    cy={90}
                    r={1}
                    style={{
                      transformOrigin: '14.6875rem 5.625rem',
                      opacity: 1,
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={275}
                    cy={82}
                    r={1}
                    style={{
                      transformOrigin: '17.1875rem 5.125rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                    filter="url(#:Rmd6:)"
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={306}
                    cy={6}
                    r={1}
                    style={{
                      transformOrigin: '19.125rem 0.375rem',
                      opacity: 1,
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={307}
                    cy={64}
                    r={1}
                    style={{
                      transformOrigin: '19.1875rem 4rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                    filter="url(#:Rmd6:)"
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={380}
                    cy={68}
                    r={1}
                    style={{
                      transformOrigin: '23.75rem 4.25rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={380}
                    cy={108}
                    r={1}
                    style={{
                      transformOrigin: '23.75rem 6.75rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                    filter="url(#:Rmd6:)"
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={391}
                    cy={148}
                    r={1}
                    style={{
                      transformOrigin: '24.4375rem 9.25rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                    filter="url(#:Rmd6:)"
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={405}
                    cy={18}
                    r={1}
                    style={{
                      transformOrigin: '25.3125rem 1.125rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={412}
                    cy={86}
                    r={1}
                    style={{
                      transformOrigin: '25.75rem 5.375rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                    filter="url(#:Rmd6:)"
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={426}
                    cy={210}
                    r={1}
                    style={{
                      transformOrigin: '26.625rem 13.125rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                    filter="url(#:Rmd6:)"
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={427}
                    cy={56}
                    r={1}
                    style={{
                      transformOrigin: '26.6875rem 3.5rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                    filter="url(#:Rmd6:)"
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={538}
                    cy={138}
                    r={1}
                    style={{
                      transformOrigin: '33.625rem 8.625rem',
                      opacity: 1,
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={563}
                    cy={88}
                    r={1}
                    style={{
                      transformOrigin: '35.1875rem 5.5rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                    filter="url(#:Rmd6:)"
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={611}
                    cy={154}
                    r={1}
                    style={{
                      transformOrigin: '38.1875rem 9.625rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                    filter="url(#:Rmd6:)"
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={637}
                    cy={150}
                    r={1}
                    style={{
                      transformOrigin: '39.8125rem 9.375rem',
                      opacity: 1,
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={651}
                    cy={146}
                    r={1}
                    style={{
                      transformOrigin: '40.6875rem 9.125rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={682}
                    cy={70}
                    r={1}
                    style={{
                      transformOrigin: '42.625rem 4.375rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                    filter="url(#:Rmd6:)"
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={683}
                    cy={128}
                    r={1}
                    style={{
                      transformOrigin: '42.6875rem 8rem',
                      opacity: 1,
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={781}
                    cy={82}
                    r={1}
                    style={{
                      transformOrigin: '48.8125rem 5.125rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                    filter="url(#:Rmd6:)"
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={785}
                    cy={158}
                    r={1}
                    style={{
                      transformOrigin: '49.0625rem 9.875rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={832}
                    cy={146}
                    r={1}
                    style={{
                      transformOrigin: '52rem 9.125rem',
                      opacity: '0.2',
                      transform: 'scale(var(--motion-scale))',
                    }}
                    filter="url(#:Rmd6:)"
                  />
                </g>
                <g className="opacity-0" style={{ opacity: 1 }}>
                  <circle
                    cx={852}
                    cy={89}
                    r={1}
                    style={{
                      transformOrigin: '53.25rem 5.5625rem',
                      opacity: 1,
                      transform: 'scale(var(--motion-scale))',
                    }}
                  />
                </g>
              </svg>
            </div>
            <div className="absolute inset-0 -z-20 h-full w-full bg-gradient-to-r from-neutral-950 to-neutral-900" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComingSoon3
