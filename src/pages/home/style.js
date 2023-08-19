import styled from 'styled-components';

export const Body = styled.body`

    background-color: #FFFEF6;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    display: flex;
`

export const Form = styled.div`

    background-color: #4E77E9;
    height: 30rem;
    min-width: 20rem;
    max-width: 90%;
    padding: 1.5em;
    border-radius: 15px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const ConteinnerForm = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    min-height: 10rem;

`

export const Input = styled.input`

    height: 2rem;
    font-size: 1.5em;
    margin-bottom: 1rem;
    border-radius: 10px;
    border: none;
    padding: 5px;
`

export const Label = styled.label`
    font-size: 1.2em;
    margin-bottom: 0.3rem;
    color: #FFFEF6;
`

export const ItemConteinner = styled.div`
    background-color: #FFFEF6;
    width: 20rem;
    height: 10rem;
    overflow-y: scroll;
    padding: 0.5rem;
    font-size: 1.2em;
    border-radius: 15px;

`

export const Footer = styled.div`

    background-color: #4f5cee28;
    position: fixed;
    width: 100vw;
    display: flex;
    justify-content: center;
    top: 97%;
    font-size: 1.3em;
    padding: 2px;
`