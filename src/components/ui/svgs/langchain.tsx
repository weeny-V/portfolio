import type { SVGProps } from "react";

const Langchain = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>LangChain</title>
    <rect x="3" y="3" width="26" height="26" rx="7" fill="#1C3C3C" />
    <path
      d="M11.3 10.2 8.8 12.7a4.6 4.6 0 0 0 6.5 6.5l2.1-2.1"
      stroke="#E8F5E9"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="m20.7 21.8 2.5-2.5a4.6 4.6 0 0 0-6.5-6.5l-2.1 2.1"
      stroke="#9FE3C2"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="m13.1 18.9 5.8-5.8"
      stroke="#FFFFFF"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

export { Langchain };

