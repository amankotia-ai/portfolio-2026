function Logo() {
  return (
    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-black flex items-center justify-center overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="black"/>
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          const rad = (angle * Math.PI) / 180;
          const x1 = 50 + Math.cos(rad) * 15;
          const y1 = 50 + Math.sin(rad) * 15;
          const x2 = 50 + Math.cos(rad) * 45;
          const y2 = 50 + Math.sin(rad) * 45;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="white"
              strokeWidth="1.5"
            />
          );
        })}
      </svg>
    </div>
  );
}

export default Logo;
