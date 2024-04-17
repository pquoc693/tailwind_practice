import Header from "./Components/Header";

function App() {
  return (
    <div className="content-wrapper font-Karla mx-auto max-w-screen-2xl px-8 text-base">
      <Header />
      <main>
        <div className="slider h-[530px] bg-[url('./assets/images/slide.jpg')] bg-cover bg-no-repeat bg-bottom">
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
        <div className="story">
          <div className="w-full h-full flex justify-center items-center">
            <div className="px-4 sm:px-16 md:px-32 lg:px-64 xl:px-96 py-32 text-center">
              <div className="text-3xl mb-6 leading-10">
                Even the all-powerful Pointing has no control about the blind
                texts.
              </div>
              <div className="text-gray-500 leading-7 mb-6">
                It is a paradisematic country, in which roasted parts of
                sentences fly into your mouth.
                <br /> Even the all-powerful Pointing has no control about the
                blind texts it is an almost unorthographic life One day however
                a small line of blind text by the name of Lorem Ipsum decided to
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
        <div className="more-products w-[95%] lg:w-[65%] mx-auto mb-24 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-8 md:gap-4">
            <div className="ct-product-card">
              <div className="h-[380px] bg-[url('./assets/images/mugs1.jpg')] bg-cover bg-no-repeat bg-center">
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
              <div className="h-[380px] bg-[url('./assets/images/mugs2.jpg')] bg-cover bg-no-repeat bg-center">
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
          </div>
        </div>
        <div className="ct-subheadline ">
          <div className="ct-subheadline-deco-line"></div>
          <div className="ct-subheadline-label ">
            BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE
          </div>

          <div className="ct-subheadline-deco-line"></div>
        </div>
        <div className="coffee-magazine">coffee-magazine</div>
        <div className="ct-subheadline ">
          <div className="ct-subheadline-deco-line"></div>
          <div className="ct-subheadline-label ">
            BEHIND THE MUGS, LIFESTYLE STORIES
          </div>
          <div className="ct-subheadline-deco-line"></div>
        </div>
        <div className="lifestyle-stories">lifestyle-stories</div>
        <div className="subscribe-us">subscribe-us</div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
