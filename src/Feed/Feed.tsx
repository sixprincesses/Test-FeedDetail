import styled from "@emotion/styled";
import FeedCommentInput from "./FeedCommentInput";
import FeedCommentList from "./FeedCommentList";

const Container = styled.div`
  width: 600px;
`;

const Feed = () => {
  return (
    <Container>
      <FeedCommentInput />
      <FeedCommentList />
    </Container>
  );
};

export default Feed;
