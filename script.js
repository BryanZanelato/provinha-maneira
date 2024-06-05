function adicionarAluno() {

    var nome = document.getElementById('nome').value;
    var matricula = document.getElementById('matricula').value;
    var PrimeiraNota = parseFloat(document.getElementById('nota1').value);
    var SegundaNota = parseFloat(document.getElementById('nota2').value);


    if (PrimeiraNota > 10 || SegundaNota > 10) {
        alert('As notas devem ser no máximo 10.');
        return;
    }

    
    var media = (PrimeiraNota + SegundaNota) / 2;

    
    var status = media >= 7 ? 'Aprovado' : 'Reprovado';

    var tabela = document.getElementById('tabelaAlunos').getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow();

    var celulaNome = novaLinha.insertCell(0);
    var celulaMatricula = novaLinha.insertCell(1);
    var celulaPrimeiraNota = novaLinha.insertCell(2);
    var celulaSegundaNota = novaLinha.insertCell(3);
    var celulaMedia = novaLinha.insertCell(4);
    var celulastatus = novaLinha.insertCell(5);

    celulaNome.innerHTML = nome;
    celulaMatricula.innerHTML = matricula;
    celulaPrimeiraNota.innerHTML = nota1.toFixed(2);
    celulaSegundaNota.innerHTML = nota2.toFixed(2);
    celulaMedia.innerHTML = media.toFixed(2);
    celulastatus.innerHTML = status;

    document.getElementById('notasForm').reset();
}