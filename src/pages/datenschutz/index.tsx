import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import type { VFC } from "react";

import logo from "../../../public/logo.jpeg";

export const Datenschutz: VFC = () => (
  <>
    <NextSeo
      title="Alexohneander - Datenschutz"
      description="Then with a short description here."
    />
    <Link href="/">
      <Image
        src={logo}
        alt="Alexohneander - Alex Wellnitz - Logo"
        placeholder="blur"
        className="mx-auto mb-10 w-28 sm:mb-10 md:mx-auto md:mb-24 lg:mx-0"
      />
    </Link>
    <h1 className="text-2xl font-bold text-highlight-color-dark uppercase md:text-2xl lg:text-3xl xl:text-4xl">
      Datenschutz
    </h1>
  </>
);
