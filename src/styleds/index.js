import styled from 'styled-components'

export const StyleHeader = styled.nav`
    width: 100%;
    height: 94px;
    z-index: 100;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 5%;
    padding-right: 5%;

    background: var(--white);
`

export const Main = styled.main`
    background: var(--white);
    color: black;
    flex: 1;
    padding-top: 94px;
    padding-right: 5%;
    padding-left: 5%; 
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
