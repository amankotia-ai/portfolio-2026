type PageKey = 'index' | 'process' | 'about';

type SidebarNavProps = {
  activePage: PageKey;
};

function SidebarNav({ activePage }: SidebarNavProps) {
  return (
    <nav className="flex items-center gap-5">
      <div className="flex items-center gap-4 text-sm">
        <a
          href="/"
          className={activePage === 'index' ? 'text-black active' : 'text-neutral-500 hover:text-black'}
          data-status={activePage === 'index' ? 'active' : undefined}
          aria-current={activePage === 'index' ? 'page' : undefined}
        >
          Index
        </a>
        <a
          href="/process"
          className={activePage === 'process' ? 'text-black active' : 'text-neutral-500 hover:text-black'}
          data-status={activePage === 'process' ? 'active' : undefined}
          aria-current={activePage === 'process' ? 'page' : undefined}
        >
          Process
        </a>
        <a
          href="/about"
          className={activePage === 'about' ? 'text-black active' : 'text-neutral-500 hover:text-black'}
          data-status={activePage === 'about' ? 'active' : undefined}
          aria-current={activePage === 'about' ? 'page' : undefined}
        >
          About
        </a>
      </div>
    </nav>
  );
}

export default SidebarNav;
