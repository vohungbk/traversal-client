import Link from "next/link";
import React, { FC } from "react";

interface BreadcrumbProps {
  title: string;
  pageName: string;
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ title, pageName }) => {
  return (
    <section className="w3l-about-breadcrumb text-left">
      <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
        <div className="container py-2">
          <h2 className="title">{title}</h2>
          <ul className="breadcrumbs-custom-path mt-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="active">
              <span className="fa fa-arrow-right mx-2" aria-hidden="true"></span>
              {pageName}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
