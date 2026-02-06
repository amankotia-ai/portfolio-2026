function ContentSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h1 className="text-5xl font-normal leading-[1.2]">
          Design partner for AI, web3, and ambitious startups
        </h1>
        <p className="text-base leading-[1.6] text-black">
          A dedicated team of passionate designers with over 20 years in the game designing experiences used by millions of users.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-sm text-gray-500">Past clients include</h2>
        <div className="grid grid-cols-2 gap-x-12 gap-y-1">
          <div className="space-y-1">
            <p className="text-base">Whop</p>
            <p className="text-base">Tally</p>
            <p className="text-base">Rainbow</p>
            <p className="text-base">Linktree</p>
            <p className="text-base">Bags</p>
            <p className="text-base">Flooz</p>
            <p className="text-base">Candle</p>
          </div>
          <div className="space-y-1">
            <p className="text-base">Aviato</p>
            <p className="text-base">Wish</p>
            <p className="text-base">Tiny Wins</p>
            <p className="text-base">PVP</p>
            <p className="text-base">Surf</p>
            <p className="text-base">LetsPay</p>
            <p className="text-base">Usual</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <button className="bg-black text-white px-7 py-3 rounded-full text-base font-normal hover:bg-gray-800 transition-colors">
          Subscribe
        </button>
        <button className="border border-black text-black px-7 py-3 rounded-full text-base font-normal hover:bg-gray-50 transition-colors">
          Book a call
        </button>
      </div>

      <div className="space-y-6 pt-2">
        <p className="text-base leading-[1.6] text-gray-600">
          <span className="underline text-gray-600">We charge 10K USD per month.</span> Projects typically take 3-6 weeks. You can pause or cancel anytime for ultimate flexibility.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-12 gap-y-1 text-gray-500 pt-2">
        <div className="space-y-1">
          <p className="text-base">Brand sprints</p>
          <p className="text-base">User journeys</p>
          <p className="text-base">Product design</p>
          <p className="text-base">Web design</p>
        </div>
        <div className="space-y-1">
          <p className="text-base">Wireframing</p>
          <p className="text-base">Social assets</p>
          <p className="text-base">UX auditing</p>
          <p className="text-base">Consulting</p>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
