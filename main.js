class Principal {}
Principal.main = (args) => {
  let io = new IO();
  let aluno = new Veiculo();
  let dayTime = new DayTime();
  io.setTexto('Programa de Cadastro');
  io.exibirTexto();
  aluno.setMarca(io.digitarTexto('Digite a Marca: '));
  aluno.setModelo(io.digitarTexto('Digite o Modelo: '));
  aluno.setQuantidade_de_Rodas(Integer.parseInt(io.digitarTexto('Digite a quantidade de rodas: ')));
  aluno.setFlex(Boolean.parseBoolean(io.digitarTexto('Digite true para flex e false para não flex: ')));
  aluno.setMotor(Float.parseFloat(io.digitarTexto('Digite a motorizaçao: ')));
  io.setTexto('Cadastro Realizado\n\n' + 'Marca: ' + aluno.getMarca() + '\n' + 'Modelo: ' + aluno.getModelo() + '\n' + 'Idade: ' + aluno.getModelo() + '\n' + 'Flex: ' + aluno.isFlex() + '\n\n' + 'Motorizaçao: ' + aluno.getMotor() + '\n\n' + 'Data: ' + dayTime.getData() + '\n' + 'Hora: ' + dayTime.getHora());
  io.exibirTexto();
};