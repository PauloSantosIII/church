import React from 'react'
import {Link} from 'react-router-dom'
import {StyleFooter} from '../styleds'
import {urlLogoFooter, urlMapa, urlAppLink} from './links'


const Footer = () => {
    return (
    <StyleFooter>
        <div className='Container'>
            <div className='Content'>
                <h4>Contato</h4>
                <p>Primeira Igreja Batista de Curitiba <br />
                Rua Bento Viana, 1200. Batel <br />
                Cep: 80240-110 - Curitiba-PR <br />
                <a href={urlMapa}>Ver Mapa</a> <br />
                Tel: (41) 3091-4347</p>
            </div>
            <div className='Content'>
                <h4>App e Redes Sociais</h4>
                <img alt='AppLink' src={urlAppLink} />
            </div>
            <div className='Content'>
                <h4>Linha da Vida | Espaço Acolher</h4>
                <p>LINHA DA VIDA: (41) 99202-6601 <br />
                de segunda a sexta das 21h às 9h <br />
                e fim de semana e feriados 24h</p>
            </div>
        </div>
        <div className='footer'>
            <Link to='/'>
                <img alt='logoPIBFooter' src={urlLogoFooter} />
            </Link>
        </div>
    </StyleFooter>
    )
}

export default Footer