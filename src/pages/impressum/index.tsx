import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import type { VFC } from "react";

import logo from "../../../public/logo.jpeg";

export const Impressum: VFC = () => (
  <>
    <NextSeo
      title="Alexohneander - Impressum"
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
      Impressum
    </h1>
    <p className="text-lg font-bold text-highlight-color-dark uppercase md:text-lg lg:text-xl xl:text-xl">
      GEM. §5 TMG
    </p>
    <p>
      Alexohneander <br />
      Haupstraße 4 <br />
      56291 Kisselbach
    </p>
  </>
);
