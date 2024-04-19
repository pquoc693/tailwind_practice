import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <div className="content-wrapper font-Karla mx-auto max-w-screen-2xl px-8 text-base">
      <Header />
      <main>
        <div className="slider h-[530px] bg-[url('./assets/images/slide.jpg')] bg-cover bg-no-repeat bg-bottom mb-24">
          <div className="w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-40">
            <div className="mx-16 text-white text-center">
              <div className="uppercase mb-6">Best place to buy design</div>
              <div className="font-medium text-5xl mb-6">Coffee Mugs</div>
              <div className="font-medium text-lg mb-6">
                The most versatile furniture system ever created. Designed to
                fit your life, made to move and grow.
              </div>
              <div className="flex justify-center">
                <div className="uppercase bg-white text-gray-900 w-max tracking-wider py-4 px-6 text-sm font-medium cursor-pointer hover:bg-opacity-75">
                  Explore Our Products
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ct-subheadline ">
          <div className="ct-subheadline-deco-line"></div>
          <div className="ct-subheadline-label ">Our coffee story</div>

          <div className="ct-subheadline-deco-line"></div>
        </div>
        <div className="story flex flex-col lg:flex-row justify-center gap-8 lg:gap-4 items-center w-[95%] lg:w-[65%] mx-auto mb-24">
          <div className="basis-1/2">
            {/* <video autoPlay muted loop className="">
              <source
                src="./assets/videos/coffee.mp4"
                type="video/mp4"
              ></source>
            </video> */}
            <video
              controls
              className="w-full h-full object-cover min-h-[350px]"
            >
              <source src="./assets/videos/coffee1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="basis-1/2 text-center lg:text-left lg:pl-8">
            <div className="text-3xl mb-6 leading-10">
              Even the all-powerful Pointing has no control about the blind
              texts.
            </div>
            <div className="text-gray-500 leading-7 mb-6">
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth.
              <br /> Even the all-powerful Pointing has no control about the
              blind texts it is an almost unorthographic life One day however a
              small line of blind text by the name of Lorem Ipsum decided to
              leave for the far World of Grammar.
            </div>
            <div className="flex justify-center items-center">
              <a
                href="#!"
                className="text-coffee-400 hover:text-coffee-600 relative after:absolute after:-bottom-2 after:left-0 after:bg-coffee-200 hover:after:bg-coffee-600 after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-300"
              >
                Read the full Story
              </a>
            </div>
          </div>
        </div>
        <div className="ct-subheadline ">
          <div className="ct-subheadline-deco-line"></div>
          <div className="ct-subheadline-label ">Featured Mugs</div>
          <div className="ct-subheadline-deco-line"></div>
        </div>
        <div className="featured-mugs w-[95%] lg:w-[65%] mx-auto mb-24 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
            <div className="ct-product-card">
              <div className="h-[400px] sm:h-[540px] bg-[url('./assets/images/mugs1.jpg')] bg-cover bg-no-repeat bg-center">
                <a href="#!" className="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300 relative group">
                    <div className="ct-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn ">
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center mt-8 ">
                <a href="#!" className="">
                  <div className="text-ml m-3 hover:text-coffee-400">
                    Pink Premium Ceramic
                  </div>
                </a>
                <div className="">
                  <span className="text-gray-500">$ 99.00 USD</span>
                </div>
              </div>
            </div>
            <div className="ct-product-card">
              <div className="h-[400px] sm:h-[540px] bg-[url('./assets/images/mugs2.jpg')] bg-cover bg-no-repeat bg-center">
                <a href="#!" className="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300 relative group">
                    <div className="absolute w-[100px] bg-white px-4 py-2 top-3 right-3 text-center font-semibold text-coffee-400">
                      On Sale.
                    </div>
                    <div className="absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 text-center hidden group-hover:block group-hover:animate-fadeIn uppercase tracking-wider py-4 px-6 text-sm font-medium cursor-pointer hover:bg-opacity-75">
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center mt-8 ">
                <a href="#!" className="">
                  <div className="text-ml m-3 hover:text-coffee-400">
                    Golden Designers Mug
                  </div>
                </a>
                <div className="">
                  <span className="text-lg text-coffee-400">$50.00</span>
                  <span className="ml-2 text-gray-400 line-through">
                    $ 69.00 USDs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ct-subheadline ">
          <div className="ct-subheadline-deco-line"></div>
          <div className="ct-subheadline-label ">More products</div>

          <div className="ct-subheadline-deco-line"></div>
        </div>
        <div className="more-products w-[95%] xl:w-[65%] mx-auto mb-24 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-8 md:gap-4">
            <div className="ct-product-card">
              <div className="h-[380px] bg-[url('./assets/images/mugs11.jpg')] bg-cover bg-no-repeat bg-center">
                <a href="#!" className="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300 relative group">
                    <div className="ct-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn ">
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center mt-8 ">
                <a href="#!" className="">
                  <div className="text-ml m-3 hover:text-coffee-400">
                    Pink Premium Ceramic
                  </div>
                </a>
                <div className="">
                  <span className="text-gray-500">$ 99.00 USD</span>
                </div>
              </div>
            </div>

            <div className="ct-product-card">
              <div className="h-[380px] bg-[url('./assets/images/mugs3.jpg')] bg-cover bg-no-repeat bg-center">
                <a href="#!" className="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300 relative group">
                    <div className="absolute w-[100px] bg-white px-4 py-2 top-3 right-3 text-center font-semibold text-coffee-400">
                      On Sale.
                    </div>
                    <div className="absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 text-center hidden group-hover:block group-hover:animate-fadeIn uppercase tracking-wider py-4 px-6 text-sm font-medium cursor-pointer hover:bg-opacity-75">
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center mt-8 ">
                <a href="#!" className="">
                  <div className="text-ml m-3 hover:text-coffee-400">
                    Golden Designers Mug
                  </div>
                </a>
                <div className="">
                  <span className="text-lg text-coffee-400">$50.00</span>
                  <span className="ml-2 text-gray-400 line-through">
                    $ 69.00 USDs
                  </span>
                </div>
              </div>
            </div>
            <div className="ct-product-card">
              <div className="h-[380px] bg-[url('./assets/images/mugs4.jpg')] bg-cover bg-no-repeat bg-center">
                <a href="#!" className="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300 relative group">
                    <div className="absolute w-[100px] bg-white px-4 py-2 top-3 right-3 text-center font-semibold text-coffee-400">
                      On Sale.
                    </div>
                    <div className="absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 text-center hidden group-hover:block group-hover:animate-fadeIn uppercase tracking-wider py-4 px-6 text-sm font-medium cursor-pointer hover:bg-opacity-75">
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center mt-8 ">
                <a href="#!" className="">
                  <div className="text-ml m-3 hover:text-coffee-400">
                    Golden Designers Mug
                  </div>
                </a>
                <div className="">
                  <span className="text-lg text-coffee-400">$50.00</span>
                  <span className="ml-2 text-gray-400 line-through">
                    $ 69.00 USDs
                  </span>
                </div>
              </div>
            </div>
            <div className="ct-product-card">
              <div className="h-[380px] bg-[url('./assets/images/mugs5.jpg')] bg-cover bg-no-repeat bg-center">
                <a href="#!" className="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300 relative group">
                    <div className="absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 text-center hidden group-hover:block group-hover:animate-fadeIn uppercase tracking-wider py-4 px-6 text-sm font-medium cursor-pointer hover:bg-opacity-75">
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center mt-8 ">
                <a href="#!" className="">
                  <div className="text-ml m-3 hover:text-coffee-400">
                    Golden Designers Mug
                  </div>
                </a>
                <div className="">
                  <span className="text-lg text-coffee-400">$50.00</span>
                  <span className="ml-2 text-gray-400 line-through">
                    $ 69.00 USDs
                  </span>
                </div>
              </div>
            </div>
            <div className="ct-product-card">
              <div className="h-[380px] bg-[url('./assets/images/mugs6.jpg')] bg-cover bg-no-repeat bg-center">
                <a href="#!" className="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300 relative group">
                    <div className="absolute w-[100px] bg-white px-4 py-2 top-3 right-3 text-center font-semibold text-coffee-400">
                      On Sale.
                    </div>
                    <div className="absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 text-center hidden group-hover:block group-hover:animate-fadeIn uppercase tracking-wider py-4 px-6 text-sm font-medium cursor-pointer hover:bg-opacity-75">
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center mt-8 ">
                <a href="#!" className="">
                  <div className="text-ml m-3 hover:text-coffee-400">
                    Golden Designers Mug
                  </div>
                </a>
                <div className="">
                  <span className="text-lg text-coffee-400">$50.00</span>
                  <span className="ml-2 text-gray-400 line-through">
                    $ 69.00 USDs
                  </span>
                </div>
              </div>
            </div>
            <div className="ct-product-card">
              <div className="h-[380px] bg-[url('./assets/images/mugs7.jpg')] bg-cover bg-no-repeat bg-center">
                <a href="#!" className="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300 relative group">
                    <div className="absolute w-[100px] bg-white px-4 py-2 top-3 right-3 text-center font-semibold text-coffee-400">
                      On Sale.
                    </div>
                    <div className="absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 text-center hidden group-hover:block group-hover:animate-fadeIn uppercase tracking-wider py-4 px-6 text-sm font-medium cursor-pointer hover:bg-opacity-75">
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center mt-8 ">
                <a href="#!" className="">
                  <div className="text-ml m-3 hover:text-coffee-400">
                    Golden Designers Mug
                  </div>
                </a>
                <div className="">
                  <span className="text-lg text-coffee-400">$50.00</span>
                  <span className="ml-2 text-gray-400 line-through">
                    $ 69.00 USDs
                  </span>
                </div>
              </div>
            </div>
            <div className="ct-product-card">
              <div className="h-[380px] bg-[url('./assets/images/mugs8.jpg')] bg-cover bg-no-repeat bg-center">
                <a href="#!" className="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300 relative group">
                    <div className="absolute w-[100px] bg-white px-4 py-2 top-3 right-3 text-center font-semibold text-coffee-400">
                      On Sale.
                    </div>
                    <div className="absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 text-center hidden group-hover:block group-hover:animate-fadeIn uppercase tracking-wider py-4 px-6 text-sm font-medium cursor-pointer hover:bg-opacity-75">
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center mt-8 ">
                <a href="#!" className="">
                  <div className="text-ml m-3 hover:text-coffee-400">
                    Golden Designers Mug
                  </div>
                </a>
                <div className="">
                  <span className="text-lg text-coffee-400">$50.00</span>
                  <span className="ml-2 text-gray-400 line-through">
                    $ 69.00 USDs
                  </span>
                </div>
              </div>
            </div>
            <div className="ct-product-card">
              <div className="h-[380px] bg-[url('./assets/images/mugs9.jpg')] bg-cover bg-no-repeat bg-center">
                <a href="#!" className="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300 relative group">
                    <div className="absolute w-[100px] bg-white px-4 py-2 top-3 right-3 text-center font-semibold text-coffee-400">
                      On Sale.
                    </div>
                    <div className="absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 text-center hidden group-hover:block group-hover:animate-fadeIn uppercase tracking-wider py-4 px-6 text-sm font-medium cursor-pointer hover:bg-opacity-75">
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center mt-8 ">
                <a href="#!" className="">
                  <div className="text-ml m-3 hover:text-coffee-400">
                    Golden Designers Mug
                  </div>
                </a>
                <div className="">
                  <span className="text-lg text-coffee-400">$50.00</span>
                  <span className="ml-2 text-gray-400 line-through">
                    $ 69.00 USDs
                  </span>
                </div>
              </div>
            </div>
            <div className="ct-product-card">
              <div className="h-[380px] bg-[url('./assets/images/mugs10.jpg')] bg-cover bg-no-repeat bg-center">
                <a href="#!" className="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300 relative group">
                    <div className="absolute w-[100px] bg-white px-4 py-2 top-3 right-3 text-center font-semibold text-coffee-400">
                      On Sale.
                    </div>
                    <div className="absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 text-center hidden group-hover:block group-hover:animate-fadeIn uppercase tracking-wider py-4 px-6 text-sm font-medium cursor-pointer hover:bg-opacity-75">
                      Explore Mug
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center mt-8 ">
                <a href="#!" className="">
                  <div className="text-ml m-3 hover:text-coffee-400">
                    Golden Designers Mug
                  </div>
                </a>
                <div className="">
                  <span className="text-lg text-coffee-400">$50.00</span>
                  <span className="ml-2 text-gray-400 line-through">
                    $ 69.00 USDs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ct-subheadline ">
          <div className="ct-subheadline-deco-line"></div>
          <div className="ct-subheadline-label ">
            BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE
          </div>

          <div className="ct-subheadline-deco-line"></div>
        </div>
        <div className="coffee-magazine  w-[95%] xl:w-[65%] mx-auto mb-24">
          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-16 lg:gap-8 xl:gap-16">
            <div className="ct-magazine-post w-full md:basis-1/2 text-center md:text-left">
              <div className="uppercase tracking-widest text-gray-500 font-medium text-[12px] mb-6">
                PREMIUM OFFER
              </div>
              <div className="text-4xl mb-6 md:text-nowrap">
                Get our Coffee Magazine
              </div>
              <div className="text-gray-500 leading-7 mb-6">
                The most versatile furniture system ever created. Designed to
                fit your life.
              </div>
              <div className="ct-button w-max bg-gray-900 text-white mx-auto md:mx-0">
                Start shopping
              </div>
            </div>
            <div className="ct-magazine-images  w-full md:basis-1/2 md:flex md:flex-row gap-5">
              <div className="ct-magazine-big-image h-[280px] bg-[url('./assets/images/magazine1.jpg')] bg-cover bg-no-repeat bg-center basis-2/3 mb-5 md:m-0"></div>
              <div className="ct-magazine-small-images flex md:flex-col flex-grow basis-1/3 gap-5">
                <div className="ct-magazine-small-image-01 h-[130px] xs:h-[200px] md:h-[130px] w-full bg-[url('./assets/images/magazine2.jpg')] bg-cover bg-no-repeat bg-center"></div>
                <div className="ct-magazine-small-image-02 h-[130px] xs:h-[200px] md:h-[130px] w-full bg-[url('./assets/images/magazine3.jpg')] bg-cover bg-no-repeat bg-center"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="ct-parallax-section bg-[url('./assets/images/parallax.jpg')] bg-cover bg-no-repeat bg-center mb-24 bg-fixed h-[400px] md:h-[500px] w-[100vw] relative left-[calc(-50vw+50%)]"></div>
        <div className="ct-subheadline ">
          <div className="ct-subheadline-deco-line"></div>
          <div className="ct-subheadline-label ">
            BEHIND THE MUGS, LIFESTYLE STORIES
          </div>
          <div className="ct-subheadline-deco-line"></div>
        </div>
        <div className="lifestyle-stories w-[95%] xl:w-[65%] mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-8 md:gap-4">
            <div className="ct-lifestyle-story-card">
              <div className="h-[300px] bg-[url('./assets/images/story1.jpg')] bg-cover bg-no-repeat bg-center">
                <a href="#!" className="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300 relative group">
                    <div className="ct-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn ">
                      Read the full story
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center lg:text-left my-6">
                <a href="#!" className="">
                  <div className="text-ml hover:text-coffee-400 mb-3">
                    Health Check: why do I get a headache when I haven&apos;t
                    had my coffee?
                  </div>
                </a>
                <div className="text-gray-500 leading-7 mb-3">
                  It is a paradisematic country, in which roasted parts of
                  sentences fly into your mouth.
                </div>
                <div className="text-gray-500 leading-7 uppercase text-[13px] font-semibold tracking-wider">
                  OCTOBER 9, 2018
                </div>
              </div>
            </div>
            <div className="ct-lifestyle-story-card">
              <div className="h-[300px] bg-[url('./assets/images/story2.jpg')] bg-cover bg-no-repeat bg-center">
                <a href="#!" className="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300 relative group">
                    <div className="ct-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn ">
                      Read the full story
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center lg:text-left my-6">
                <a href="#!" className="">
                  <div className="text-ml hover:text-coffee-400 mb-3">
                    Health Check: why do I get a headache when I haven&apos;t
                    had my coffee?
                  </div>
                </a>
                <div className="text-gray-500 leading-7 mb-3">
                  It is a paradisematic country, in which roasted parts of
                  sentences fly into your mouth.
                </div>
                <div className="text-gray-500 leading-7 uppercase text-[13px] font-semibold tracking-wider">
                  OCTOBER 9, 2018
                </div>
              </div>
            </div>
            <div className="ct-lifestyle-story-card md:col-[1/4] md:w-[50%] md:mx-auto lg:w-[auto] lg:col-[unset]">
              <div className="h-[300px] bg-[url('./assets/images/story3.jpg')] bg-cover bg-no-repeat bg-center">
                <a href="#!" className="">
                  <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300 relative group">
                    <div className="ct-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn ">
                      Read the full story
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-center lg:text-left my-6">
                <a href="#!" className="">
                  <div className="text-ml hover:text-coffee-400 mb-3">
                    Health Check: why do I get a headache when I haven&apos;t
                    had my coffee?
                  </div>
                </a>
                <div className="text-gray-500 leading-7 mb-3">
                  It is a paradisematic country, in which roasted parts of
                  sentences fly into your mouth.
                </div>
                <div className="text-gray-500 leading-7 uppercase text-[13px] font-semibold tracking-wider">
                  OCTOBER 9, 2018
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subscribe-us h-[350px] bg-[#1d1f2e] mb-24 flex flex-col justify-center items-center px-6">
          <div className=" flex justify-center items-center mb-3">
            <div className="w-8 h-px bg-gray-500"></div>
            <div className="uppercase mx-4 tracking-widest text-gray-400 font-bold text-[12px] text-center">
              SIGN UP AND GET FREE COFFEE BAGS
            </div>
            <div className="w-8 h-px bg-gray-500"></div>
          </div>
          <div className="text-4xl mb-3 md:text-nowrap text-white ">
            Coffee Updates
          </div>
          <div className="ct-form text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
              <div className="ct-form-item">
                <input
                  type="email"
                  placeholder="customer@coffeestyle.io"
                  className="px-4 py-4 w-[350px] max-w-[80%] xs:max-w-full bg-inherit border border-solid border-gray-700 outline-none text-white leading-5 hover:border-gray-300 duration-500 focus:border-gray-300 placeholder:uppercase placeholder:text-xs placeholder:tracking-widest placeholder:font-semibold"
                />
              </div>
              <div className="ct-form-item">
                <button
                  type="submit"
                  className="ct-button w-[350px] md:w-max bg-white text-gray-900 text-sx"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
