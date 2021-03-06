import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* height: 100%; */
`;

export const BestBoardWrapper = styled.div`
  align-items: center;

  /* padding-top: 50px; */
  margin: 0 auto;
  background-color: #edeae3;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 100%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const BestItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 70%;
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    width: 70%;
    margin: 0 auto;
  }
`;

export const Myself = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: 2027px; */
  width: 100%;
  background-color: #edceba;
  text-align: center;
  padding: 20px;
  margin-top: 100px;
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 100%;
    margin: 0 auto;
    height: 600px;
    font-size: 14px;
  }
  @media (max-width: 767px) {
    width: 100%;
    margin: 0 auto;
    height: 600px;
    font-size: 14px;
  }
`;

export const HomeTitle = styled.div`
  font-size: 25px;
  padding: 10px;
`;

export const Remarks = styled.div`
  padding: 20px;
`;

export const HomeContents = styled.div`
  padding: 3px;
  /* @media (min-width: 768px) and (max-width: 1199px) {
    width: 100%;
    margin: 0 auto;
  } */
`;

export const MyStack = styled.div`
  margin-top: 100px;
  /* background-color: white; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 800px;
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  @media (max-width: 767px) {
    width: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

export const StackText = styled.div`
  text-align: center;
  font-size: 25px;
  @media (min-width: 768px) and (max-width: 1199px) {
    text-align: center;
    font-size: 25px;
    margin-top: 40px;
    padding-top: 50px;
  }
  @media (max-width: 767px) {
    text-align: center;
    font-size: 25px;
    margin-top: 40px;
    padding-top: 50px;
  }
`;

export const StackImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  margin: 0 auto;
  width: 50%;
  @media (min-width: 768px) and (max-width: 1199px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    margin: 0 auto;
    /* width: 50%; */
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    flex-wrap: wrap;
    height: 
    margin-bottom: 150px;
  }
`;

export const StackImg = styled.img`
  width: 150px;
  height: 150px;
  margin: 45px;
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 70px;
    height: 70px;
  }
  @media (max-width: 767px) {
    width: 70px;
    height: 70px;
  }
`;
