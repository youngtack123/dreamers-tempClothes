import ApolloConfig from "../src/components/apollo";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ApolloConfig>
        <Component {...pageProps} />
      </ApolloConfig>
    </RecoilRoot>
  );
}

export default MyApp;
