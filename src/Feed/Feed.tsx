import styled from "@emotion/styled";
import FeedCommentInput from "./FeedCommentInput";
import FeedCommentList from "./FeedCommentList";
import { useState } from "react";

const Container = styled.div`
  width: 600px;
`;

const Feed = () => {
  const [FeedItems] = useState({
    title: "title이에용",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmp7sE1ggI4_L7NGZWcQT9EyKaqKLeQ5RBg&usqp=CAU",
      "../assets/다운로드",
    ],
  });
  return (
    <Container>
      <h1>{FeedItems.title}</h1>
      {FeedItems.images.map((image, idx) => {
        console.log(image + ".jpg");
        return <img className="image" src={image} key={idx} />;
      })}
      <FeedCommentInput />
      <FeedCommentList />
    </Container>
  );
};

export default Feed;
