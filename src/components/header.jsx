import React, {useState} from 'react'
import {Link, useLocation, useHistory} from 'react-router-dom'
import {StyleHeader} from '../styleds'
import {urlLogo} from './links'
import {Menu} from 'antd'
import {DownOutlined} from '@ant-design/icons'

const {SubMenu} = Menu

const Header = () => {
    const location = useLocation()
    const history = useHistory()
    const [current, setCurrent] = useState([location.pathname])

    const handleClick = e => {
        console.log('click', e)
        setCurrent(e.key)
        history.push(`${e.key}`)
        console.log(current)
    }


    return (
        <StyleHeader>
                <Link to='/'>
                    <img alt='logoPIB' src={urlLogo} />
                </Link>
                <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal' >
                    <SubMenu icon={<DownOutlined />} title='MultiSites'>
                        <Menu.Item key='/campocomprido'>Campo Comprido</Menu.Item>
                    </SubMenu>

                    <SubMenu icon={<DownOutlined />} title='A Igreja'>
                        <Menu.Item key='/106-anos-de-historia'>Nossa História</Menu.Item>
                        <Menu.Item key='/em-que-cremos'>Em que cremos</Menu.Item>
                        <Menu.Item key='/lideranca'>Liderança</Menu.Item>
                        <Menu.Item key='/missao-visao-e-valores'>Missão, Valores e Visão</Menu.Item>
                        <Menu.Item key='/centro-de-retiros'>Centro de Retiros</Menu.Item>
                    </SubMenu>

                    <SubMenu icon={<DownOutlined />} title='Para Você'>
                        <Menu.Item key='/campocumprido'>Campo Comprido</Menu.Item>
                    </SubMenu>

                    <SubMenu icon={<DownOutlined />} title='Ministério'>
                        <Menu.Item key='/campocumprido'>Campo Comprido</Menu.Item>
                    </SubMenu>

                    <SubMenu icon={<DownOutlined />} title='Midias'>
                        <Menu.Item key='/campocumprido'>Campo Comprido</Menu.Item>
                    </SubMenu>
                </Menu>
        </StyleHeader>
    )
}

export default Header