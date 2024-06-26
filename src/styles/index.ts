import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`
export default EstiloGlobal

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;

  @media (max-width: 768px) {
    display: block;
    grid-template-columns: none;
  }
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  padding: 8px;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  border-color: #666666;
`
export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  margin-right: 8px;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
