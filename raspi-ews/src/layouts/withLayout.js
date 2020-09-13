import React from 'react';
import MainLayout from './main';

const withLayout = (Layout) => (Content) => () => {
  return (
    <Layout>
      <Content />
    </Layout>
  );
};

const withMainLayout = (Content) => withLayout(MainLayout)(Content);

export { withLayout, withMainLayout };