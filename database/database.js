	//IMPORTAÇÃO DO PACOTE SEQUELIZE
	const Sequelize = require('sequelize');

	/* CRIA CONEXÃO COMO BANCO DE DADOS */
	/*
	PARÂMETROS DE SEQUELIZE
	1 - NOME DO BANCO - STRING
	2 - USUÁRIO DO BANCO - STRING
	3 - SENHA DO BANCO - STRING
	4 - JSON:
		4.1 - O LOCAL ONDE O BANCO ESTÁ EXECULTANDO (host)
		4.2 - TIPO DO BANCO (dialect)
		4.3 - DEFINE O FUSO HORÁRIO LOCAL
	*/
	const connection = new Sequelize(
			'bd_eletronicos_api',
			'root',
			'',
			{
				host:'localhost',
				dialect:'mysql',
				timezone: '-03:00'
			}				
		);

	module.exports = connection;
