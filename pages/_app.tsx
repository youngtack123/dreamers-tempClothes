import ApolloConfig from "../src/components/apollo";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloConfig>
      <Component {...pageProps} />
    </ApolloConfig>
  );
}

export default MyApp;
