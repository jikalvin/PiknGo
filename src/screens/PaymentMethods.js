import React, { useContext } from "react";
import Screen from "../components/Screen";
import { PaymentCard } from "../components/PaymentCard";
import { Icon, Button } from "@ui-kitten/components";
import { ThemeContext } from "../configs/Theme";
import { LocationCard } from "../components/LocationCard";

export default function ({ navigation }) {
  const themeContext = useContext(ThemeContext);
  const NewIcon = (props) => <Icon {...props} name="plus" />;

  return (
    <Screen
      backAction={() => {
        navigation.goBack();
      }}
      headerTitle={"Payment Methods"}
    >
      <Button
        style={{
          position: "absolute",
          margin: 16,
          right: 0,
          bottom: 0,
          borderRadius: 5,
        }}
        accessoryRight={NewIcon}
        status={themeContext.theme == "light" ? "info" : "basic"}
        onPress={() => {
          navigation.navigate("NewPayment");
        }}
      />
      <LocationCard
        vector
        location="Default"
        title="Cash on Delivery"
        icon="cash-multiple"
        btnText="Selected"
      />
      <PaymentCard type={require("../../assets/mtn.jpg")} number="683340380" />
      <PaymentCard type={require("../../assets/orange.png")} number="683340380" />
    </Screen>
  );
}
