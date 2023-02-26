import { Tabs, Text } from "@geist-ui/react";
import { useRouter } from "next/router";

export default function TabHeading() {
  const router = useRouter();
  return (
    <>
      <Tabs initialValue="1">
  <Tabs.Item label="Home" value="1">
    <Text>Hello!</Text>
  </Tabs.Item>
  <Tabs.Item label="About" value="2">
    <Text>Cool stuff.</Text>
  </Tabs.Item>
  <Tabs.Item label="About Us" value="3">
    <Text>Good people.</Text>
  </Tabs.Item>
  <Tabs.Item label="Features" value="4">
    <Text>Amazing.</Text>
  </Tabs.Item>
  <Tabs.Item label="Pricing" value="5">
    <Text>Very low.</Text>
  </Tabs.Item>
  <Tabs.Item label="Docs" value="6">
    <Text>Clear.</Text>
  </Tabs.Item>
  <Tabs.Item label="Profile" value="7">
    <Text>Extraordinary person.</Text>
  </Tabs.Item>
  <Tabs.Item label="Settings" value="8">
    <Text>Easy to tweak.</Text>
  </Tabs.Item>
  <Tabs.Item label="Dashboard" value="9">
    <Text>Charts.</Text>
  </Tabs.Item>
  <Tabs.Item label="Policies" value="10">
    <Text>Privacy focused.</Text>
  </Tabs.Item>
</Tabs>
    </>
  );
}
