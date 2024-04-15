import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar ts',
    descricao: 'Ver aula',
    prioridade: 'Importante',
    status: 'Pendente'
  },
  {
    titulo: 'Pagar conta de internet',
    descricao: 'Baixar fatura no Gmail',
    prioridade: 'Urgente',
    status: 'Concluída'
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer treino x',
    prioridade: 'importante',
    status: 'Concluída'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
