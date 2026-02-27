import SidebarNav from './SidebarNav';

const processSteps = [
  {
    title: '001 Align',
    description:
      "I dig into your goals, users, and constraints. I create moodboards, map user flows, and design wireframes so everyone is on the same page.",
  },
  {
    title: '002 Direct',
    description:
      'I design the key screens and establish a clear visual direction. You sign off before I build out the rest.',
  },
  {
    title: '003 Build',
    description:
      'I design every screen, state, and edge case. I run internal reviews to keep everything consistent and ship-ready.',
  },
  {
    title: '004 Polish',
    description:
      'I refine details, define interactions, and hand over organised files your developers can build from.',
  },
];

function Process() {
  return (
    <aside className="w-[288px] mx-4 pt-4 pb-24 [@media(min-width:960px)]:fixed [@media(min-width:960px)]:top-4 [@media(min-width:960px)]:left-4 [@media(min-width:960px)]:mx-0 [@media(min-width:960px)]:h-[calc(100vh-32px)] [@media(min-width:960px)]:overflow-y-auto [@media(min-width:960px)]:scrollbar-hide [@media(min-width:960px)]:p-0 flex flex-col gap-8">
      <SidebarNav activePage="process" />

      <div className="flex flex-col gap-5 text-sm">
        <h1 className="text-[22px] text-balance leading-tight">
          From kickoff to handoff,
          <br />
          how I get through it
        </h1>

        <p className="text-pretty">
          Once you subscribe, I set up a shared Slack or Telegram channel and I
          get started that very day. You&apos;ll hear from me 2-3 times a
          week with progress updates, questions, and work to review.
        </p>

        <div className="flex flex-col gap-4">
          {processSteps.map((step) => (
            <section key={step.title} className="flex flex-col gap-2">
              <h2 className="text-sm text-neutral-500">{step.title}</h2>
              <p className="text-pretty">{step.description}</p>
            </section>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Process;
