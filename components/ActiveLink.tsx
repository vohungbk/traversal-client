"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ children, ...rest }: { children: React.ReactNode } & LinkProps) => {
  const { href } = rest;
  const pathName = usePathname();

  const isActive = pathName === href;

  return (
    <li className={`nav-item ${isActive && "active"}`}>
      <Link {...rest} className="nav-link">
        {children}
      </Link>
    </li>
  );
};

export default ActiveLink;
