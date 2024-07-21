import { Button, Dropdown, MenuProps, Space } from "antd";
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";

const HeaderFeaturesDropdown = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href={"#"}>Feature Item</Link>,
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <Button type="text" className="">
        <Space>
          Features
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default HeaderFeaturesDropdown;
