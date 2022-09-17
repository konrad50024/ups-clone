import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTailwind } from "tailwind-rn/dist";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import { TabParamList } from "../navigator/TabNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Image, Input } from "@rneui/themed";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

const CustomersScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation();
  const [input, setInput] = useState<string>("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#59C1CC" }}>
      <Image
        source={{ uri: "https://links.papareact.com/3jc" }}
        containerStyle={tw("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />

      <Input
        placeholder="Search by Customer"
        value={input}
        onChangeText={setInput}
        containerStyle={tw("bg-white pt-5 pb-0 px-10")}
      />
    </ScrollView>
  );
};

export default CustomersScreen;
