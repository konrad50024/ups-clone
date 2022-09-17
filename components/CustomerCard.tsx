import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import useCustomerOrders from "../hooks/useCustomerOrders";
import { useTailwind } from "tailwind-rn/dist";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomerScreenNavigationProp } from "../screens/CustomersScreen";

type Props = {
  email: string;
  name: string;
  userId: string;
};

const CustomerCard = ({ email, name, userId }: Props) => {
    const { orders, error, loading } = useCustomerOrders(userId);
    const tw = useTailwind();
    const navigation = useNavigation<CustomerScreenNavigationProp>();
  return (
    <View style={tw("h-full, w-full bg-black-500")}>
      <Text style={tw("text-red-500 pt-5")}>1</Text>
    </View>
  );
};

export default CustomerCard;
