'use strict'

const Route = use('Route')

Route.post('sessions', 'SessionController.store').validator('Session')
Route.get('sessions/:email', 'UserController.findByEmail')

Route.group(() => {
  Route.resource('users', 'UserController')
    .apiOnly()
    .validator(
      new Map([[['users.store'], ['Veiculo']], [['users.update'], ['User']]])
    )
  Route.put('change_password', 'UserController.changePassword')

  Route.post('parametrizacao', 'ParametrizacaoController.store').validator([
    'Parametrizacao'
  ])
  Route.put('parametrizacao/:id', 'ParametrizacaoController.update').validator([
    'Parametrizacao'
  ])
  Route.get('parametrizacao/:id', 'ParametrizacaoController.show')

  Route.resource('veiculos', 'VeiculoController')
    .apiOnly()
    .validator(
      new Map([
        [['veiculos.store'], ['Veiculo']],
        [['veiculos.update'], ['Veiculo']]
      ])
    )
  Route.get('veiculos/:id/bloqueios', 'BloqueioController.findByVeiculo')
  Route.get(
    'veiculos/:id/viagens/:status',
    'ViagemController.findByVeiculoStatus'
  )
  Route.get('veiculos/:id/viagens', 'ViagemController.findByVeiculoData')
  Route.get(
    'veiculos/:id/movimentacoes',
    'MovimentacaoController.findRetornoByVeiculo'
  )
  Route.get('localidades/:id/viagens', 'ViagemController.findByLocalidadeData')

  Route.resource('bloqueios', 'BloqueioController')
    .apiOnly()
    .validator(
      new Map([
        [['bloqueios.store'], ['Bloqueio']],
        [['bloqueios.update'], ['Bloqueio']]
      ])
    )

  Route.resource('especialidades', 'EspecialidadeController')
    .apiOnly()
    .validator(
      new Map([
        [['especialidades.store'], ['Especialidade']],
        [['especialidades.update'], ['Especialidade']]
      ])
    )
  Route.get(
    'especialidades/:especialidade_id/cids',
    'CidController.findByEspecialidade'
  )

  Route.resource('procedimentos', 'ProcedimentoController')
    .apiOnly()
    .validator(
      new Map([
        [['procedimentos.store'], ['Procedimento']],
        [['procedimentos.update'], ['Procedimento']]
      ])
    )

  Route.resource('localidades', 'LocalidadeController')
    .apiOnly()
    .validator(
      new Map([
        [['localidades.store'], ['Localidade']],
        [['localidades.update'], ['Localidade']]
      ])
    )
  Route.get(
    'localidades/:id/locais',
    'LocalDeConsultaController.findByLocalidade'
  )

  Route.resource('cids', 'CidController')
    .apiOnly()
    .validator(
      new Map([
        [['cids.store'], ['Cid']], // Eslint
        [['cids.update'], ['Cid']]
      ])
    )

  Route.resource('locaisDeConsulta', 'LocalDeConsultaController')
    .apiOnly()
    .validator(
      new Map([
        [['locaisDeConsulta.store'], ['LocalDeConsulta']], // Eslint
        [['locaisDeConsulta.update'], ['LocalDeConsulta']]
      ])
    )

  Route.resource('pacientes', 'PacienteController')
    .apiOnly()
    .validator(
      new Map([
        [['pacientes.store'], ['Paciente']], // Eslint
        [['pacientes.update'], ['Paciente']]
      ])
    )
  Route.get(
    'pacientes/:id/agendamentos',
    'AgendamentoController.findByPaciente'
  )

  Route.resource('motoristas', 'MotoristaController')
    .apiOnly()
    .validator(
      new Map([
        [['motoristas.store'], ['Motorista']], // Eslint
        [['motoristas.update'], ['Motorista']]
      ])
    )
  Route.get('motoristas/:id/viagens', 'ViagemController.findByMotoristaData')

  Route.resource('viagens', 'ViagemController')
    .apiOnly()
    .validator(
      new Map([
        [['viagens.store'], ['Viagem']],
        [['viagens.update'], ['Viagem']]
      ])
    )

  Route.get('viagens/:id/agendamentos', 'AgendamentoController.findByViagem')
  Route.get('viagens/:id/periodo', 'ViagemController.findByPeriodo')
  Route.get(
    'viagens/:id/veiculo-viagens',
    'ViagemController.findVeiculoViagens'
  )

  Route.resource('agendamentos', 'AgendamentoController')
    .apiOnly()
    .validator(
      new Map([
        [['agendamentos.store'], ['Agendamento']],
        [['agendamentos.update'], ['Agendamento']]
      ])
    )
  Route.get(
    'procedimentos/:id/agendamentos',
    'AgendamentoController.findByProcedimento'
  )
  Route.get(
    'especialidades/:id/agendamentos',
    'AgendamentoController.findByEspecialidade'
  )
  Route.get('cids/:id/agendamentos', 'AgendamentoController.findByCid')

  Route.resource('movimentacoes', 'MovimentacaoController')
    .apiOnly()
    .validator(
      new Map([
        [['movimentacoes.store'], ['Movimentacao']],
        [['movimentacoes.update'], ['Movimentacao']]
      ])
    )
}).middleware(['auth', 'updateStatus'])
