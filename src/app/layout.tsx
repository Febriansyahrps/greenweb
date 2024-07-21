import MainLayout from "@/components/templates/MainLayout";
import { ConfigProvider } from "antd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Green Web",
  description: "Created by Group ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#BF4408",
          fontFamily: `"Poppins", sans-serif`,
        },
        components: {
          Button: {
            colorBorder: "#BF4408",
            defaultColor: "#BF4408",
            fontSize: 16,
            fontWeight: 500,
            paddingBlock: 20,
            paddingInline: 32,
            borderRadius: 100,
          },
        },
      }}
    >
      <MainLayout>{children}</MainLayout>
    </ConfigProvider>
  );
}
