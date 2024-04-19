export default function Footer() {
  return (
    <footer className="w-[95%] xl:w-[65%] mx-auto pb-24 text-gray-500 text-sm text-center md:text-left">
      <div className="flex flex-col  md:flex-row gap-8">
        <div className="basis-2/6">
          <div className="font-bold text-xl mb-4 text-gray-900">
            CoffeeStyle.
          </div>
          <div className="mb-10 md:mb-20">
            Delivering the best coffee life since 1996. From coffee geeks to the
            real ones.
          </div>
          <div className="text-gray-400 hover:text-coffee-600">
            CoffeeStyle Inc. © 1996
          </div>
        </div>
        <div className="basis-1/6">
          <div className="uppercase font-semibold tracking-widest text-gray-600 mb-8 md:mb-4">
            MENU
          </div>
          <div className="flex flex-col gap-4">
            <div className="">
              <a href="#!" className="hover:text-coffee-400">
                Home
              </a>
            </div>
            <div className="">
              <a href="#!" className="hover:text-coffee-400">
                Our Products
              </a>
            </div>
            <div className="">
              <a href="#!" className="hover:text-coffee-400">
                About
              </a>
            </div>
            <div className="">
              <a href="#!" className="hover:text-coffee-400">
                Contact
              </a>
            </div>
            <div className="">
              <a href="#!" className="hover:text-coffee-400">
                Styleguide
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/6">
          <div className="uppercase font-semibold tracking-widest text-gray-600 mb-8 md:mb-4">
            FOLLOW US
          </div>
          <div className="flex flex-col gap-4">
            <div className="">
              <a href="#!" className="hover:text-coffee-400">
                Facebook
              </a>
            </div>
            <div className="">
              <a href="#!" className="hover:text-coffee-400">
                Instagram
              </a>
            </div>
            <div className="">
              <a href="#!" className="hover:text-coffee-400">
                Pinterest
              </a>
            </div>
            <div className="">
              <a href="#!" className="hover:text-coffee-400">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="basis-2/6">
          <div className="uppercase font-semibold tracking-widest text-gray-600 mb-8 md:mb-4">
            CONTACT US
          </div>
          <div className="mb-4">We&apos;re Always Happy to Help</div>
          <div className="mb-8 md:mb-16">
            <a
              href="mailto:us@coffeestyle.io"
              className="hover:text-coffee-400 font-bold text-xl mb-4 text-gray-900 tracking-wide"
            >
              us@coffeestyle.io
            </a>
          </div>
          <div className="">
            <a href="#!" className="text-gray-400 hover:text-coffee-400">
              Powered by Webflow
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
