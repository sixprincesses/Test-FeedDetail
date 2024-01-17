import styled from "@emotion/styled";
import FeedCommentInput from "./FeedCommentInput";
import FeedReplys from "./FeedComments";

const Container = styled.div`
  width: 600px;
`;

const Feed = () => {
  return (
    <Container>
      <FeedCommentInput />
      <FeedReplys />
    </Container>
  );
};

export default Feed;
