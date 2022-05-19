import ApolloConfig from "../src/components/apollo";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import LayOut from "../src/components/layout";
function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ApolloConfig>
        <LayOut>
          <Component {...pageProps} />
        </LayOut>
      </ApolloConfig>
    </RecoilRoot>
  );
}

export default MyApp;
