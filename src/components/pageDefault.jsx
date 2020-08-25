import React from 'react'
import {Header, Footer} from '../components'
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