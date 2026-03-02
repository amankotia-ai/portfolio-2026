import SidebarNav from './SidebarNav';

function About() {
  return (
    <aside className="w-[288px] ml-8 mr-4 pt-8 pb-24 [@media(min-width:960px)]:fixed [@media(min-width:960px)]:top-8 [@media(min-width:960px)]:left-8 [@media(min-width:960px)]:mx-0 [@media(min-width:960px)]:h-[calc(100vh-64px)] [@media(min-width:960px)]:overflow-y-auto [@media(min-width:960px)]:scrollbar-hide [@media(min-width:960px)]:p-0 flex flex-col gap-8">
      <SidebarNav activePage="about" />

      <div className="flex flex-col gap-5 text-sm">
        <h1 className="text-[22px] text-balance leading-tight">
          Abhishek Mankotia
        </h1>

        <div className="flex flex-col gap-4 text-neutral-500">
          <p className="text-pretty">
            Every great digital product starts with a simple conviction: technology must amplify human intent, never obscure it. Operating at the intersection of design and engineering involves crafting brand identities, systems, and full-stack applications that make the complex feel completely intuitive.
          </p>
          <p className="text-pretty">
            With the rise of intelligent workflows and AI tooling, the friction of building has dissolved. The old rules of rigid development are gone, replaced by the ability to deliver adaptive, fast-scaling applications with incredible agility.
          </p>
          <p className="text-pretty">
            But speed without direction is just noise. True resonance comes from a deeply rooted design-first approach. It gives technology a heartbeat, ensuring that efficiency translates into an experience people actually understand, trust, and love using.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 text-sm">
        <section className="flex flex-col gap-4">
          <h2 className="text-sm font-medium">Expertise</h2>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-black font-medium text-[13px]">Design & Prototyping</h3>
              <p className="text-neutral-500 leading-snug">
                Figma, Wireframing, UX Auditing, Brand Sprints.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-black font-medium text-[13px]">Engineering</h3>
              <p className="text-neutral-500 leading-snug">
                React, Next.js, Web & MVP Development.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-black font-medium text-[13px]">No-Code</h3>
              <p className="text-neutral-500 leading-snug">
                Webflow, Framer, Bubble.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-black font-medium text-[13px]">AI Tools</h3>
              <p className="text-neutral-500 leading-snug">
                Cursor, Codex, Pencil, MCPs, RAGs, Antigravity, MidJourney.
              </p>
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
}

export default About;
