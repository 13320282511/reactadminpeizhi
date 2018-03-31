import React from 'react';
import {connect} from 'dva';
import {Link} from 'dva/router';
import {Layout, Menu, Icon, Breadcrumb} from 'antd';

const {Footer} = Layout;
const {Header, Sider, Content} = Layout;
import {childRouter} from '../../common/childRouter';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const menus = [
  ['home', '/home', '首页', 'home'],
  ['order', '/order', '订单', 'solution'],
  ['storage', '/storage', '入库', 'upload'],
  ['resource', '/resource', '物资', 'pay-circle-o'],
  ['settlement', '/settlement', '结算', 'pushpin-o'],
  ['bills', '/bills', '对账', 'copy'],
  ['manage', '/manage', '管理', 'setting'],
];

const manageChildMenus = [
  ['customer', '/customer', '客户', 'user'],
  ['product', '/product', '商品', 'inbox'],
  ['supplier', '/supplier', '供应商', 'team'],
];
const routeKey = sessionStorage.getItem('routeKey') || 'home';

class LayOut extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout style={{height: '100%'}}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo"/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[routeKey]}>
            {
              menus.map(([key, path, text, icon], index) => {
                  if (key == 'manage') {
                    return (
                      <SubMenu key={key} title={<span><Icon type="setting"/><span>{text}</span></span>}>
                        {
                          manageChildMenus.map(([key, path, text, icon], index) => (
                            <MenuItem key={key}>
                              <Link to={path}>{<span><Icon
                                type={icon}/><span>{text}</span></span>}</Link>
                            </MenuItem>
                          ))
                        }
                      </SubMenu>
                    )
                  } else {
                    return (
                      <MenuItem key={key}>
                        <Link to={path}>{<span><Icon type={icon}/><span>{text}</span></span>}</Link>
                      </MenuItem>
                    )
                  }
                }
              )
            }
          </Menu>
        </Sider>
        <Layout>
          <Header style={{background: '#fff', padding: 0}}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <span>
              用户登录信息
            </span>
          </Header>
          <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
            <Breadcrumb style={{margin: '16px 0'}}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{padding: 24, background: '#fff', minHeight: 360}}>
              {childRouter()}
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>
            慧耀科技©2016 Created by
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default connect()(LayOut);
