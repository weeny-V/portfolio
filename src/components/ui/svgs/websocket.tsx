import type { SVGProps } from "react";

const Websocket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>WebSocket</title>
    <path
      d="M5.5 11.5A11 11 0 0 1 24.3 6.8"
      stroke="#2563EB"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    <path
      d="m22.2 3.9 2.6 2.6-2.6 2.6"
      stroke="#2563EB"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.5 20.5A11 11 0 0 1 7.7 25.2"
      stroke="#22C55E"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    <path
      d="m9.8 28.1-2.6-2.6 2.6-2.6"
      stroke="#22C55E"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m10 12 4.1 4L10 20m12-8-4.1 4L22 20"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export { Websocket };

