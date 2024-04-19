import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover } from '../../store/reducers/Tarefa'
import * as S from './style'
import * as enums from '../../utils/enums/Tarefa'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({ titulo, prioridade, status, descricao, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>

      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>

      <S.Descricao value={descricao} />

      <S.Acoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.Acoes>
    </S.Card>
  )
}

export default Tarefa
