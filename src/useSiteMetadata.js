import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterHandle
          author
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
