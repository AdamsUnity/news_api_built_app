import React from "react";
import { Button, Card } from "antd";
const { Meta } = Card;
// import TimeAgo from "javascript-time-ago";

// // English.
// import en from "javascript-time-ago/locale/en";

// TimeAgo.addDefaultLocale(en);

// // Create formatter (English).
// const timeAgo = new TimeAgo("en-US");

const NewsCard = ({
  image,
  link,
  publishedAt,
  sourceName,
  title,
  _id,
  shortLink,
}) => (
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
        className="h-40 object-cover"
      />
    }
    actions={[
      <Button>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {" "}
          Read More
        </a>
      </Button>,
      // <small className="text-orange-500">
      //   {timeAgo.format(new Date(publishedAt))}
      // </small>,
    ]}
  >
    <Meta title={title} description={shortLink} />
    {/* <Meta title={publishedAt} description="" />
    <Meta title={sourceName} description="" /> */}
  </Card>
);
export default NewsCard;
