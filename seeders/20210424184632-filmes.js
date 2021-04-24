'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Filme',
    [{
        titulo: 'Mulher Maravilha, 1984',
        tituloOriginal: 'Wonder Woman 1984',
        lacamento: '2020-12-24',
        paisOrigem: 'EUA',
        duracao: '02:31:00',
        sinopse: 'Mulher-Maravilha 1984 acompanha Diana Prince/Mulher-Maravilha (Gal Gadot) em 1984, durante a Guerra Fria, entrando em conflito com dois grande inimigos - o empresário de mídia Maxwell Lord (Pedro Pascal) e a amiga que virou inimiga Barbara Minerva/Cheetah (Kristen Wiig) - enquanto se reúne com seu interesse amoroso Steve Trevor (Chris Pine).',
        rate: 0,
        exibicaoInicio: '2020-12-24',
        exibicaoInicio: '2022-01-07',
        idioma_id: 2,
        genero_id: 2,
        poster_url: './img/posters/mulher-maravilha-1984-poster-desktop.jpg',
        trailer_url: 'XqcsS1azJ_g',
        classificacao: 14,
      },
      {
        titulo: 'Um tio quase perfeito 2',
        tituloOriginal: 'Um tio quase perfeito 2',
        lacamento: '2021-01-07',
        paisOrigem: 'Brasil',
        duracao: '01:42:00',
        sinopse: 'Em Um Tio Quase Perfeito 2, longe da vida de trambiques e vivendo em harmonia com sua família, Tony (Marcus Majella) reina soberano no coração de seus sobrinhos. Porém, quando sua irmã começa a namorar Beto (Danton Mello), um homem aparentemente exemplar, ele corre o risco de perder a atenção dos pequenos. Determinado a acabar com a "concorrência", Tony vai fazer de tudo para que Beto não entre oficialmente para a família.',
        rate: 0,
        exibicaoInicio: '2021-01-07',
        exibicaoInicio: '2022-01-07',
        idioma_id: 1,
        genero_id: 5,
        poster_url: './img/posters/um-tio-quase-perfeito-2-poster-desktop.jpg',
        trailer_url: 'h_C6gFElZ9w',
        classificacao: 0,
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Filme', null, {}),
};