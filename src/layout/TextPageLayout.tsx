import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

/**
 * @package
 */
export const TextPageLayout: CustomLayout = (page) => (
  <div className="p-6 bg-very-light-grey sm:p-6 md:p-11">
    <div className="h-full bg-white">
      <main className="p-8 sm:p-8 md:p-20">
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </div>
);
