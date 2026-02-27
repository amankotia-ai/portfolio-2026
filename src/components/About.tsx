import SidebarNav from './SidebarNav';

function About() {
  return (
    <aside className="w-[288px] mx-4 pt-4 pb-24 [@media(min-width:960px)]:fixed [@media(min-width:960px)]:top-4 [@media(min-width:960px)]:left-4 [@media(min-width:960px)]:mx-0 [@media(min-width:960px)]:h-[calc(100vh-32px)] [@media(min-width:960px)]:overflow-y-auto [@media(min-width:960px)]:scrollbar-hide [@media(min-width:960px)]:p-0 flex flex-col gap-8">
      <SidebarNav activePage="about" />

      <div className="flex flex-col gap-5 text-sm">
        <h1 className="text-[22px] text-balance leading-tight">
          Abhishek Mankotia
        </h1>

        <p className="text-pretty">
          A Creative Technologist based in Mumbai, I began my journey as a
          UI/UX designer and gradually expanded into no-code development with
          Bubble, Webflow, and Framer&mdash;building brand identities,
          websites, sales decks, and product sheets that became essential
          assets for early-stage SaaS ventures. Over time, I grew into
          full-stack engineering, delivering production-ready applications for
          clients across real estate, communications, gaming arcades, fashion
          e-commerce, and networking infrastructure.
        </p>

        <p className="text-pretty">
          Most recently, I&apos;ve been focusing on AI&mdash;developing
          micro-SaaS products and actively seeking collaboration with SaaS
          founders, fellow designers, and AI enthusiasts to bring cutting-edge
          ideas to market.
        </p>
      </div>
    </aside>
  );
}

export default About;
