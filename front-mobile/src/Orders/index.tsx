import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Header from '../Header';
import OrderCard from '../OrderCard/indes';

export default function Orders() {

  return (
  <>
    <Header />
    <ScrollView style={styles.container}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
    </ScrollView>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%',
    
}
});
