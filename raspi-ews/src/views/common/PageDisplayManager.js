import React from 'react';
import Loading from './Loading';
import ErrorDisplay from './ErrorDisplay';

const PageDataContext = React.createContext({});

export const usePageDataContext = () => React.useContext(PageDataContext);

export const PageDisplayManager = ({ loading, error, data, children, ...props }) => {
  return (
    <Loading show={loading}>
      <PageDataContext.Provider value={data}>
        <ErrorDisplay error={error}>
          {children}
        </ErrorDisplay>
      </PageDataContext.Provider>
    </Loading>
  );
};