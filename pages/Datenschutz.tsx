import type { CustomNextPage } from "next";
import { TextPageLayout } from "src/layout";
import { Datenschutz } from "src/pages/datenschutz";

const DatenschutzPage: CustomNextPage = () => <Datenschutz />;

DatenschutzPage.getLayout = TextPageLayout;

export default DatenschutzPage;
