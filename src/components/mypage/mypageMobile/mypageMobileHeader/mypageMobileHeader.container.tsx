import { useQuery } from "@apollo/client";
import { useRef } from "react";
import { FETCH_USER, FETCH_WEATHER } from "../../myPageHeader/MyPageHeaderquries";
import MypageMobileHeaderUI from "./mypageMobileHeader.presenter";

const MypageMobileHeader = () => {
  const selectMyPageRef = useRef([]);

  const { data: fetchUserData } = useQuery(FETCH_USER);
  const { data: weahterData } = useQuery(FETCH_WEATHER, {
    variables: {
      regionName: fetchUserData?.fetchUser.region.id,
    },
  });

  return <MypageMobileHeaderUI selectMyPageRef={selectMyPageRef} fetchUserData={fetchUserData} weahterData={weahterData} />;
};

export default MypageMobileHeader;
