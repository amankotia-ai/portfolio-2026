function ContentSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h1 className="text-5xl font-normal leading-[1.2]">
          Design partner for startup founders
        </h1>
        <p className="text-base leading-[1.6] text-black">
          Helping startup founders turn bold ideas into clear brands, polished products, and launch-ready digital experiences.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-sm text-gray-500">Past clients include</h2>
        <div className="grid grid-cols-2 gap-x-12 gap-y-1">
          <div className="space-y-1">
            <p className="text-base">Unifize</p>
            <p className="text-base">Bianhua</p>
            <p className="text-base">Pangea</p>
            <p className="text-base">Design Intervention</p>
            <p className="text-base">Shott</p>
          </div>
          <div className="space-y-1">
            <p className="text-base">2gethr</p>
            <p className="text-base">BaseStation</p>
            <p className="text-base">TrackFlow</p>
            <p className="text-base">Gargoyle</p>
            <p className="text-base">St.Paul&apos;s School</p>
          </div>
        </div>
      </div>

      <div className="flex pt-4">
        <button
          type="button"
          className="bg-black text-white px-7 py-3 rounded-full text-base font-normal hover:bg-gray-800 transition-colors"
          data-cal-link="abhishek-mankotia-65i5s6/30min"
          data-cal-namespace="30min"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
        >
          Book a call
        </button>
      </div>

      <div className="space-y-6 pt-2">
        <p className="text-base leading-[1.6] text-gray-600">
          <span className="underline text-gray-600">Charges start at 3k USD per month.</span> Projects typically take 3-6 weeks. You can pause or cancel anytime for ultimate flexibility.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-12 gap-y-1 text-gray-500 pt-2">
        <div className="space-y-1">
          <p className="text-base">Brand sprints</p>
          <p className="text-base">User journeys</p>
          <p className="text-base">Product design</p>
          <p className="text-base">Web design</p>
          <p className="text-base">MVP Development</p>
        </div>
        <div className="space-y-1">
          <p className="text-base">Wireframing</p>
          <p className="text-base">Social assets</p>
          <p className="text-base">UX auditing</p>
          <p className="text-base">Consulting</p>
          <p className="text-base">Web devellopment</p>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
