import React, { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import { newsBaseUrl } from "../utils/helper";
import { Button } from "antd";
import Navbar from "../components/Navbar";
import NewsCard from "../components/NewsCard";

function NewsList({ category }) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const getNews = async () => {
    const options = {
      method: "GET",
      // url: `${newsBaseUrl}/local`,
      params: {
        category: category,
        language: "en",
        country: "ng",
        sort: "top",
        page: "1",
      },
      headers: {
        "X-RapidAPI-Key": NEWS_API_KEY,
        "X-RapidAPI-Host": "newsi-api.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.get(`${newsBaseUrl}/category`, options);
      setData(response.data);
      // console.log(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getNews();
  }, []);

  if (loading) {
    return <div className="spinner"></div>;
  }
  console.log(data);
  return (
    <>
      {data.map((item) => (
        <NewsCard key={item._id} {...item} />
      ))}

      <Button type="primary">Button</Button>
    </>
  );
}

export default NewsList;
