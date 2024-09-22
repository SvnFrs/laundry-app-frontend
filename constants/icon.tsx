import { Feather } from "@expo/vector-icons";

export const icon = {
  "(home)": (props: any) => (
    <Feather name="home" color={"white"} size={24} {...props} />
  ),
  "(qr)": (props: any) => (
    <Feather name="credit-card" color={"white"} size={24} {...props} />
  ),
  "(cart)": (props: any) => (
    <Feather name="shopping-cart" color={"white"} size={24} {...props} />
  ),
  "(profile)": (props: any) => (
    <Feather name="user" color={"white"} size={24} {...props} />
  ),
};
