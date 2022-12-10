import { Table, Button, Typography, Modal, Row, Col, Form, Input } from "antd";
import type { ColumnsType, ColumnGroupType } from "antd/es/table";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../redux/IStore";
import { DELETE_MEDICINE } from "../redux/Slices/AppSlice";
import { IMedicine } from "../redux/Slices/IApp";

interface IPharmaceuticalType {
  key: React.Key;
  name: string;
  locallyBarcode: string;
  section: string;
  category: string;
  pharmaceuticalForm: string;
  controlBtn: React.ReactNode;
}

function PharmaceuticalTable() {
  const {
    app: { drugs },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [drugsEditData, setDrugsEditData] = useState<Partial<IMedicine>>();

  const pharmaceuticalColumns: ColumnsType<IPharmaceuticalType> = [
    {
      title: "اسم الدواء",
      dataIndex: "name",
    },
    {
      title: "الباركود المحلي",
      dataIndex: "locallyBarcode",
    },
    {
      title: "القسم",
      dataIndex: "section",
    },
    {
      title: "التصنيف",
      dataIndex: "category",
    },
    {
      title: "الشكل الدوائي",
      dataIndex: "pharmaceuticalForm",
    },
    {
      title: "التحكم",
      dataIndex: "controlBtn",
    },
  ];
  const handleDeleteMedicine = (id: string) => {
    dispatch(DELETE_MEDICINE({ id }));
  };
  const pharmaceuticalDataSource = drugs?.map((drug: Partial<IMedicine>) => ({
    key: drug?.id,
    name: drug?.name,
    locallyBarcode: drug?.locallyBarcode,
    section: drug?.section,
    category: drug?.Category,
    pharmaceuticalForm: drug?.pharmaceuticalForm,
    controlBtn: (
      <>
        <Button
          type="text"
          icon={<EditOutlined />}
          className=" text-sky-600"
          onClick={() => handleOpenModal(drug)}
        >
          <Typography.Text strong>تعديل</Typography.Text>
        </Button>
        <Button
          danger
          type="text"
          icon={<DeleteOutlined />}
          onClick={() => handleDeleteMedicine(drug.id as string)}
        >
          <Typography.Text strong>حذف</Typography.Text>
        </Button>
      </>
    ),
  })) as IPharmaceuticalType[];

  const handleOpenModal = (modalData: Partial<IMedicine>) => {
    setIsOpenEditModal(true);
    setDrugsEditData(modalData);
    setDrugsEditData({
      name: modalData?.name,
      locallyBarcode: modalData?.locallyBarcode,
      section: modalData?.section,
      Category: modalData.Category,
      pharmaceuticalForm: modalData?.pharmaceuticalForm,
    });
  };
  const handleCancelModal = () => {
    setIsOpenEditModal(false);
  };
  const handleOkModal = () => {
    setIsOpenEditModal(false);
  };
  return (
    <>
      <div className="my-3 w-full h-max shadow-sm">
        <Table
          rowSelection={{
            type: "checkbox",
          }}
          columns={pharmaceuticalColumns}
          dataSource={pharmaceuticalDataSource}
          size="small"
          bordered
          title={() => (
            <Typography.Title level={5}> جدول الادوية</Typography.Title>
          )}
        />
      </div>
      <Modal
        title="تعديل بيانات الدواء"
        open={isOpenEditModal}
        onCancel={() => handleCancelModal()}
        onOk={() => handleOkModal()}
      >
        <Row>
          <Col span={16}>
            <Form>
              <Form.Item label="اسم الدواء" name="name" htmlFor="name">
                <Input
                  name="name"
                  id="name"
                  placeholder="اسم الدواء"
                  defaultValue={drugsEditData?.name}
                />
              </Form.Item>
              <Form.Item
                label="الباركود المحلي"
                name="locallyBarcode"
                htmlFor="locallyBarcode"
              >
                <Input
                  name="locallyBarcode"
                  id="locallyBarcode"
                  placeholder="الباركود المحلي"
                  defaultValue={drugsEditData?.locallyBarcode}
                />
              </Form.Item>
              <Form.Item label="القسم" name="section" htmlFor="section">
                <Input
                  name="section"
                  id="section"
                  placeholder="ادخل القسم"
                  defaultValue={drugsEditData?.section}
                />
              </Form.Item>
              <Form.Item label="التصنيف" name="category" htmlFor="category">
                <Input
                  name="category"
                  id="category"
                  placeholder="التصنيف"
                  defaultValue={drugsEditData?.Category}
                />
              </Form.Item>
              <Form.Item
                label="الشكل الدوائي"
                name="pharmaceuticalForm"
                htmlFor="pharmaceuticalForm"
              >
                <Input
                  name="pharmaceuticalForm"
                  id="pharmaceuticalForm"
                  placeholder="الباركود المحلي"
                  defaultValue={drugsEditData?.pharmaceuticalForm}
                />
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Modal>
    </>
  );
}

export default PharmaceuticalTable;
