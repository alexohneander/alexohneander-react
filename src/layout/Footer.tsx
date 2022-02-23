import type { VFC } from "react";

const currentYear = new Date().getFullYear();

const items = [
  { href: "/Kontakt", label: "Kontakt" },
  { href: "/Impressum", label: "Impressum" },
  { href: "/Datenschutz", label: "Datenschutz" },
];

/**
 * @package
 */
export const Footer: VFC = () => (
  <div className="p-8 text-white bg-footer-dark sm:p-8 md:p-14">
    <p className="float-none text-center sm:float-none sm:text-center md:float-left md:text-left">
      &copy; {currentYear} Alexohneander
    </p>
    <ul className="float-none mt-5 list-none sm:float-none sm:mt-5 md:float-right md:mt-0">
      {items.map(({ href, label }) => (
        <li
          key={label}
          className="float-none mx-0 mt-2 text-center sm:float-none sm:mx-0 sm:mt-2 sm:text-center md:float-left md:mx-5 md:mt-0 md:text-left"
        >
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </div>
);
