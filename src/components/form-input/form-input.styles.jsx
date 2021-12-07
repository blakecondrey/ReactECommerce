import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'white';

const shrinkLabelStyles = css`
    top: -20px;
    font-size: 14px;
    color: ${mainColor};
`;

export const GroupContainer = styled.div`
    position: relative;
    margin: 45px 0;

    input[type='password'] {
        letter-spacing: 0.3em;
    }
`;

export const FormInputContainer = styled.input`
    background: none;
    background-color: white;
    color: ${subColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 8px 4px 8px 4px;
    margin: 25px 0;

    &:focus {
        outline: none;
    }

    &:focus ~ label {
        ${shrinkLabelStyles}
    }
`;

export const FormInputLabel = styled.label`
    color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 500ms ease all;

    &.shrink {
        ${shrinkLabelStyles};
    }
`;