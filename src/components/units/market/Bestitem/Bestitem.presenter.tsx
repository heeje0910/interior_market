import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./Bestitem.styles";

import Meta from "antd/lib/card/Meta";
import { IBestItemUIProps } from "./Bestitem.typers";
import { IUseditem } from "../../../../commons/types/generated/types";

//card 이미지 받아온느법.
// const BestImg = {
//     0: "./images/벽조명.jpg",
//     1: "./images/카페인테리어.jpg",
//     2: "/images/원목조리기구.png",
//     3: "/images/책위조명.jpg",
//   };
// board

const BestItemUI = (props: IBestItemUIProps) => {
  return (
    <S.Wrapper>
      <S.Title>이 달의 상품입니다</S.Title>
      <S.Wrapper_Card>
        {props.data?.fetchUseditemsOfTheBest.map((el: IUseditem) => (
          <S.BestCard
            hoverable
            cover={
              <S.myimg
                alt="example"
                src={`https://storage.googleapis.com/${el.images[0]}`}
                // src={el.images}
                onError={props.onError}
                onClick={props.onClickMoveToMarketDetail}
              />
            }
          >
            <Meta
              title={el.name}
              description={
                <div>
                  <span>
                    {el.seller?.name}
                    <br />
                    <br />
                  </span>
                  {/* <span>{el.contents}</span> */}
                  <span>
                    {getDate(el.createdAt)}
                    <br />
                    <br />
                  </span>
                  <span> {Number(el.price).toLocaleString("ko-KR")} 원</span>
                </div>
              }
            />
          </S.BestCard>
        ))}
      </S.Wrapper_Card>
    </S.Wrapper>
  );
};

export default BestItemUI;
