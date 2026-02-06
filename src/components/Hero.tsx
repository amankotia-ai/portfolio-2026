import SidebarNav from './SidebarNav';

type HeroProps = {
  activePage: 'index' | 'process';
};

function Hero({ activePage }: HeroProps) {
  return (
    <aside className="w-[288px] mx-4 pt-4 pb-24 [@media(min-width:960px)]:fixed [@media(min-width:960px)]:top-4 [@media(min-width:960px)]:left-4 [@media(min-width:960px)]:mx-0 [@media(min-width:960px)]:h-[calc(100vh-32px)] [@media(min-width:960px)]:overflow-y-auto [@media(min-width:960px)]:scrollbar-hide [@media(min-width:960px)]:p-0 flex flex-col gap-8">
      <SidebarNav activePage={activePage} />

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-[22px] text-balance leading-tight">
            Design partner for AI, web3, and ambitious startups
          </h1>
        </div>
        <p className="text-sm text-pretty">
          A dedicated team of passionate designers with over 20 years in the
          game designing experiences used by millions of users.
        </p>

        <div className="flex flex-col gap-2">
          <p className="text-sm text-neutral-500">Past clients include</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-0.5 text-sm">
            <div className="contents">
              <span>Whop</span>
              <span>Aviato</span>
            </div>
            <div className="contents">
              <span>Tally</span>
              <span>Wish</span>
            </div>
            <div className="contents">
              <span>Rainbow</span>
              <span>Tiny Wins</span>
            </div>
            <div className="contents">
              <span>Linktree</span>
              <span>PVP</span>
            </div>
            <div className="contents">
              <span>Bags</span>
              <span>Surf</span>
            </div>
            <div className="contents">
              <span>Flooz</span>
              <span>LetsPay</span>
            </div>
            <div className="contents">
              <span>Candle</span>
              <span>Usual</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://buy.stripe.com/14k16dcl2gH48y43cc"
            className="relative inline-flex items-center justify-center rounded-full cursor-pointer transition-[transform,opacity,background-color] whitespace-nowrap outline-offset-2 focus-visible:outline-2 focus-visible:outline-teal-400 active:scale-97 select-none disabled:pointer-events-none disabled:opacity-50 bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90 h-8 px-3 text-sm gap-1.5"
            target="_blank"
            rel="noreferrer"
          >
            Subscribe
          </a>
          <a
            href="https://cal.com/team/endless/intro"
            className="relative inline-flex items-center justify-center rounded-full cursor-pointer transition-[transform,opacity,background-color] whitespace-nowrap outline-offset-2 focus-visible:outline-2 focus-visible:outline-teal-400 active:scale-97 select-none disabled:pointer-events-none disabled:opacity-50 bg-neutral-100 text-black hover:bg-neutral-200/70 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700/70 h-8 px-3 text-sm gap-1.5"
            target="_blank"
            rel="noreferrer"
          >
            Book a call
          </a>
        </div>

        <p className="text-sm text-neutral-500">
          <span className="underline">
            We charge 10K USD per month.
          </span>{' '}
          Projects typically take 3-6 weeks. You can pause or cancel anytime
          for ultimate flexibility.
        </p>

        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-x-8 gap-y-0.5 text-sm text-neutral-500">
            <div className="contents">
              <span>Brand sprints</span>
              <span>Wireframing</span>
            </div>
            <div className="contents">
              <span>User journeys</span>
              <span>Social assets</span>
            </div>
            <div className="contents">
              <span>Product design</span>
              <span>UX auditing</span>
            </div>
            <div className="contents">
              <span>Web design</span>
              <span>Consulting</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Hero;
