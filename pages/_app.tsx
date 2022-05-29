import ApolloConfig from "../src/components/apollo";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import LayOut from "../src/components/layout";
import { CustomToastContainer } from "../src/components/common/toast";
import "react-toastify/dist/ReactToastify.css";
import { Flip } from "react-toastify";
function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ApolloConfig>
        <LayOut>
          <Component {...pageProps} />
          <CustomToastContainer position="top-center" autoClose={1500} hideProgressBar={true} transition={Flip} closeButton={false} />
        </LayOut>
      </ApolloConfig>
    </RecoilRoot>
  );
}

export default MyApp;
