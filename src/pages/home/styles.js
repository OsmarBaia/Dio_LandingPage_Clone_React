import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    min-width: 240px;
    max-width: 1200px;
    margin: 120px auto 0;
    padding: 0 2rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;


    /* Media Query para tablet */
    @media (max-width: 768px) {

        flex-direction: column-reverse;
        gap:1rem;
        margin-top: 80px;

        & > div {
            max-width: 100%;
        }
    }

    /* Media Query para mobile */
    @media (max-width: 480px) {
        margin-top: 60px;
    }

`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    
    width:auto;
    max-width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleHighlight = styled.span`
    color: #E4105D;;
`

export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    width:auto;
    min-width:240px;
    max-width: 420px;

    margin-bottom: 20px;

    color: #FFFFFF;
`

export const BannerImg = styled.img`
    width:100%;
    min-width:260px;
    max-width: 563px;
`