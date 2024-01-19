import emotionStyled from "@emotion/styled";
import { FeedType } from "./FeedCardList";

interface FeedHeaderProps {
  name: string;
  image: string;
  time: string;
}
const styled = emotionStyled;

const Container = styled.div`
  display: flex;
  border: none;

  .image {
    height: 70px;
    width: 70px;
    border-radius: 100%;
    margin: 10px;
  }

  .name {
    text-align: left;
    font-weight: bold;
    font-size: large;
    margin-top: 10px;
  }

  .time {
    font-size: small;
  }
`;
const FeedCardHeader = ({ name, image, time }: FeedHeaderProps) => {
  return (
    <Container>
      <img src={image} className="image" />
      <div>
        <p className="name">{name}</p>
        <p className="time">{time}</p>
      </div>
    </Container>
  );
};

export default FeedCardHeader;
