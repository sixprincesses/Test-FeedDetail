import styled from "@emotion/styled";
import FeedReply from "./FeedReply";
import { color2 } from "../constants/colors";

const ReplysContainer = styled.div`
  border: 3px solid ${color2};
  padding: 20px;
`;

const FeedReplys = () => {
  const ReplyItems = Array.from({ length: 10 }, (_, index) => (
    <FeedReply key={index} />
  ));
  return <ReplysContainer>{ReplyItems}</ReplysContainer>;
};

export default FeedReplys;
