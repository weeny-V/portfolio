import type { SVGProps } from "react";

const Vue = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 28"
    fill="none"
    {...props}
  >
    <title>Vue.js</title>
    <path fill="#41B883" d="M0 0h6.1L16 17.1 25.9 0H32L16 27.7z" />
    <path fill="#35495E" d="M6.1 0h5L16 8.5 20.9 0h5L16 17.1z" />
  </svg>
);

export { Vue };
