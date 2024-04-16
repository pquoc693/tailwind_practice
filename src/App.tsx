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
        <div className="story">story</div>
        <div className="featured-mugs">featured-mugs</div>
        <div className="more-products">more-products</div>
        <div className="coffee-magazine">coffee-magazine</div>
        <div className="lifestyle-stories">lifestyle-stories</div>
        <div className="subscribe-us">subscribe-us</div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
