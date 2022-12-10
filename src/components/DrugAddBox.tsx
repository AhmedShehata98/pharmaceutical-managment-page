import { SaveOutlined } from "@ant-design/icons";
import { Form, InputNumber } from "antd";
import Button from "antd/es/button";
import { Col, Row } from "antd/es/grid";
import Input from "antd/es/input";
import { ADD_MEDICINE } from "../redux/Slices/AppSlice";
import { IMedicine } from "../redux/Slices/IApp";
import { useAppDispatch } from "../redux/IStore";
import { nanoid } from "nanoid";

const DrugAddBox = () => {
  const dispatch = useAppDispatch();
  const submitDrugData = (values: any) => {
    const drugData: Partial<IMedicine> = {
      id: nanoid(6),
      name: values["medicine-name"],
      nameAsArabic: values["medicine-name-ar"],
      qrCode: values["qr-code"],
      pharmaceuticalForm: values["medicine-form"],
      unitType: values["unit-type"],
      chemicalName: values["chemical-name"],
      companyName: values["company"],
      countOfUnits: values["count-of-units"],
      locallyBarcode: values["locally-barcode"],
      section: values["section"],
      latinName: values["latin-name"],
      internationalBarcode: values["international-barcode"],
      Category: values["category"],
    };

    dispatch(ADD_MEDICINE({ newDrug: drugData }));
    console.log(values);
  };
  return (
    <div className="w-full h-max shadow rounded p-3 my-4 bg-zinc-100">
      <Form onFinish={submitDrugData}>
        <Row gutter={16} justify="space-between">
          <Col span={6}>
            <Form.Item
              label="اسم الدواء"
              name="medicine-name"
              rules={[{ required: true }]}
              required
              htmlFor="medicineName"
            >
              <Input
                id="medicineName"
                name="medicine-name"
                placeholder="اضف اسم الدواء"
                size="small"
              />
            </Form.Item>
            <Form.Item
              label="الاسم عربي"
              name="medicine-name-ar"
              htmlFor="medicine-name-ar"
            >
              <Input
                id="medicine-name-ar"
                name="medicine-name-ar"
                placeholder="اضف اسم الدوا عربيء"
                size="small"
              />
            </Form.Item>
            <Form.Item label="QR Code" name="qr-code" htmlFor="qrCode">
              <Input
                id="qrCode"
                name="qr-code"
                placeholder="qr code"
                size="small"
              />
            </Form.Item>
            <Form.Item
              label="الشكل الدوائي"
              name="medicine-form"
              rules={[{ required: true }]}
              required
              htmlFor="medicineForm"
            >
              <Input
                id="medicineForm"
                name="medicine-form"
                placeholder="الشكل الدوائي"
                size="small"
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="نوغ الوحدة"
              name="unit-type"
              rules={[{ required: true }]}
              required
              htmlFor="unitType"
            >
              <Input
                id="unitType"
                name="unit-type"
                placeholder="ادخل نوع الوحدة"
                size="small"
              />
            </Form.Item>
            <Form.Item
              label="الاسم الكميائي"
              name="chemical-name"
              htmlFor="chemicalName"
            >
              <Input
                id="chemicalName"
                name="chemical-name"
                placeholder="ادخل الاسم الكميائ  للوحدة"
                size="small"
              />
            </Form.Item>
            <Form.Item label="الشركة" name="company">
              <Input
                id="company"
                name="company"
                placeholder="ادخل اسم الشركة"
                size="small"
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                className="bg-sky-600 flex justify-center items-center mr-auto rounded-sm"
                icon={<SaveOutlined />}
              >
                حفظ
              </Button>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="عدد الوحدات"
              name="count-of-units"
              rules={[{ required: true }]}
              required
              htmlFor="countOfUnits"
            >
              <InputNumber
                size="small"
                type={"number"}
                id="countOfUnits"
                name="count-of-units"
              />
            </Form.Item>
            <Form.Item
              label="الباركود المحلي"
              rules={[{ required: true }]}
              required
              name="locally-barcode"
              htmlFor="locallyBarcode"
            >
              <Input
                id="locallyBarcode"
                name="locally-barcode"
                size="small"
                placeholder=" ادخل الباركود المحلي "
              />
            </Form.Item>
            <Form.Item
              label="الفسم"
              rules={[{ required: true }]}
              required
              name="section"
              htmlFor="section"
            >
              <Input
                id="section"
                name="section"
                size="small"
                placeholder="ادخل القسم"
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="الاسم اللاتيني"
              name="latin-name"
              htmlFor="latinName"
            >
              <Input
                id="latinName"
                name="latin-name"
                size="small"
                placeholder="ادخل القسم"
              />
            </Form.Item>
            <Form.Item
              label="الباركود الدولي"
              name="international-barcode"
              htmlFor="internationalBarcode"
            >
              <Input
                id="internationalBarcode"
                name="international-barcode"
                size="small"
                placeholder="الباركود الدولي"
              />
            </Form.Item>
            <Form.Item
              label="التصنيف"
              rules={[{ required: true }]}
              required
              name="category"
              htmlFor="category"
            >
              <Input
                id="category"
                name="category"
                size="small"
                placeholder="الباركود الدولي"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default DrugAddBox;
