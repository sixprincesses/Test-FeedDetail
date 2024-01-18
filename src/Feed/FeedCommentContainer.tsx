import emotionStyled from "@emotion/styled";
import { color2 } from "../constants/colors";
import defaultImage from "../assets/profile.png";

const commentList = [
  {
    profileImage: "",
    memberName: "주스주스",
    commentTime: "",
    commentContent: "안녕하세요",
  },
];

const styled = emotionStyled;

const Container = styled.div`
  border: 3px solid ${color2};
`;

const FeedCommentContainer = () => {
  return (
    <Container>
      <h2>댓글 {commentList.length}</h2>
    </Container>
  );
};

export default FeedCommentContainer;
