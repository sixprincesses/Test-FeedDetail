import styled from "@emotion/styled";
import defaultProfile from "../assets/profile.png";
import { color2 } from "../constants/colors";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { useState } from "react";

const FeedReplyDiv = styled.div`
  border-bottom: 3px solid ${color2};
  padding: 10px;
  margin: auto;
  display: flex;
  height: 30px;
  width: 80%;

  .defaultProfileImage {
    margin: 0 5px;
  }

  .replyComment {
    border: 3px solid ${color2};
    border-radius: 5px;
    resize: none;
  }
`;

const FeedReply = () => {
  const [isLike, setIsLike] = useState(false);
  const content = "안녕하세요";
  const onClikeLike = () => {
    setIsLike(!isLike);
  };
  return (
    <FeedReplyDiv>
      <img className="defaultProfileImage" src={defaultProfile} />
      <textarea className="replyComment" defaultValue={content} />
      {isLike ? (
        <BiSolidLike size={30} onClick={onClikeLike} />
      ) : (
        <BiLike size={30} onClick={onClikeLike} />
      )}
    </FeedReplyDiv>
  );
};
export default FeedReply;
