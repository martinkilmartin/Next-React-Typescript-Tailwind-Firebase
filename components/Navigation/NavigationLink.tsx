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
  return (
    <Link href={href}>
      <a
        className={ariaCurrent ? "block px-4 py-2 mt-4 mr-4 font-bold text-white text-teal-200 bg-transparent sm:bg-green-900 sm:rounded sm:inline-block sm:mt-0 sm:hover:text-white hover:bg-green-700" : "block px-4 py-2 mt-4 mr-4 font-bold text-white text-teal-200 bg-transparent sm:bg-green-500 sm:rounded sm:inline-block sm:mt-0 sm:hover:text-white hover:bg-green-700"}
        aria-current={ariaCurrent}
      >
        {text}
      </a>
    </Link>
  );
}

export default NavigationLink;
