	/*IMPORTA O PACOTE DO EXPRESS PARA O SCRIPT index.js*/
	const express = require('express');

	const modelVenda = require('../model/modelVendas');

	/*GERENCIADOR DE ROTAS DO EXPRESS*/
	const router = express.Router();

	/** ROTAS DE CRUD DE VENDA **/
	//ROTA DE CADASTRO DE VENDA
	//NOME(P1, P2, P3, P4){}
	router.post('/cadastrarVenda', (req, res)=>{
	    res.send('ROTA DE CADASTRO DE VENDA!');
	    
	});

	//ROTA DE LEITURA DE VENDA
	router.get('/listarVenda', (req, res)=>{
	    res.send('ROTA DE LISTAGEM DE VENDA!');
	});

	//ROTA DE ALTERAÇÃO DE VENDA
	router.put('/alterarVenda', (req, res)=>{
	    res.send('ROTA DE ALTERAÇÃO DE VENDA!');
	});

	//ROTA DE EXCLUSÃO DE VENDA
	router.delete('/excluirVenda', (req, res)=>{
	    res.send('RORA DE EXCLUSÃO DE VENDA!');
	});

	module.exports = router;		
