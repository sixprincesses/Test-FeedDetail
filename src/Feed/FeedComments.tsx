import styled from "@emotion/styled";
import FeedComment from "./FeedComment";
import { color2 } from "../constants/colors";

const CommentsContainer = styled.div`
  border: 3px solid ${color2};
  border-radius: 5px;
  padding: 20px;
`;

const FeedComments = () => {
  const commentItems = Array.from({ length: 10 }, (_, index) => (
    <FeedComment key={index} />
  ));
  return <CommentsContainer>{commentItems}</CommentsContainer>;
};

export default FeedComments;
