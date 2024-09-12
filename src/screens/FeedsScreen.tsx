import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Card from '../components/Card.tsx';
import {useAppDispatch, useAppSelector} from '../hooks/useRedux.ts';
import {getAppState} from '../store/app/selectors.ts';
import {resetImages} from '../store/app/slice.ts';
import {fetchImages} from '../store/app/thunks.ts';

const FeedsScreen = () => {
  const dispatch = useAppDispatch();
  const {images, imageStatus, imageError, page} = useAppSelector(getAppState);

  useEffect(() => {
    if (imageStatus === 'idle') {
      dispatch(fetchImages(page));
    }
  }, [dispatch, imageStatus, page]);

  const onRefresh = () => {
    dispatch(resetImages());
    dispatch(fetchImages(1));
  };

  const onEndReached = () => {
    if (imageStatus !== 'loading') {
      dispatch(fetchImages(page));
    }
  };

  const renderFooter = () => {
    if (imageStatus === 'loading') {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }
    return null;
  };

  if (imageStatus === 'failed') {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error: {imageError}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Card item={item} />}
        refreshControl={
          <RefreshControl
            refreshing={imageStatus === 'loading' && page === 1}
            onRefresh={onRefresh}
          />
        }
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default FeedsScreen;
