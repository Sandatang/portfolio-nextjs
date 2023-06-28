import * as React from "react"
import { SVGProps } from "react"

interface GithubClassNames{
  classNames?: string,
}

export const GithubLogo = (props: SVGProps<SVGSVGElement>, classNames: GithubClassNames) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    className={`w-full h-auto ${classNames}`}
    {...props}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
)

export const FacebookLogo = (props: SVGProps<SVGSVGElement>, classNames: GithubClassNames) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // xmlSpace="preserve"
    // style={{
    //   enableBackground: "new 0 0 512 512",
    // }}
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    className={`w-full h-auto ${classNames}`}
    {...props}
  >
    <path
      d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 127.79 93.56 233.7 216.02 252.91V330.06h-64.95V256h64.95v-56.39c0-64.11 38.15-99.59 96.65-99.59 28.05 0 57.37 5.05 57.37 5.05v62.98h-32.26c-31.84 0-41.66 19.78-41.66 39.98V256h70.98l-11.36 74.06h-59.62v178.85C418.44 489.7 512 383.79 512 256z"
      style={{
        fill: "#1877f2",
      }}
    />
    <path
      d="M355.59 330.06 366.96 256h-70.98v-47.97c0-20.2 9.96-39.98 41.66-39.98h32.26v-62.98s-29.32-5.05-57.37-5.05c-58.49 0-96.65 35.49-96.65 99.59V256h-64.95v74.06h64.95v178.85c13.05 2.1 26.37 3.09 39.98 3.09 13.61 0 26.93-1.12 39.98-3.09V330.06h59.75z"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
)

