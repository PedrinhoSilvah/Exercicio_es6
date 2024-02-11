const alunos = [
    { nome: 'João', nota: 7 },

    { nome: 'Gustavo', nota: 5 },

    { nome: 'Pedro', nota: 8 },

    { nome: 'Renan', nota: 4 },

    { nome: 'Guilherme', nota: 6 }
  ];
  
 
  function filtrarAlunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
  }
  
 
  const alunosAprovados = filtrarAlunosAprovados(alunos);
  console.log(alunosAprovados);
  