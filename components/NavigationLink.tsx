import React from "react";
import Link from "next/link";

type Props = {
  href: string;
  ariaCurrent?: false | true | "page" | "step" | "location" | "date" | "time";
  text: string;
  style?: string;
};

function NavigationLink({
  href,
  ariaCurrent = false,
  text
}: Props) {
  const styleClasses = {
    active: "text-gray-300 hover:bg-gray-700 hover:text-white block sm:inline px-3 py-2 rounded-md text-base font-medium",
    inActive:
      "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
  };
  return (
    <Link href={href}>
      <a
        className={ariaCurrent ? styleClasses.inActive : styleClasses.active}
        aria-current={ariaCurrent}
      >
        {text}
      </a>
    </Link>
  );
}

export default NavigationLink;
