import WithApollo from '../lib/with-apollo';
import React from 'react';
import Layout from '../layout/Layout/Layout';
import People from '../components/People/People';

const Page: React.FC = (): JSX.Element => {
  return (
    <>
      <Layout>
        <People />
      </Layout>
    </>
  );
};

export default WithApollo({ ssr: false })(Page);
