// o método OpenDatabase precisa de 4 parametros; o nome do banco de dados, a versão, a descrição e o tamanho estimado (em bytes)
var db = openDatabase("db_Focus", "1.0", "Teste Web SQL Database", 200000);
 
// deverá mostrar "Database"
console.log(db);
 
// de qualquer forma, sempre teste que o objeto foi instanciado direito antes de usá-lo
if(!db){
    alert('Erro 404!');
}




db.transaction(function(transaction){
    transaction.executeSql("DROP TABLE tb_atividades");
    // criar a tabela
    transaction.executeSql('CREATE TABLE tb_atividades (id REAL UNIQUE, descricao , tema , data_inicio , data_fim ,qdt_questoes, concluido, data_conclusao, criador,te)');
    // num caso de verdade, iríamos incluir callbacks para verificar que deu tudo certo mas para não estender demais o código vou pular esta parte...

    // inserir dados
    // obs - repare que usamos um "statement preparado", colocamos interrogações no lugar das variáveis e as listamos em um array no segundo parametro, fazendo <em>bind</em> delas
    transaction.executeSql("INSERT INTO tb_atividades (id, descricao, tema, data_inicio, data_fim,qdt_questoes, concluido, data_conclusao, criador) VALUES (1, 'Atividade das Divisões'      , 'padrão','09/02/2021', '09/02/2021','10', 'true' , '09/02/2021', 'false' )");
    transaction.executeSql("INSERT INTO tb_atividades (id, descricao, tema, data_inicio, data_fim,qdt_questoes, concluido, data_conclusao, criador) VALUES (2, 'Atividade das Multiplicações', 'padrão','28/02/2021', '28/02/2021','10', 'true' , '28/02/2021', 'false' )");
    transaction.executeSql("INSERT INTO tb_atividades (id, descricao, tema, data_inicio, data_fim,qdt_questoes, concluido, data_conclusao, criador) VALUES (3, 'Atividade das Subtrações'    , 'padrão','01/03/2021', '01/03/2021','10', 'true' , '01/03/2021', 'false' )");
    transaction.executeSql("INSERT INTO tb_atividades (id, descricao, tema, data_inicio, data_fim,qdt_questoes, concluido, data_conclusao, criador) VALUES (4, 'Atividade Adicional'         , 'padrão','12/03/2021', '20/03/2021','10', 'false' , '01/03/2021', 'true' )");
    transaction.executeSql("INSERT INTO tb_atividades (id, descricao, tema, data_inicio, data_fim,qdt_questoes, concluido, data_conclusao, criador,te) VALUES (5, 'Atividade Adicional'      , 'padrão','12/03/2021', '20/03/2021','3', 'false' , '01/03/2021', 'false','(1,11,1,2)(20,12,8,12)(999,13,1,999)(9,14,3,3)(5,11,5,10)(10,14,2,5)(70,12,30,40)(8,13,0,0)(30,11,1,31)(2,11,0,2)' )");
});



