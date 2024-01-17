import styled from "@emotion/styled";
import FeedCommentInput from "./FeedReplyInput";
import FeedReplys from "./FeedReplys";

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
