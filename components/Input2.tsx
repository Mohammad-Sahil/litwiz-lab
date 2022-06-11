import { Button, Form, Input, InputNumber, Select } from 'antd';
import { useState } from 'react';
import Link from '../node_modules/next/link';
import useStore from '../zustand/store'
import Router from 'next/router';

const { Option } = Select;

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 2, span: 8 },
};

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [name, setName] = useState('')
  const [age, setAge] = useState(null)
  const [gender, setGender] = useState(null)

  const userData = useStore((state: { userData: any }) =>  state.userData)
  const addPerson = () => {

  }
  const onFinish = (values: any) => {
    userData({
        name: name,
        age:  age,
        gender: gender
    })
    console.log(values);
    Router.push('/secondscreen')
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input onChange={(e) => setName(e.target.value)} />
      </Form.Item>
      <Form.Item name="age" label="Age" rules={[{ required: true }]}>
          <InputNumber value={age} onChange={(e) => setAge(e)}/>
        </Form.Item>
      <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select
        value={gender} onChange={(e) => setGender(e)}
          placeholder="Select a option and change input text above"
        //   onChange={}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout} style={{marginRight: "20px !important"}}>
        <Button onClick={addPerson} type="primary" htmlType="submit" style={{marginRight: "20px !important"}}>
          Continue
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;