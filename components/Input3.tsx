import { Button, Modal, Form, Input, InputNumber, Select } from 'antd';
import { useState } from 'react';
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
  const user = useStore((state: { user: any }) =>  state.user)
  const [isModalVisible, setIsModalVisible] = useState(false)

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
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
   <>
         <Form
         initialValues={{ name:user?.name, age: user?.age, gender: user?.gender  }}
         {...layout} form={form} style={{marginTop: "30px"}} name="control-hooks" onFinish={onFinish}>
    <h3 style={{marginLeft: "15px"}}>Name:  <span style={{color:"rgba(0,0,0,0.5)",marginLeft: "10px"}}>{user?.name}</span></h3>
      <Form.Item name="name" label="Edit Name" rules={[{ required: true }]}>
        <Input onChange={(e) => setName(e.target.value)} />
      </Form.Item>
      <h3 style={{marginLeft: "15px"}}>Age:  <span style={{color:"rgba(0,0,0,0.5)",marginLeft: "10px"}}>{user?.age}</span></h3>
      <Form.Item name="age" label="Edit Age" rules={[{ required: true }]}>
          <InputNumber value={age} onChange={(e) => setAge(e)}/>
        </Form.Item>
        <h3 style={{marginLeft: "15px"}}>Gender:  <span style={{color:"rgba(0,0,0,0.5)",marginLeft: "10px"}}>{user?.gender}</span></h3>
      <Form.Item name="gender" label="Edit Gender" rules={[{ required: true }]}>
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
        Save to store
        </Button>
        <Button htmlType="button" onClick={showModal}>
        View store Values
        </Button>
      </Form.Item>
    </Form>
    <Modal title="User's Details" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
    <p>Name: {user?.name}</p>
    <p>Age: {user?.age}</p>
    <p>Gender: {user?.gender}</p>
  </Modal>
   </>
  );
};

export default App;