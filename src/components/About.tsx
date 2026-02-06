import SidebarNav from './SidebarNav';

function About() {
  return (
    <aside className="w-[288px] mx-4 pt-4 pb-24 [@media(min-width:960px)]:fixed [@media(min-width:960px)]:top-4 [@media(min-width:960px)]:left-4 [@media(min-width:960px)]:mx-0 [@media(min-width:960px)]:h-[calc(100vh-32px)] [@media(min-width:960px)]:overflow-y-auto [@media(min-width:960px)]:scrollbar-hide [@media(min-width:960px)]:p-0 flex flex-col gap-8">
      <SidebarNav activePage="about" />

      <div className="flex flex-col gap-5 text-sm">
        <h1 className="text-[22px] text-balance leading-tight">
          Endless was founded
          <br />
          in 2023 by Daryl Ginn
        </h1>

        <p className="text-pretty">
          Hey, I&apos;m Daryl Ginn, I&apos;ve been designing for over 20 years,
          and I&apos;ve always wanted to put together the strongest team of
          designers I possibly could in the effort to have a larger impact in
          design.
        </p>

        <p className="text-pretty">
          Since starting Endless, we&apos;ve worked with some of the largest
          companies in the world, and helped many new and existing companies
          raise millions of capital.
        </p>

        <p className="text-pretty">
          I&apos;m a big believer in being humble, but I do truly believe we do
          some of the best work in this space. And the day I no longer do will
          be the day we stop.
        </p>

        <div className="flex flex-col gap-2 pt-1">
          <svg
            className="h-[54px] w-[208px]"
            viewBox="0 0 208 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M2 39.4c9.1 0 18.2 0.7 27.3 0.5 2.5-.1 6.2.4 7.3-2.5 1.7-4.6 2.7-9.5 4.1-14.2 1.1-3.7 2.1-7.4 3.2-11.1M29.8 38.7c4 4.8 6.4 10.6 10.8 15 2.3 2.3 5.6-1.3 7.2-3.2 4-4.8 6.5-10.5 8.6-16.4 1.6-4.5 2.6-9.3 4.5-13.8M46.5 40.5c2.9 4.6 4.6 10 8.9 13.6 3.2 2.7 4.2-2.8 4.5-4.9 1.7-11.2 2.5-22.5 4.4-33.7M56.7 35.6c4.4 2.1 7.5 7.7 12.7 8.2 3.8.4 5.1-4.9 5.5-7.8 1.4-9.7 1.7-19.5 2.6-29.3M70.6 40.3c3.2 5.6 6.5 11.2 9.8 16.8 2.4-7.6 2.9-15.6 4.2-23.4 1.2-7.2 2.8-14.3 4.9-21.2M84.3 42.1c4.7 1.1 9.7-.1 14.5-.2 8.4-.1 16.8-.8 25.2-1.4 15.2-1.1 30.4-2 45.6-2.9 11.3-.7 22.7-.8 34-2.1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <p className="text-pretty">
            Daryl Ginn,
            <br />
            Founder
          </p>
        </div>
      </div>
    </aside>
  );
}

export default About;
