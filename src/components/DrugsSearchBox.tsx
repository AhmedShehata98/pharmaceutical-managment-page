import React from "react";
import { Form, Select, Row, Col, Input } from "antd";
import Button from "antd/es/button";
import {
  SearchOutlined,
  FilterOutlined,
  CloseOutlined,
} from "@ant-design/icons";
function DrugsSearchBox() {
  const options = [
    {
      label: "اسم الدواء",
      name: "اسم الدواء",
    },
    {
      label: "الباركود المحلي",
      name: "الباركود المحلي",
    },
    {
      label: "القسم",
      name: "القسم",
    },
    {
      label: "التصنيف",
      name: "التصنيف",
    },
    {
      label: "الشكل الدوائي",
      name: "الشكل الدوائي",
    },
  ];
  const sortOptions = [
    {
      label: "تصاغدي",
      name: "تصاغدي",
    },
    {
      label: "تنازلي",
      name: "تنازلي",
    },
  ];
  return (
    <div className="my-3 w-full h-max">
      <Form>
        <Row gutter={16}>
          <Col span={5}>
            <Form.Item label="بحث في" name="search-in">
              <Select
                defaultValue="اسم الدواء"
                options={options}
                size="small"
              />
            </Form.Item>
            <Form.Item label="بحث ترتيب ب" name="sort-with">
              <Select
                defaultValue="اسم الدواء"
                options={options}
                size="small"
              />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item label="القيمة" name="search-in">
              <Select
                defaultValue={"تبدأ بـ"}
                options={[{ label: "تبدأ بـ", name: "تبدأ بـ" }]}
                size="small"
              />
            </Form.Item>
            <Form.Item label="ترتيب">
              <Select
                defaultValue={"تصاعدي"}
                options={sortOptions}
                size="small"
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="الفيمة" name="search-value" required>
              <Input
                id="searchValue"
                name="search-value"
                placeholder="ادخل اسم شيء للبحث"
                size="small"
              />
            </Form.Item>
          </Col>
          <Col span={4} className="flex flex-col gap-4">
            <Button
              block
              type="primary"
              icon={<SearchOutlined />}
              className="bg-sky-600"
            >
              بحث
            </Button>
            <Button
              block
              type="primary"
              icon={<FilterOutlined />}
              className="bg-sky-600"
            >
              ترتيب
            </Button>
          </Col>
          <Col span={4} className="flex flex-col gap-4">
            <Button danger block type="primary" icon={<CloseOutlined />}>
              العاء البجث
            </Button>
            <Button danger block type="primary" icon={<CloseOutlined />}>
              القاء الترتيب
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default DrugsSearchBox;
