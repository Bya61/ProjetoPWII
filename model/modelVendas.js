	//IMPORTAÇÃO DO PACOTE SEQUELIZE
	const Sequelize = require('sequelize');

	//IMPORTAÇÃO DO ARQUIVO DE CONEXÃO COM O BANCO DE DADOS
	const connection = require('../atabase/database')

	/*
	PARÂMETROS DO MÉTODO DEFINE
	1 - NOME DA TABELA - STRING
	2 - OBJETO JSON:
			NOME DO CAMPO DA TABELA
			TIPO DE DADO DO CAMPO DA TABELA
			REGRAS DO CAMPO SA TABELA (NULL, NOT NULL, DEFAULT...ETC)
	*/
	const modelVenda = connection.define(
		'tb_vendas',
		{
		    cod_venda:{
		      type: Sequelize.INTEGER,
		      primaryKey: true,
		      autoIncrement: true
		    },
		    data_venda:{
		      type: Sequelize.DATE,
		      notNull: true
		    }
		}
	);
29
30	// modelVenda.sync({force:true});
31
	module.exports = modelVenda;