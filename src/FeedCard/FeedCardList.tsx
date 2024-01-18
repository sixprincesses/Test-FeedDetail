import React, { useState } from "react";
import FeedCardContainer from "./FeedCardContainer";

export interface FeedType {
  profileImage: string;
  name: string;
  content: string;
}

const FeedCardList: React.FC = () => {
  const [FeedItems, setFeedItems] = useState([
    {
      profileImage:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg",
      name: "김싸피",
      content: `$$Git\n# asdfasdf\n## asdjflasdkjfklasdfj\n- sdfkjlasdfkjsad\n- asdkj fjasdkl\n$$`,
    },
    {
      profileImage:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg",
      name: "김싸피",
      content: ``,
    },
    {
      profileImage:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg",
      name: "김싸피",
      content: ``,
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
