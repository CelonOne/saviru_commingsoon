import Image from 'next/image'
import { comingSoonData } from '../data'
import Link from 'next/link'

const Demos = () => {
  return (
    <section className="section scroll-mt-5 pb-16" id="demos">
      <div className="mx-14">
        <div className="mb-10 text-center text-2xl font-semibold">
          HTML Demo
        </div>
        <div className="grid justify-center gap-4 lg:grid-cols-3">
          {comingSoonData.map((item, idx) => {
            return (
              <div className="mx-auto px-4" key={idx}>
                <Link href={item.path} target="_blank">
                  <Image
                    src={item.image}
                    className="rounded border border-gray-100 bg-white p-2 shadow-lg"
                    alt="work-image"
                  />
                </Link>
                <h4 className="mt-5 text-center text-lg">{item.name}</h4>
              </div>
            )
          })}
          {/* <div className="mx-auto px-4">
            <a href="index-2.html" target="_blank">
              <Image src={demo2} className="rounded border border-gray-100 p-2 bg-white shadow-lg" alt="work-image" />
            </a>
            <h4 className="text-lg text-center mt-5">Index 2</h4>
          </div>
          <div className="mx-auto px-4">
            <a href="index-3.html" target="_blank">
              <Image src={demo3} className="rounded border border-gray-100 p-2 bg-white shadow-lg" alt="work-image" />
            </a>
            <h4 className="text-lg text-center mt-5">Index 3</h4>
          </div>
          <div className="mx-auto px-4">
            <a href="index-4.html" target="_blank">
              <Image src={demo4} className="rounded border border-gray-100 p-2 bg-white shadow-lg" alt="work-image" />
            </a>
            <h4 className="text-lg text-center mt-5">Index 4</h4>
          </div>
          <div className="mx-auto px-4">
            <a href="index-5.html" target="_blank">
              <Image src={demo5} className="rounded border border-gray-100 p-2 bg-white shadow-lg" alt="work-image" />
            </a>
            <h4 className="text-lg text-center mt-5">Index 5</h4>
          </div>
          <div className="mx-auto px-4">
            <a href="index-6.html" target="_blank">
              <Image src={demo6} className="rounded border border-gray-100 p-2 bg-white shadow-lg" alt="work-image" />
            </a>
            <h4 className="text-lg text-center mt-5">Index 6</h4>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Demos
