angular.module('starter.services', [])

.factory('Data', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  var data = {
    id: 0,
    name: 'Ben Sparrow',
    face: 'img/ben.png',
    cpf: "",
    data_nasci:"",
    sexo:0,
    naturalidade:"",
    nro_carteira_ident:"",
    uf_expedi:"",
    nome_mae:"",
    nome_pai:"",
    data_obito:"",
    orgao_expeditor:"",
    data_casamento:"",
    nome_conjunge:"",
    nro_carteira_trab:"",
    serie_carteira_trab:"",
    data_expedicao:"",
    titulo_eleitoral:{
      nro:"",
      zona:"",
      secao:""
    },
    certi_reservista:"",
    passaporte:{
      nro:"",
      data_expedicao:"",
      data_validade:"",
    },
    carteira_motorista:{
      nro:"",
      categoria:0,
      data_validade:""
    },
    residenciais:{
      casa_praia:"",
      casa_serra:"",
      trabalho:{
        atual:"",
        ant3:"",
        ant2:"",
        ant1:""
      },
      imovel:{
        recente:"",
        ultimo:""
      },
      ende_pais:"",
      ende_sogros:"",
      escola:"",
    },
    telefones:{
      fixo:"",
      celular:"",
      profissional:"",
      sogros:"",
      pessoal:{
        this:"",
        other:""
      }
    }
  };

  var business = [
  {
    id: 1,
    nome: "Hotel Bom",
    descricao: "Otimo hotel com blablablabla..."
  },
  {
    id: 2,
    nome: "Pousada Algo",
    descricao: "Não é a melhor mais pelos menos é algo"
  },
  {
    id: 3,
    nome: "Acampamento Corre",
    descricao: "É corre devido ao sobrenome"
  },
  {
    id: 4,
    nome: "Shop coisas",
    descricao: "Venha e compre as coisas"
  },
  {
    id: 5,
    nome: "OI",
    descricao: "Olá..." 
  },
  {
    id: 6,
    nome: "Vivo",
    descricao: "Morto."
  }];

  var pedidos = [
  {
    id: 0,
    img: "img/adam.jpg",
    nome: "Adam",
    motivo: "Qual é teu numero?",
    requestions:[
      "telefones-fixo",
      "telefones-celular",
      "telefones-profissional"
      ]
  },
  {
    id: 1,
    img: "img/ben.png",
    nome: "Ben",
    motivo: "Pode me passar algumas?",
    requestions:[
      "telefones-fixo"
      ]
  },
  {
    id: 2,
    img: "img/max.png",
    nome: "Max",
    motivo: "Qual é teu numero?",
    requestions:[
      "telefones-celular"
      ]
  },
  {
    id: 3,
    img: "img/mike.png",
    nome: "Mike",
    motivo: "Quandotu nasceu mesmo?",
    requestions:[
      "data_nasci"
      ]
  },
  {
    id: 4,
    img: "img/perry.png",
    nome: "Perry",
    motivo: "Nome completo da sua mãe?",
    requestions:[
      "nome_mae"
      ]
  }
  ];

  return {
    all_chats: function() {
      return chats;
    },
    all_data: function() {
      return data;
    },
    all_busi: function() {
      return business;
    },
    all_pedidos: function() {
      return pedidos;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    },
    pedido: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (pedidos[i].id === parseInt(chatId)) {
          return pedidos[i];
        }
      }
      return null;
    }
  };
});
