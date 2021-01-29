import React from 'react'
import Element from './Element'


export default function TetradSVG({ viewBox }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width='100%'
      height='100%'
      >
      <g data-name="Layer 1">
        <path
          fill='none'
          stroke='#000'
          stroke-miterlimit='10'
          transform="rotate(45 276.94 276.742)"
          d="M130.73 130.53h292.42v292.42H130.73z"
        />
        <path
          fill='none'
          stroke='#000'
          stroke-miterlimit='10'
          d="M276.94 70.3v413.28M483.58 276.94H70.3"
        />
        <Element
          cx={276.94}
          cy={70.3}
          r={70.3}
          fill="#a3509f"
          type='aesth'
          />
        <Element
          cx={276.94}
          cy={483.58}
          r={70.3}
          fill="#62c4d6"
          type='tech'
          />
        <Element
          cx={483.58}
          cy={276.94}
          r={70.3}
          fill="#db742b"
          type='story'
          />
        <Element
          cx={70.3}
          cy={276.94}
          r={70.3}
          fill="#e0c73a"
          type='mech'
          />
      </g>
    </svg>
  );
}
