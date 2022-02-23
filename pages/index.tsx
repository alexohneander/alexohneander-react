import type { CustomNextPage } from "next";
import { StartPageLayout } from "src/layout";
import { Index } from "src/pages/index";

const IndexPage: CustomNextPage = () => <Index />;

IndexPage.getLayout = StartPageLayout;

export default IndexPage;
