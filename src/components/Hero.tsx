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
            Design partner for startup founders
          </h1>
        </div>
        <p className="text-sm text-pretty">
          Helping startup founders turn bold ideas into clear brands, polished
          products, and launch-ready digital experiences.
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
            <div className="contents">
              <span>MVP Development</span>
              <span>Web devellopment</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm text-neutral-500">Past clients include</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-0.5 text-sm">
            <div className="contents">
              <span>Unifize</span>
              <span>2gethr</span>
            </div>
            <div className="contents">
              <span>Bianhua</span>
              <span>BaseStation</span>
            </div>
            <div className="contents">
              <span>Pangea</span>
              <span>TrackFlow</span>
            </div>
            <div className="contents">
              <span>Design Intervention</span>
              <span>Gargoyle</span>
            </div>
            <div className="contents">
              <span>Shott</span>
              <span>St.Paul&apos;s School</span>
            </div>
          </div>
        </div>

        <div className="flex items-center pt-4">
          <button
            type="button"
            className="relative inline-flex items-center justify-center rounded-full cursor-pointer transition-[transform,opacity,background-color] whitespace-nowrap outline-offset-2 focus-visible:outline-2 focus-visible:outline-teal-400 active:scale-97 select-none disabled:pointer-events-none disabled:opacity-50 bg-neutral-950 text-white hover:bg-neutral-800 h-8 px-3 text-sm gap-1.5"
            data-cal-link="abhishek-mankotia-65i5s6/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Book a call
          </button>
        </div>

        <p className="text-sm text-neutral-500">
          <span className="underline">
            Charges start at 3k USD per month.
          </span>{' '}
          Projects typically take 3-6 weeks. You can pause or cancel anytime
          for ultimate flexibility.
        </p>
      </div>
    </aside>
  );
}

export default Hero;
