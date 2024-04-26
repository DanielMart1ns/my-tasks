import styled from 'styled-components'

type Props = {
  mostrarFiltros: boolean
}

export const Aside = styled.aside<Props>`
  padding: 16px;
  background-color: #eee;
  height: 100vh;

  @media (max-width: 768px) {
    height: ${(props) => (props.mostrarFiltros ? '320px' : '60px')};
  }
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
