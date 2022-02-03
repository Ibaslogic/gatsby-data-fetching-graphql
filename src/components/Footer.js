import React from "react";
import { useSiteMetadata } from "../useSiteMetadata";

const Footer = () => {
  const { author } = useSiteMetadata();
  return (
    <footer>
      <div className="inner">
        <div className="footer__content">
          <p>
            &copy; {new Date().getFullYear().toString()} by {author}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
