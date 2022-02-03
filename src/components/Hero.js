import React from "react";
import { useSiteMetadata } from "../useSiteMetadata";

const Hero = () => {
  const { title, description, twitterHandle } = useSiteMetadata();

  return (
    <div className="hero">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>
        You can find{" "}
        <a
          href={`https://twitter.com/${twitterHandle}`}
          target="_blank"
          rel="noopener noreferrer"
          title="twitter"
        >
          Ibas on Twitter
        </a>
      </p>
    </div>
  );
};

export default Hero;
