import type { VFC } from "react";

const items = [
  { href: "/", label: "EAT WITH ME", address: "Wien" },
  { href: "/", label: "Cucina Laura", address: "Wilhelmshaven" },
  { href: "/", label: "Neonschwarz", address: "Koblenz" },
  { href: "/", label: "Investors4Diversity", address: "Berlin" },
];

/**
 * @package
 */
export const PartnerList: VFC = () => (
  <div className="p-8 bg-white sm:p-8 md:p-20">
    <h2 className="mb-5 text-2xl font-bold text-center text-highlight-color-dark uppercase md:text-2xl lg:text-3xl xl:text-4xl">
      Treue Gefährten.
    </h2>
    <div className="grid grid-cols-1 gap-4 mx-auto mb-10 max-w-4xl sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {items.map(({ address, href, label }) => (
        <div key={label}>
          <a href={href}>
            <div className="p-5 text-center bg-dark-white">
              <p>
                <b className="font-bold">{label}</b>
              </p>
              <small>{address}</small>
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
);
