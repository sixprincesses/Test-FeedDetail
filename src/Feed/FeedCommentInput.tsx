import styled from "@emotion/styled";
import profile from "../assets/profile.png";
import { color2, colorW } from "../constants/colors";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

interface CommentInputProps {
  /**
   * input창 넓이
   */
  width?: number;
  /**
   * input창 높이
   */
  height?: number;
}

const Container = styled.div<CommentInputProps>`
  margin: 10px auto;
  display: flex;
  width: 80%;

  .input {
    width: ${(props) => props.width}%;
    height: ${(props) => props.height}px;
    border: 3px solid ${color2};
    border-radius: 5px;
    margin: auto 10px;
    background-color: ${colorW};
  }
  .image {
    width: 50px;
    border-radius: 100px;
    aspect-ratio: 1/1;
  }
  .sendButton {
    margin: auto;
    &:hover {
      color: ${color2};
    }
  }
`;

const FeedCommentInput = ({ width = 80, height = 25 }: CommentInputProps) => {
  const [comment, setComment] = useState("");

  const onChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const onSendComment = () => {
    console.log(comment);
  };
  return (
    <Container width={width} height={height}>
      <img className="image" src={profile} />
      <input
        className="input"
        value={comment}
        onChange={onChangeComment}
        placeholder="댓글을 남겨보세요."
      />
      <FaChevronRight className="sendButton" onClick={onSendComment} />
    </Container>
  );
};

export default FeedCommentInput;
