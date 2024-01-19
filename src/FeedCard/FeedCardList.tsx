import React, { useState } from "react";
import FeedCardContainer from "./FeedCardContainer";

export interface FeedType {
  profileImage: string;
  name: string;
  content: string;
  time: string;
  like: number;
  view: number;
}

const FeedCardList: React.FC = () => {
  const [FeedItems] = useState([
    {
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmp7sE1ggI4_L7NGZWcQT9EyKaqKLeQ5RBg&usqp=CAU",
      name: "김싸피",
      content: `$$Git\n# asdfasdf\n## asdjflasdkjfklasdfj\n- sdfkjlasdfkjsad\n- asdkj fjasdkl\n$$\n# 이건 제목입니다.`,
      time: "1월 10일",
    },
    {
      profileImage:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg",
      name: "김싸피",
      content: ``,
      time: "1월 10일",
    },
    {
      profileImage:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg",
      name: "김싸피",
      content: ``,
      time: "1월 10일",
    },
  ]);
  return (
    <>
      {FeedItems.map((feed, idx) => (
        <FeedCardContainer key={idx} feed={feed} />
      ))}
    </>
  );
};

export default FeedCardList;
