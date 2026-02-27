import type { MouseEvent } from 'react';

type PageKey = 'index' | 'process' | 'about';
type RoutePath = '/' | '/process' | '/about';

type SidebarNavProps = {
  activePage: PageKey;
};

function handleNavClick(event: MouseEvent<HTMLAnchorElement>, path: RoutePath) {
  if (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  ) {
    return;
  }

  event.preventDefault();

  if (window.location.pathname === path) {
    return;
  }

  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

function SidebarNav({ activePage }: SidebarNavProps) {
  return (
    <nav className="flex items-center gap-5">
      <div className="flex items-center gap-4 text-sm">
        <a
          href="/"
          onClick={(event) => handleNavClick(event, '/')}
          className={activePage === 'index' ? 'text-black active' : 'text-neutral-500 hover:text-black'}
          data-status={activePage === 'index' ? 'active' : undefined}
          aria-current={activePage === 'index' ? 'page' : undefined}
        >
          Index
        </a>
        <a
          href="/process"
          onClick={(event) => handleNavClick(event, '/process')}
          className={activePage === 'process' ? 'text-black active' : 'text-neutral-500 hover:text-black'}
          data-status={activePage === 'process' ? 'active' : undefined}
          aria-current={activePage === 'process' ? 'page' : undefined}
        >
          Process
        </a>
        <a
          href="/about"
          onClick={(event) => handleNavClick(event, '/about')}
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
