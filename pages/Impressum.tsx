import type { CustomNextPage } from "next";
import { TextPageLayout } from "src/layout";
import { Impressum } from "src/pages/impressum";

const ImpressumPage: CustomNextPage = () => <Impressum />;

ImpressumPage.getLayout = TextPageLayout;

export default ImpressumPage;
