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
        <div className="featured-mugs">featured-mugs</div>
        <div className="ct-subheadline ">
          <div className="ct-subheadline-deco-line"></div>
          <div className="ct-subheadline-label ">More products</div>

          <div className="ct-subheadline-deco-line"></div>
        </div>
        <div className="more-products">more-products</div>
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
