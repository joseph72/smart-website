import Head from "next/head";
import { StrictMode } from "react";
import Layout from "../components/layout";
import Main from "../components/main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Smart Insurance Ghana </title>
        <meta name="description" content="smart Insurance Ghana" />
        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Smart Insurance, Smart Insurance Ghana, Mobile Insurance, insurance ghana, fast Insurance, Ghana Insurance, Car Insurance, Travel Insurance, Home Insurance, Personal Accident, Insurance, Insurance Policy, Shield Insurance, Best Insurance, Star Insurance, SIC Insurance"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </div>
  );
}
// const Page: NextPageWithLayout = () => {
//   return <p>hello world</p>
// }

// Page.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <Layout>
//       <NestedLayout>{page}</NestedLayout>
//     </Layout>
//   )
// }
