import React, {useState, forwardRef} from 'react';
import {FlatList} from 'react-native';

const FlatListLoadMore = forwardRef((props, ref) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    if (hasScrolled && props?.onLoadMore && !isLoading) {
      setIsLoading(true);
      props.onLoadMore();
      setIsLoading(false);
    }
  };
  return (
    <FlatList
      {...props}
      ref={ref}
      onScroll={() => setHasScrolled(true)}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={1.5}
    />
  );
});

export default FlatListLoadMore;
