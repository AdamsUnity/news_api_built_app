import React from "react";
import { Button, Card } from "antd";
const { Meta } = Card;

const NewsCard = ({ image, link, publishedAt, sourceName, title, _id }) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={
      <img
        alt="example"
        src={
          image !== ""
            ? image
            : "https://images.assetsdelivery.com/compings_v2/koblizeek/koblizeek1902/koblizeek190200055.jpg"
        }
      />
    }
    actions={[
      <Button>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {" "}
          Read More
        </a>
      </Button>,
    ]}
  >
    <Meta title={title} description="" />
    <Meta title={publishedAt} description="" />
    <Meta title={sourceName} description="" />
  </Card>
);
export default NewsCard;
