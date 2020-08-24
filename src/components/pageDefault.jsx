import React from 'react'
import Header from './header'
import Footer from './footer'
import {Main} from '../styleds'

const PageDefault = ({children}) => {
    return (
        <>
            <Header />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    )
}

export default PageDefault