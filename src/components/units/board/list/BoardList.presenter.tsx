import React from "react";
import { getDate } from "../../../../commons/libraries/utils";
import {
  Wrapper,
  Search_Input,
  Search_Yydd,
  TableTop,
  TableBottom,
  Row_TiTle,
  Row,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  ColumnBasic,
  ColumnTitle,
  Footer,
  //PencilIcon,
  MyButton,
  // MyPrev,
  TextToken,
  ColumnHeaderNumber,
  TableWrapper,
  ColumnHeaderData,
  // MyNext,
} from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";
import BoardSearch from "../../../commones/searchbars/boardsearchbar/BoardSearch.container";
import { v4 as uuidv4 } from "uuid";
import Paginations01 from "../../../commones/paginations/01/Paginations01.container";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <Wrapper>
      <BoardSearch
        refetch={props.refetch}
        refetchBoardsCount={props.refetchBoardsCount}
        onChangeKeyword={props.onChangeKeyword}
      />

      <TableWrapper>
        <TableTop />
        <Row_TiTle>
          <ColumnHeaderBasic>번호</ColumnHeaderBasic>
          <ColumnHeaderTitle>제목</ColumnHeaderTitle>
          <ColumnHeaderBasic>글쓴이</ColumnHeaderBasic>
          <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
        </Row_TiTle>

        {props.data?.fetchBoards.map((el: any, index: number) => (
          <Row key={el._id}>
            <ColumnBasic>{index + 1}</ColumnBasic>
            <ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
              {el.title
                .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                .split("@#$%")
                .map((el: any) => (
                  <TextToken key={uuidv4()} isMatched={props.keyword === el}>
                    {el}
                  </TextToken>
                ))}
            </ColumnTitle>
            <ColumnBasic>{el.writer}</ColumnBasic>
            <ColumnBasic>{getDate(el.createdAt)}</ColumnBasic>
          </Row>
        ))}
        <TableBottom />
      </TableWrapper>
      <Footer>
        <Paginations01
          refetch={props.refetch}
          count={props.count}
          startPage={props.startPage}
          setStartPage={props.setStartPage}
        />
        <MyButton onClick={props.onClickMoveToBoardNew}>
          게시물 등록하기
        </MyButton>
      </Footer>
    </Wrapper>
  );
}
