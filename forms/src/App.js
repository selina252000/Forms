import React from 'react';
import 'antd/dist/antd.min.css';
import {Form,Button,Checkbox,Input, Radio,Select,Row, Col} from "antd";


export const App = () => {

  const finish = (values) =>{
    console.log(values);
  }
  return (
    <>
    <Row>
      <Col span={10} offset = {7} > 
        <Form
        labelCol={{span: 8}}
        wrapperCol={{span: 14}}
        layout="horizontal"
        onFinish={finish}
        
      >
      <Form.Item label="User Name"  name ="username">
          <Input placeholder =  "enter your name"/>
        </Form.Item>
        
        <Form.Item label="Gender" name = "gender">
          <Radio.Group>
            <Radio value="male"> Male </Radio>
            <Radio value="female"> Female </Radio>
          </Radio.Group>
        </Form.Item>
        
        <Form.Item label="Select" name = "select">
          <Select>
            <Select.Option value="demo1">audi</Select.Option>
            <Select.Option value="demo2">bmw</Select.Option>
          </Select>
        </Form.Item>
        
        <Form.Item label="Chekbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>
        <Form.Item label="Button">
          <Button   block type ="primary"   htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
      </Col>
      </Row>

    </>
  )
}

export default  App;