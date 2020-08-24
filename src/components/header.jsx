import React from 'react'
import {Link} from 'react-router-dom'
import {StyleHeader} from '../styleds'
import {urlLogo} from './links'


const Header = () => {
    return (
        <StyleHeader>
            <Link to='/'>
                <img alt='logoPIB' src={urlLogo} />
            </Link>
        </StyleHeader>
    )
}

export default Header