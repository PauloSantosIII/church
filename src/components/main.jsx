import React from 'react'
import {Link} from 'react-router-dom'
import {StyledMain, ImageDiv, ImageHalfDivLeft, ImageHalfDivRight} from '../styleds'
import {urlMain1, urlMain2, urlMain3, urlMain4, urlMain5} from './links'

const Main = () => {
    return (
        <StyledMain color='lightgrey'>
            <ImageDiv as={Link} to='/igrejaonline' url={urlMain1} >
                <h2>PROGRAMAÇÃO ONLINE</h2>
                <p>Fique por dentro dos horários dos cultos, lives e outras programações.</p>
            </ImageDiv>

            <ImageHalfDivLeft as={Link} to='/administracao/dizimos-e-ofertas-on-line' url={urlMain2} >
                <h2>DÍZIMOS E OFERTAS</h2>
            </ImageHalfDivLeft>

            <ImageHalfDivRight as={Link} to='/cultos' url={urlMain3} >
                <h2>CULTOS E ESTUDOS</h2>
            </ImageHalfDivRight>

            <ImageHalfDivLeft as={Link} to='/horario-dos-cultos/' url={urlMain4} >
                <h2>HORÁRIOS DOS CULTOS E ENCONTROS</h2>
            </ImageHalfDivLeft>

            <ImageHalfDivRight as={Link} to='/noticias' url={urlMain5} >
                <h2>ÚLTIMAS NOTÍCIAS</h2>
            </ImageHalfDivRight>
        </StyledMain>
    )
}

export default Main