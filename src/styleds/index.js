import styled from 'styled-components'
import 'antd/dist/antd.css'

export const StyleHeader = styled.nav`
    width: 100%;
    height: 50px;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 5%;
    padding-right: 5%;
    background: var(--white);
    margin-top: -1px;

    .ant-menu-horizontal {
        border: none;
        color: var(--black);
    }

    div.ant-menu-submenu-title:hover {
        color: var(--black);
        border-bottom: var(--black);
    }

    @media (max-width: 800px) {
        img {
            max-width: 120px;
        }
                
        .ant-menu-horizontal {

        }
    }
`

export const Main = styled.main`
    background: var(--white);
    color: black;
    flex: 1;
    padding-top: 60px;
    padding-right: 0;
    padding-left: 0; 
`

export const StyleFooter = styled.footer`
    font-family: 'Raleway',Helvetica,Arial,Lucida,sans-serif;
    background: var(--blueLightDark);
    padding-top: 32px;
    color: var(--white);
    text-align: center;

    .Container {
        max-width: 1440px;
        text-align: left;
        position: relative;
        width: 80%;
        margin: auto;
        display: flex;

        @media (max-width: 800px) {
            display: inline;
            text-align: center;
        }
    }

    a, a:visited {
        text-decoration: none;
    }

    .Content {
        width: 31.33%;
        margin-right: 3%;
        margin-bottom: 3%;
        color: var(--with);
        flex: 1;

        h4 {
            color: var(--blue);
        }

        p {
            font-size: 16px;
        }

        @media (max-width: 800px) {
            display: inline;
            text-align: center;
        }
    
    }

    .footer {
        background: var(--blueDark);
        padding: 15px 0px 5px 0px;
    }
`

export const ImageBanner = styled.img`
    height: 500px;
    width: 100%;

    @media (max-width: 800px) {
        height: 200px;
    }

    div {
        box-sizing: border-box;
    }
`
export const StyledMain = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${({color}) => color};
    padding-bottom: 3vh;
    padding-top: 5vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    h2 {
        color: var(--white);
        font-weight: bold;
        padding-top: 12vh;
    }

    p {
        color: var(--white);
        font-weight: bold;
    }

    iframe {
        margin-bottom: 4vh;
        margin-left: 10vw;
        width: 80vw;
        height: 80vh;
    }
`

export const ImageDiv = styled.div`
    background-image: ${({url}) => `url(${url})`};
    background-color: rgba(0, 0, 0, 0.7);
    height: 30vh;
    width: 80vw;
    align-items: center;
    justify-content: space-between;
    margin-left: 10vw;
    border-top: 4px solid orange;
    margin-bottom: 2vh;
    cursor: pointer;
    text-align: center;
`
export const ImageHalfDivLeft = styled(ImageDiv)`
    width: 39vw;
    border-top: none;
    border-right: 4px solid orange;
    margin-left: 10vw;
    text-align: right;

    @media (max-width: 800px) {
        width: 80vw;
        text-align: center;
        border-top: 4px solid orange;
        border-right: none;
    }
`
export const ImageHalfDivRight = styled(ImageDiv)`
    width: 39vw;
    border-top: none;
    border-left: 4px solid orange;
    margin-left: 2vw;
    text-align: left;

    @media (max-width: 800px) {
        width: 80vw;
        text-align: center;
        border-top: 4px solid orange;
        border-left: none;
        margin-left: 10vw;
    }
`