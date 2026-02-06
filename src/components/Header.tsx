import Logo from './Logo';

function Header() {
  return (
    <header className="mb-16">
      <div className="flex items-center gap-8">
        <Logo />
        <nav className="flex gap-6">
          <a href="#" className="text-base font-normal text-black">Index</a>
          <a href="#" className="text-base font-normal text-gray-400">Process</a>
          <a href="#" className="text-base font-normal text-gray-400">About</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
