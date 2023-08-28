import React, { useContext } from "react";
import {
  Text,
  Card,
  Icon,
  Layout,
  Button,
  useTheme,
} from "@ui-kitten/components";
import { PaymentIcon } from "react-native-payment-icons";
import { ThemeContext } from "../configs/Theme";
import { Image } from "react-native";

export const PaymentCard = ({ type, number, onPress, style }) => {
  const themeContext = useContext(ThemeContext);
  const TrashIcon = (props) => <Icon {...props} name="trash-2" />;
  return (
    <Card disabled style={{ marginHorizontal: "5%", marginVertical: "1%" }}>
      <Layout>
        <Layout
          style={
            (style,
            {
              flexDirection: "row",
              justifyContent: "space-between",
            })
          }
        >
          <Layout
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Image source={type} style={
                {
                  marginRight:20,
                  height: 50,
                  width: 60
                }
              } 
            />
            <Layout>
              <Text
                category="h6"
                style={{ fontWeight: "bold", textTransform: "capitalize" }}
              >
                {number}
              </Text>
              <Text category="label">{number}</Text>
            </Layout>
          </Layout>
          <Button
            onPress={onPress}
            accessoryRight={TrashIcon}
            status={themeContext.theme == "light" ? "info" : "basic"}
            appearance="ghost"
          />
        </Layout>
      </Layout>
    </Card>
  );
};
