import styled  from 'styled-components';


export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    min-width: 320px;
    
    
    height: 2.5rem;

    display:flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 480px) {
        height: 4.5rem;
    }
`

export const Container = styled.div`
    width: 80%;
    min-width:320px;
    max-width:1200px;;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    
    /* Media Query para mobile */
    @media (max-width: 480px) {
        flex-wrap:wrap;
        justify-content: center;
    }
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`;

export const BuscarInputContainer = styled.div`
    width: 275px;
    height: 2rem;
    background: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;

    display:flex;
`

export const Menu = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
`

export const MenuRight = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #FFFFFF;
`

export const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    color: #FFFFFF;
`