import emotionStyled from "@emotion/styled";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import React from "react";
import { color2 } from "../constants/colors";
import { FeedType } from "./FeedCardList";
import { Viewer } from "@toast-ui/react-editor";
import FeedCardHeader from "./FeedCardHeader";
import FeedCommentInput from "../Feed/FeedCommentInput";

interface FeedProps {
  feed: FeedType;
}

const styled = emotionStyled;

const Container = styled.div`
  border: 3px solid ${color2};
  border-radius: 20px;
  padding: 10px;
  margin: 30px auto;
`;

const gitPlugin = () => {
  const toHTMLRenderers = {
    Git(node: any) {
      let body = node.literal;
      // body = body.split("\n");
      // body = body.join("<br/>");
      body = body.replace(/\n/g, "<br/>");
      // 정규표현식 활용하여 치환
      return [
        {
          type: "openTag",
          tagName: "div",
          outerNewLine: true,
          attributes: { style: `color:hotpink; background-color:black` },
        },
        { type: "html", content: body },
        { type: "closeTag", tagName: "div", outerNewLine: true },
      ];
    },
  };

  return { toHTMLRenderers };
};

const FeedCardContainer: React.FC<FeedProps> = ({ feed }) => {
  return (
    <Container>
      <FeedCardHeader
        name={feed.name}
        image={feed.profileImage}
        time={feed.time}
      />

      <Viewer
        initialValue={feed.content.split("\n").slice(0, 7).join("\n")}
        plugins={[gitPlugin]}
      />

      <FeedCommentInput />
    </Container>
  );
};

export default FeedCardContainer;
