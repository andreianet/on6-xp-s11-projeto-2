//Nomes dos métodos para implementação:
const models = require("../models/maravilhosas-models");
const helper = require("../helpers/helper");

//getMaravilhosas
const selectAllData = models.selectAllData()

const getMaravilhosas = (request, response) => { 
    const {error, dado} = models.selectAllData();
    if (error === null) {
        response.status(200).json(dado);
    }else{
        response.status(400).json({message: error.message});
    }   
    
}

//getMaravilhosaById
const getMaravilhosaById = (request, response) => {
  const id = request.params.id;
  const encontrarId = models.selectDataById(id);
  if (encontrarId) {
    response.status(200).send(encontrarId);
  } else {
    response.status(400).send("ID não encontrado!");
  }
};

//addMaravilhosa
const addMaravilhosa = (request, response) => {
  //const { id, name, photo, subtitle, about, phrase, history, addedBy} = request.body
  const nova = request.body;
  const novaMaravilhosa = {
    id: helper.obterId(selectAllData),
    name: nova.name,
    photo: nova.photo,
    subtitle: nova.subtitle,
    about: nova.about,
    phrase: nova.phrase,
    history: nova.history,
    addedBy: nova.addedBy,
  };

  const semNomeRepetido = helper.semNomeRepetido(selectAllData, nova.name);
  
  if (semNomeRepetido) {
    response.status(400).send("Essa maravilhosa já foi cadastrada.");
  } else {
    if (
      novaMaravilhosa.id &&
      novaMaravilhosa.name &&
      novaMaravilhosa.photo &&
      novaMaravilhosa.subtitle &&
      novaMaravilhosa.about &&
      novaMaravilhosa.phrase &&
      novaMaravilhosa.history &&
      novaMaravilhosa.addedBy
    ) {
      const insertData = models.insertData(novaMaravilhosa);
      response.status(201).json(insertData);
    } else {
      response.status(400).json("Falta preencher todos os dados corretamente.");
    }
    console.log(insertData);
  }
};

//updateMaravilhosa
const updateMaravilhosa = (request, response) => {
  const maravilhosaAtualizada = request.body;
  console.log("body", maravilhosaAtualizada);
  const id = parseInt(request.params.id);
  const atualizacaoFeita = models.updateData(id, maravilhosaAtualizada);

  response.status(200).send(atualizacaoFeita);
  //response.status(200).send(selectAllData.find(maravilhosa => maravilhosa.id === id))
};

//deleteMaravilhosa
const deleteMaravilhosa = (request, response) => {
  const id = request.params.id;
  const encontrarId = models.selectDataById(id);
  if (encontrarId) {
    const dataComExluido = models.deleteData(encontrarId);

    response.status(200).send(dataComExluido);
  } else {
    response.status(404).send("ID não encontrado para efetuar a exclusão!");
  }
};

module.exports = {
  getMaravilhosas,
  getMaravilhosaById,
  addMaravilhosa,
  updateMaravilhosa,
  deleteMaravilhosa,
};
