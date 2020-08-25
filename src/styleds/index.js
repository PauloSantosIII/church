import styled from 'styled-components'

export const StyleHeader = styled.nav`
    width: 100%;
    height: 100px;
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
    -webkit-transition: margin-top 2s ease-in-out;
    transition: margin-top 2s ease-in-out;
`

export const Main = styled.main`
    background: var(--white);
    color: black;
    flex: 1;
    padding-top: 110px;
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
    }

    a {
        text-decoration: none;
    }

    .Contact {
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
    
    }

    .Links {
        width: 31.33%;
        margin-right: 3%;
        margin-bottom: 3%;
        color: var(--with);
        flex: 1;

        h4 {
            color: var(--blue);
        }
    }

    .Others {
        width: 31.33%;
        margin-right: 3%;
        margin-bottom: 3%;
        color: var(--with);
        flex: 1;

        h4 {
            color: var(--blue);
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
`