import Image from "next/image";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex h-20 border-b border-gray-100">
        <div className="w-80 flex items-center justify-center">
          <img className="w-56" src="/logo-frontasticdocs.png" />
        </div>
        <div>
          <nav>
            <ul className="flex h-20 ">
              <MainMenuItem className="border-red-500">
                <a className="font-bold" href="#">
                  Documentation
                </a>
              </MainMenuItem>
              <MainMenuItem>
                <a href="#">Guides</a>
              </MainMenuItem>
              <MainMenuItem>
                <a href="#">FAQs</a>
              </MainMenuItem>
            </ul>
          </nav>
        </div>
      </header>
      <div className="flex flex-1">
        <div className="w-80 bg-white">sidebar</div>
        <main>main</main>
      </div>
    </div>
  );
}

function MainMenuItem({ children, className, ...rest }) {
  return (
    <li
      className={`flex h-full items-center mr-8 border-b-4 border-white ${className}`}
      {...rest}
    >
      {children}
    </li>
  );
}

export default HomePage;
