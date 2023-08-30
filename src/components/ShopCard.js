import React from "react";
import {
  Text,
  Card,
  Icon,
  Layout,
  useTheme,
  Button,
} from "@ui-kitten/components";

const ShopCard = ({ onPress, style }) => {
  const theme = useTheme();
  return (
    <Card
      disabled
      style={{
        marginHorizontal: "5%",
        marginVertical: "1%",
        backgroundColor: theme["color-primary-300"],
      }}
    >
      <Layout>
        <Layout
          style={
            (style,
            {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: theme["color-primary-300"],
            })
          }
        >
          <Layout
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: theme["color-primary-300"],
            }}
          >
            <Icon
              style={{ width: 25, height: 25, marginRight: 25 }}
              fill={theme["color-info-default"]}
              name="shopping-cart-outline"
            />
            <Layout
              style={{
                justifyContent: "center",
                backgroundColor: theme["color-primary-300"],
              }}
            >
              <Text
                category="h6"
                style={{
                  fontWeight: "bold",
                  color: theme["color-info-default"],
                }}
              >
                Shop
              </Text>
              <Text
                style={{
                  color: theme["color-info-default"],
                  fontSize: 14
                }}
              >
                Send someone to buy
              </Text>
              <Text
                style={{
                  color: theme["color-info-default"],
                  fontSize: 14
                }}
              >
                things for you
              </Text>
            </Layout>
          </Layout>
          <Button onPress={onPress} style={{ borderRadius: 20 }} status="info">
            Shop
          </Button>
        </Layout>
      </Layout>
    </Card>
  );
};

export default ShopCard