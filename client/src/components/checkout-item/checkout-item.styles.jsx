import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    @media screen and (max-width: 800px) {
        font-size: 18px;
    }
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 100%;
        height: 95%;
        border-radius: 2%;
    }
`;

export const TextSpanContainer = styled.span`
    width: 23%;

    @media screen and (max-width: 800px) {
        width: 22%
    }
`;

export const QuantityContainer = styled(TextSpanContainer)`
    display: flex;

    span {
        margin: 0 10px;
    }

    div {
        cursor: pointer;
    }
`;

export const RemoveButtonContainer = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;