import React from "react";

export function RedDotIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width="65"
      height="64"
      fill="none"
      viewBox="0 0 74 72"
    >
      <g filter="url(#filter0_d_562_46)">
        <ellipse
          cx="36.674"
          cy="32"
          fill="#FC1C00"
          rx="32.36"
          ry="32"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter0_d_562_46"
          width="72.719"
          height="72"
          x="0.314"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_562_46"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_562_46"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

