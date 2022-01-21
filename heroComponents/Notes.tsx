/* eslint-disable linebreak-style */
import * as React from "react";
import { SVGProps } from "react";

const SvgNotes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 144 144"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: "scale(.95)",
    }}
    strokeWidth={1.5}
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="m121.886 128.937-58.071.021c-4.333 0-7.878-3.545-7.878-7.878l-.006-2.076m.005-40.468V19.233c0-4.333 3.545-7.878 7.878-7.878h69.011c4.333 0 7.878 3.545 7.878 7.878V121.08c0 4.333-3.545 7.878-7.878 7.878h-3.352"
      fill="none"
      stroke="#0f97b8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
    />
    <path
      d="M55.936 24.723v-5.49c0-4.333 3.545-7.878 7.878-7.878h69.011c4.333 0 7.878 3.545 7.878 7.878v5.49H55.936z"
      fill="#ffdb54"
    />
    <path
      d="M55.936 24.723v-5.49c0-4.333 3.545-7.878 7.878-7.878h69.011c4.333 0 7.878 3.545 7.878 7.878v5.49H55.936zm9.424 14.832h62m-62 26h43m-43-12h49M129.476 133.715h-7.589V73.01l3.795-7.421 3.794 7.421zm-7.589-59.366h7.589m-7.589 50.885h7.589m-7.589-5.356h7.589"
      fill="none"
      stroke="#0f97b8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
    />
    <path
      fill="#ffdb54"
      d="M121.887 119.878h7.588v5.356h-7.588zM129.476 74.349h-7.589V73.01l3.795-7.421 3.794 7.421z"
    />
    <path
      d="M121.887 74.349h7.589m0 59.366h-7.589V73.01l3.795-7.421 3.794 7.421zm-7.589-8.481h7.589m-7.589-5.356h7.589M121.887 74.349h7.589m-7.589 50.885h7.589m-7.589-5.356h7.589"
      fill="none"
      stroke="#0f97b8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
    />
    <path
      className="notes_svg__star"
      d="M39.458 54.136v7.425m3.712-3.712h-7.424"
      fill="none"
      stroke="#ffdb54"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={9}
    />
    <path
      className="notes_svg__star"
      d="M27.709 23.785v12.402m6.201-6.201H21.508"
      fill="none"
      stroke="#ffdb54"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
    />
    <g
      style={{
        transform: "translateX(5%)",
      }}
    >
      <path
        fill="none"
        stroke="#0f97b8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M4.546 78.541h73.645v40.462H4.546z"
      />
      <path fill="#ffdb54" d="M12.253 87.33h19.053v22.8H12.253z" />
      <path
        fill="none"
        stroke="#0f97b8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M12.253 87.33h19.053v22.8H12.253z"
      />
      <g
        fill="none"
        stroke="#0f97b8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      >
        <path d="M40.36 88.555h31m-31 8h21" />
        <circle cx={42.769} cy={106.771} r={2.257} />
        <circle cx={42.769} cy={106.771} r={2.257} fill="#ffdb54" />
        <circle cx={53.045} cy={106.771} r={2.257} />
        <circle cx={53.045} cy={106.771} r={2.257} fill="#ffdb54" />
        <circle cx={63.321} cy={106.771} r={2.257} />
        <circle cx={63.321} cy={106.771} r={2.257} fill="#ffdb54" />
      </g>
    </g>
  </svg>
);

export default SvgNotes;
