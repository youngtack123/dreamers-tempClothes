import styled from "@emotion/styled";

const FeedWrapper__Div = styled.div`
  width: 230px;
  border: 1px solid #bebebe;
  border-radius: 15px;
  margin-bottom: 15px;
`;

const FeedTop__Div = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

const UserIcon__Div = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #bebebe;
  margin-right: 5px;
`;

const UserName__Span = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
`;

const FeedBody__Div = styled.div`
  width: 230px;
  height: 300px;
`;

const FeedImage__Div = styled.div`
  width: 230px;
  height: 300px;
  background-color: #bebebe;
`;

const FeedBottom__Div = styled.div`
  width: 230px;
  padding: 10px 10px 5px;
`;

const BottomTop__Div = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const SelectedTag__Span = styled.span`
  background: #fff2b2;
  border-radius: 50px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 10px;
  text-align: center;
  padding: 2px 6px;
`;

const NoSelectedTag__Span = styled.span`
  background: #dddddd;
  border-radius: 50px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 10px;
  text-align: center;
  padding: 2px 6px;
`;

const BottomBottom__Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ClothInfo__Div = styled.div`
  width: 210px;
  height: 35px;
  background: #ffffff;
  border: 1px solid #bebebe;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const ClothIcon__Div = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #333;
`;

const ClothName__Span = styled.span`
  font-size: 12px;
`;

const OotdFeed = () => {
  return (
    <FeedWrapper__Div>
      <FeedTop__Div>
        <UserIcon__Div></UserIcon__Div>
        <UserName__Span>fkdjlf</UserName__Span>
      </FeedTop__Div>

      <FeedBody__Div>
        <FeedImage__Div></FeedImage__Div>
      </FeedBody__Div>

      <FeedBottom__Div>
        <BottomTop__Div>
          <SelectedTag__Span>#전라</SelectedTag__Span>
          <NoSelectedTag__Span>#스트릿</NoSelectedTag__Span>
        </BottomTop__Div>

        <BottomBottom__Div>
          <ClothInfo__Div>
            <ClothIcon__Div></ClothIcon__Div>
            <ClothName__Span>UTHR 아노락 긴팔 그레이</ClothName__Span>
          </ClothInfo__Div>
        </BottomBottom__Div>
      </FeedBottom__Div>
    </FeedWrapper__Div>
  );
};

export default OotdFeed;
