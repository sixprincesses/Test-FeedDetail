import styled from "@emotion/styled";
import FeedCommentInput from "./FeedCommentInput";
import FeedCommentList from "./FeedCommentList";
import { useState } from "react";

const Container = styled.div`
  width: 600px;
`;

const Feed = () => {
  const [FeedItems, setFeedItems] = useState({
    title: "title이에용",
    images: [
      "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041",
      "../assets/다운로드",
    ],
  });
  return (
    <Container>
      <h1>{FeedItems.title}</h1>
      {FeedItems.images.map((image, idx) => {
        console.log(image + ".jpg");
        return <img className="image" src={image + ".jpg"} key={idx} />;
      })}
      <FeedCommentInput />
      <FeedCommentList />
    </Container>
  );
};

export default Feed;
