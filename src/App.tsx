function App() {
  const toggle = (e) => {
    const topMenu = document.getElementById("id-top-menu");
    const toggleTopMenuIcon = document.getElementById(
      "id-toggle-top-menu-icon",
    );
    if (toggleTopMenuIcon?.contains(e.target)) {
      topMenu?.classList.toggle("hidden");
      topMenu?.classList.toggle("ct-topmenu-expanded");
    } else {
      if (topMenu?.classList?.contains("ct-topmenu-expanded")) {
        topMenu?.classList.remove("ct-topmenu-expanded");
        topMenu?.classList.add("hidden");
      }
    }
  };
  return (
    <div className="content-wrapper font-Karla mx-auto max-w-screen-2xl bg-slate-200 px-8 text-base">
      <header className="mx-auto p-6 ">
        <nav className="flex flex-row items-center justify-between relative">
          <div className="logo basis-2/6 cursor-pointer text-center text-xl font-semibold">
            CoffeeStyle.
          </div>
          <ul
            id="id-top-menu"
            className="basis-3/6 hidden lg:flex lg:items-center lg:justify-end lg:gap-8 text-sm font-medium uppercase text-gray-500"
          >
            <li className="ct-top-menu-item">
              <a href="#" className="">
                Home
              </a>
            </li>
            <li className="ct-top-menu-item">
              <a href="#" className="">
                Products
              </a>
            </li>
            <li className="ct-top-menu-item">
              <a href="#" className="">
                Blog
              </a>
            </li>
            <li className="ct-top-menu-item">
              <a href="#" className="">
                About
              </a>
            </li>
            <li className="ct-top-menu-item">
              <a href="#" className="">
                Contact
              </a>
            </li>
            <li className="ct-top-menu-item ct-top-menu-item-active">
              <a href="#" className="">
                StyleGuide
              </a>
            </li>
          </ul>
          <ul className="basis-3/6 lg:basic-1/6 flex justify-end lg:justify-start  items-center ml-16 uppercase text-sm text-gray-500 font-medium">
            <li className="ct-top-menu-item">
              <a href="#" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="ct-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                <span className="mx-2">Cart</span>
                <span className="ct-badge-circle bg-orange-400 text-white">
                  10
                </span>
              </a>
            </li>
          </ul>
          <div className="basic-1/6 lg:hidden flex items-center cursor-pointer px-3 sm:px-6">
            <svg
              id="id-toggle-top-menu-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="ct-icon"
              onClick={toggle}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </nav>
      </header>
      <main>
        <div className="slider">slider</div>
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
