const AmericanFlag = () => {
  return (
    <svg
      width="160"
      height="100"
      viewBox="0 0 160 100"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {/* Stripes */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect
          key={`stripe-${i}`}
          x="0"
          y={i * 14.28}
          width="160"
          height="14.28"
          fill={i % 2 === 0 ? "hsl(350, 80%, 45%)" : "white"}
        />
      ))}
      {/* Blue canton */}
      <rect x="0" y="0" width="70" height="57" fill="hsl(224, 50%, 18%)" />
      {/* Star (simplified asterisk) */}
      <text
        x="35"
        y="36"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize="32"
        fontFamily="monospace"
        fontWeight="bold"
      >
        *
      </text>
      {/* Dot before star */}
      <circle cx="18" cy="36" r="3" fill="white" />
    </svg>
  );
};

export default AmericanFlag;
