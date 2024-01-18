import emotionStyled from "@emotion/styled";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import React from "react";
import { color2 } from "../constants/colors";
import { FeedType } from "./FeedCardList";
import { Viewer } from "@toast-ui/react-editor";

interface FeedProps {
  feed: FeedType;
}

const styled = emotionStyled;

const Container = styled.div`
  border: 3px solid ${color2};

  .image {
    width: 150px;
    height: 150px;
  }
`;

const gitPlugin = () => {
  const toHTMLRenderers = {
    Git(node: any) {
      const body = node.literal;
      console.log(body);

      return [
        {
          type: "openTag",
          tagName: "div",
          outerNewLine: true,
          attributes: { style: "color:hotpink; background-color:black;" },
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
      <h1>{feed.name}</h1>
      <img src={feed.profileImage} className="image" />
      <Viewer initialValue={feed.content} plugins={[gitPlugin]} theme="dark" />
    </Container>
  );
};

export default FeedCardContainer;
