import Image from "next/image";
import Link from "next/link";
import type { VFC } from "react";

import headerImage from "../../public/alex-wellnitz-web-development.jpg";
import logo from "../../public/logo.jpeg";

// TODO: Mobile w-20 Logo

/**
 * @package
 */
export const Header: VFC = () => (
  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
    <div className="p-8 sm:p-8 md:p-20">
      <Link href="/">
        <Image
          src={logo}
          alt="Alexohneander - Alex Wellnitz - Logo"
          placeholder="blur"
          quality={75}
          className="mx-auto mb-10 w-28 sm:mb-10 md:mx-auto md:mb-24 lg:mx-0"
        />
      </Link>
      <h1 className="mb-5 text-2xl font-bold text-highlight-color-dark uppercase md:text-2xl lg:text-3xl xl:text-4xl">
        Alex Wellnitz <br />
        Softwarearchitekt.
      </h1>
      <p className="text-base font-light md:text-base lg:text-lg xl:text-xl">
        A passionate Backend Developer and DevOps Architect from Germany.
        Helping developers build a faster web. Teaching about web development,
        Kubernetes, Network Security and more.
      </p>
    </div>
    <div className="w-full h-full">
      <Image
        className="object-cover w-full h-80 sm:h-80 md:h-full"
        objectFit="cover"
        width={840}
        height={540}
        alt="Alexohneander - Alex Wellnitz - Glas Wand"
        src={headerImage}
        quality={75}
        placeholder="blur"
      />
    </div>
  </div>
);
