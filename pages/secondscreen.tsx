import useStore from '../zustand/store'
import { Checkbox } from 'antd';

import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import { Breadcrumb, Layout, Menu } from 'antd';
  import React, { useEffect, useState } from 'react';
  import "antd/dist/antd.css"
import Link from '../node_modules/next/link';
import Input3 from '../components/Input3';

  const { Header, Content, Footer, Sider } = Layout;
  
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  
  const items = [
    getItem('First Screen', '/', <PieChartOutlined />,''),
    getItem('Second Screen', '/secondscreen', <DesktopOutlined />,''),
  ];
  
  const Secondscreen = () => {
  const user = useStore(state =>  state.user)
  const [ toggleDarkModee, setToggleDarkMode] = useState(null)
  const toggleDarkMode = useStore((state: { toggleDarkMode: any; }) =>  state.toggleDarkMode)
  const dark = useStore(state =>  state.dark)
    const [collapsed, setCollapsed] = useState(false);
    useEffect(() => {
      if(dark){
        const boxes = document.querySelectorAll('.site-layout-background, .ant-layout,.ant-layout-footer,.ant-input, .ant-input-number-input,.ant-select-selector,.ant-btn')
        .forEach(x=>x.classList.add('darkModeBackground'));
      }else{
        const boxes = document.querySelectorAll('.site-layout-background, .ant-layout,.ant-layout-footer,.ant-input, .ant-input-number-input,.ant-select-selector,.ant-btn')
        .forEach(x=>x.classList.remove('darkModeBackground'));
      }
    },[dark])
    const darkMode = () => {
      toggleDarkMode(toggleDarkModee)
    }
    console.log('now mode is >>>>  ', dark)
    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo" />
          <Link href='/'><a><Menu theme="dark" defaultSelectedKeys={['/secondscreen']} mode="inline" items={items} /></a></Link>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: '0px 20px',
              fontWeight:"bold",
              fontSize: '20px',
              color:  'rgba(0, 0, 0, 0.70)'
            }}
          >LitWiz Labs - React Js Assessment
           <Checkbox onClick={darkMode} className='darkModeIcon' onChange={(e) => setToggleDarkMode(e.target.checked)}>Dark Mode</Checkbox></Header>
          <Content
            style={{
              margin: '20px 16px',
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <h1>You have entered details:  </h1>
              <Input3/>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            LitWiz Labs Assessment ©2022 Created by Mohammad Sahil
          </Footer>
        </Layout>
      </Layout>  
    );
  };
  
  export default Secondscreen;