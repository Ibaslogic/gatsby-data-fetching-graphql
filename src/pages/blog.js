import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql, Link } from "gatsby";

const BlogPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
          nodes {
            frontmatter {
              title
              date(formatString: "MMMM D, YYYY")
            }
            timeToRead
            excerpt
            slug
            id
            parent {
              ... on File {
                modifiedTime(formatString: "MMMM D, YYYY")
              }
            }
          }
        }
      }
    `
  );

  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <h1>Blog page.</h1>
      <ul>
        {posts.map((post) => {
          const { id, frontmatter, parent, timeToRead, excerpt, slug } = post;
          const { title, date } = frontmatter;

          const postStatus =
            date === parent.modifiedTime ? "Published " : "Updated ";

          return (
            <li className="post_item" key={id}>
              <Link to={`/${slug}`}>
                <article>
                  <h2>{title}</h2>
                  <div className="post__meta">
                    <span>
                      {postStatus} {parent.modifiedTime}
                    </span>{" "}
                    . <span>{timeToRead} min read</span>
                  </div>
                  <p>{excerpt}</p>
                </article>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default BlogPage;
