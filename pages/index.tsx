import Head from "next/head";
import { StrictMode } from "react";
import Layout from "../components/layout";
import Main from "../components/main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="smart Insurance Ghana" />
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
