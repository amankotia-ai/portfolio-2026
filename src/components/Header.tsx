import Logo from './Logo';

function Header() {
  return (
    <header className="mb-16">
      <div className="flex items-center gap-8">
        <Logo />
        <div className="flex items-center gap-4">
          <img
            src="/images/IMG_8620.PNG"
            alt="Profile"
            className="w-14 h-14 rounded-2xl bg-[#EFEFEF] object-cover"
          />
          <nav className="flex gap-6">
            <a href="#" className="text-base font-normal text-black">Index</a>
            <a href="#" className="text-base font-normal text-gray-400">Process</a>
            <a href="#" className="text-base font-normal text-gray-400">About</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
