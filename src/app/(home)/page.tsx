import Demos from './components/Demos'
import Footer from './components/Footer'
import TopNavbar from './components/TopNavbar'

const Home = () => {
  return (
    <div>
      <TopNavbar />
      {/* Section Start */}
      <section className="section py-14" id="home">
        <div className="container">
          <div className="justify-center lg:flex">
            <div className="mx-2">
              <div className="text-center">
                <h1 className="mb-10 bg-gradient-to-l from-pink-400 to-blue-600 bg-clip-text text-4xl font-semibold leading-[50px] tracking-wide text-transparent">
                  Techsoon - Coming Soon Tailwind CSS 3 HTML Template
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Demos />
      <Footer />
    </div>
  )
}

export default Home
