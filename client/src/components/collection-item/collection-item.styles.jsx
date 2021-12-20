import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover {
        .image {
          opacity: 0.8;
          transform: scale(1.035);
        }
    
        button {
            opacity: 0.85;
            display: flex;
        }
    }

    @media screen and (max-width: 800px) {
        width: 40vw;

        &:hover {
            .image {
                opacity: unset;
                transform: unset;
            }

            button {
                opacity: unset;
            }
        }
    }
`;

export const AddButton = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;

    @media screen and (max-width: 800px) {
        display: block;
        opacity: 0.9;
        min-width: unset;
        padding: 0 10px;
    }
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 95%;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-size: cover;
    background-position: center;
    border-radius: 2%;
    margin-bottom: 5px;
    transition: all 1s;
`;

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const NameSpan = styled.span`
    width: 90%;
    margin-bottom: 25px;
`;

export const PriceSpan = styled.span`
    width: 10%;
    text-align: right;
`;