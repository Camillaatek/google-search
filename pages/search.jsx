import Header from "../components/Header";
import Head from "next/head";
function search() {
  return (
    <div>
      <Head>
        <title>Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />
      {/* search results */}
    </div>
  );
}

export default search;
