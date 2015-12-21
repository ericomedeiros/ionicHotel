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
      profissional:"",
      sogros:"",
      pessoal:{
        this:"",
        other:""
      }
    }
  };

  return {
    all_chats: function() {
      return chats;
    },
    all_data: function() {
      return data;
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
    }
  };
});
