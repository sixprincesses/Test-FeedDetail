import styled from "@emotion/styled";
import FeedComment from "./FeedComment";
import { color2 } from "../constants/colors";

const CommentListContainer = styled.div`
  border: 3px solid ${color2};
  border-radius: 5px;
  padding: 20px;
`;

const FeedCommentList = () => {
  const commentList = Array.from({ length: 10 }, (_, index) => (
    <FeedComment key={index} />
  ));
  return <CommentListContainer>{commentList}</CommentListContainer>;
};

export default FeedCommentList;
