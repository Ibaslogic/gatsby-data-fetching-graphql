import React from "react";
import Layout from "../components/layout";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage } from "gatsby-plugin-image";

export const query = graphql`
  query ($slug: String) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        featured {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      timeToRead
      parent {
        ... on File {
          modifiedTime(formatString: "MMMM D, YYYY")
        }
      }
      body
    }
  }
`;

const BlogPost = ({ data }) => {
  const { frontmatter, parent, timeToRead, body } = data.mdx;
  const { title, date, featured } = frontmatter;
  const postStatus =
    date === parent.modifiedTime ? "Published on" : "Updated on";

  return (
    <Layout>
      <article className="single__post">
        <header>
          <h1>{title}</h1>
          <span className="post__meta">
            {postStatus} {parent.modifiedTime}
            <span> . </span> {timeToRead} min read{" "}
          </span>
          <GatsbyImage
            image={featured.childImageSharp.gatsbyImageData}
            alt={title}
          />
        </header>
        <div>
          <MDXRenderer>{body}</MDXRenderer>
        </div>{" "}
      </article>
    </Layout>
  );
};

export default BlogPost;
