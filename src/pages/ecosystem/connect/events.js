import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';

export default function Events() {
  return (
    <Layout layout="sidebar">
      <SEO title="Events" />
      <div>events</div>
    </Layout>
  );
}

export const query = graphql`
  query {
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
