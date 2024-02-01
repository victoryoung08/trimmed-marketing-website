// icon:cubes | System UIcons https://systemuicons.com/ | Corey Ginnivan
import * as React from "react";

function IconCubes(props, width, height) {
  return (
    <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height={height}
      width={width}
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10.5 15.429l3.548 1.837a1 1 0 00.907.006l2.992-1.496a1 1 0 00.553-.894v-2.764a1 1 0 00-.553-.894L14.5 9.5l-3.46 1.792a1 1 0 00-.54.888v3.249z" />
        <path d="M3.04 15.708l3.008 1.558a1 1 0 00.907.006L10.5 15.5v-3.382a1 1 0 00-.553-.894L6.5 9.5l-3.46 1.792a1 1 0 00-.54.888v2.64a1 1 0 00.54.888zM6.5 9.429l3.548 1.837a1 1 0 00.907.006L14.5 9.5V6.118a1 1 0 00-.553-.894l-2.992-1.496a1 1 0 00-.907.006L7.04 5.292a1 1 0 00-.54.888v3.249z" />
        <path d="M6.846 5.673l3.207 1.603a1 1 0 00.894 0L14.12 5.69h0m-3.274 5.983l3.207 1.603a1 1 0 00.894 0l3.172-1.586h0m-15.273-.017l3.207 1.603a1 1 0 00.894 0l3.172-1.586h0M10.5 7.5v4m4 2V17m-8-3.5V17" />
      </g>
    </svg>
  );
}

export default IconCubes;
