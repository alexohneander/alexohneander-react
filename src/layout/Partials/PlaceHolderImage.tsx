import Image from "next/image";
import type { VFC } from "react";

import placeholderImage from "../../../public/background-office.jpeg";

/**
 * @package
 */
export const PlaceHolderImage: VFC = () => (
  <div className="relative h-56 bg-white sm:h-56 md:h-96">
    <Image
      src={placeholderImage}
      placeholder="blur"
      layout="fill" // required
      objectFit="cover"
      alt="Alexohneande - Alex Wellnitz - Schreibtisch"
      className="object-cover w-full h-full"
      quality={75}
    />
  </div>
);
