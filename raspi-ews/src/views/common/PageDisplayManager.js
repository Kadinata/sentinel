import React from 'react';
import Loading from './Loading';
import ErrorDisplay from './ErrorDisplay';

const PageDataContext = React.createContext({});

export const usePageDataContext = () => {
  const context = React.useContext(PageDataContext);
  if (context === undefined) {
    throw new Error('usePageDataContext must be used within a PageDataContext provider.');
  }
  return context;
}

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