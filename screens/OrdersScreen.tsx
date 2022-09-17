import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OrdersScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  return (
    <SafeAreaView>
      <Text>OrdersScreen</Text>
    </SafeAreaView>
  )
}

export default OrdersScreen