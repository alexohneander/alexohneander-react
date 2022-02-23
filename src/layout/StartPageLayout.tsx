import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";
import { CustomerList } from "./Partials/CustomerList";
import { PartnerList } from "./Partials/PartnerList";
import { PlaceHolderImage } from "./Partials/PlaceHolderImage";

/**
 * @package
 */
export const StartPageLayout: CustomLayout = (page) => (
  <div className="p-6 bg-very-light-grey sm:p-6 md:p-11">
    <div className="h-full bg-white">
      <header>
        <Header />
      </header>
      <CustomerList />
      <PlaceHolderImage />
      <PartnerList />
      <main className="flex-1 bg-gray-400">
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </div>
);
