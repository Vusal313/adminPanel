import React from "react";
import { Table, Button, Input, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

const data = [
  {
    key: "1",
    title: "Forma Yaratma Problemi",
    createdBy: "Gülnisə Mirzədə",
    createdAt: "03.06.2025",
  },
  {
    key: "2",
    title: "Giriş Sistemi Problemi",
    createdBy: "Elvin Məmmədov",
    createdAt: "03.06.2025",
  },
  {
    key: "3",
    title: "Şifrə Yenilənmə Problemi",
    createdBy: "Sevinc Əliyeva",
    createdAt: "03.06.2025",
  },
];

const columns = [
  {
    title: "Mövzu",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Yaradan şəxs",
    dataIndex: "createdBy",
    key: "createdBy",
  },
  {
    title: "Yaradılma tarixi",
    dataIndex: "createdAt",
    key: "createdAt",
  },
];

const TicketTable = () => {
  return (
    <div style={{ padding: 24 }}>
      <Space
        style={{
          marginBottom: 16,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Input
          placeholder="Axtarış edin"
          prefix={<SearchOutlined />}
          style={{ width: 300 }}
        />
        <Button type="primary" icon={<PlusOutlined />}>
          Yeni mövzu
        </Button>
      </Space>

      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10, showSizeChanger: true }}
      />
    </div>
  );
};

export default TicketTable;
