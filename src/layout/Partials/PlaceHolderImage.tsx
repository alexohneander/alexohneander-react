import Image from "next/image";
import type { VFC } from "react";

import placeholderImage from "../../../public/background-office.jpeg";

/**
 * @package
 */
export const PlaceHolderImage: VFC = () => (
  <div className="h-96 bg-white">
    <Image
      src={placeholderImage}
      placeholder="blur"
      height={540}
      alt="Alexohneande - Alex Wellnitz - Schreibtisch"
      className="object-cover w-full h-full"
      quality={75}
    />
  </div>
);
