import React from "react";
import { Link } from "merelyui";

export default function Navigation({
  prevLink,
  prevHref,
  nextLink,
  nextHref,
}: {
  prevLink?: string;
  prevHref?: string;
  nextLink?: string;
  nextHref?: string;
}) {
  return (
    <nav
      className={`
      w-full flex flex-row items-center mt-8
      ${(prevLink || nextLink) && "justify-end"}
      ${prevLink && nextLink && "justify-between"}
    `}
    >
      {prevLink && prevHref && (
        <Link
          label={prevLink}
          href={prevHref}
          secondary
          small
          position="left"
        />
      )}
      {nextLink && nextHref && (
        <Link
          label={nextLink}
          href={nextHref}
          secondary
          small
          position="right"
        />
      )}
    </nav>
  );
}
