import type { SVGProps } from "react";

const Kotlin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    data-name="Layer 1"
    viewBox="0 0 125 125"
    {...props}
  >
    <defs>
      <linearGradient
        id="kotlin-gradient-orange"
        x1={-21.045}
        x2={95.274}
        y1={114.925}
        y2={-1.395}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.108} stopColor="#c757bc" />
        <stop offset={0.173} stopColor="#cd5ca9" />
        <stop offset={0.492} stopColor="#e8744f" />
        <stop offset={0.716} stopColor="#f88316" />
        <stop offset={0.823} stopColor="#ff8900" />
      </linearGradient>
      <linearGradient
        id="kotlin-gradient-blue"
        x1={39.893}
        x2={96.589}
        y1={147.552}
        y2={90.856}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.296} stopColor="#00afff" />
        <stop offset={0.694} stopColor="#5282ff" />
        <stop offset={1} stopColor="#945dff" />
      </linearGradient>
      <linearGradient
        xlinkHref="#kotlin-gradient-blue"
        id="kotlin-gradient-corner"
        x1={-1.501}
        x2={38.272}
        y1={34.501}
        y2={-5.273}
      />
    </defs>
    <title>Kotlin</title>
    <path
      fill="url(#kotlin-gradient-orange)"
      d="M62.759 0 0 65.999V125l62.669-62.779L125 0H62.759z"
    />
    <path
      fill="url(#kotlin-gradient-blue)"
      d="m0 125 62.669-62.778L125 125H0z"
      data-name="&lt;Path&gt;"
    />
    <path fill="url(#kotlin-gradient-corner)" d="M0 0h62.759L0 65.999V0z" />
  </svg>
)
export { Kotlin }
