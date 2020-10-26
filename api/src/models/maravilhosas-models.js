const fs = require('fs'); //para json
const data = require('../data/data.json')

// selectAllData
const selectAllData = () => {
    if (data) {
        return {error: null, dado: data}
    }else{
        return {error: {message: 'Ocorreu um erro'},dado: null}
    }
     
    
}

//selectDataById
const selectDataById =  (id) => {
    const maraId = id
    const found = data.find(element => element.id == maraId)
    if (found) {
        return {error: null, dado: found}
    }else{
        return {error: {message:"Registro não encontrado"},dado:null}
    }
    
}

//insertData
const insertData = (novaMaravilhosa) => { 
    data.push(novaMaravilhosa)
    return data
    /*if (novaMaravilhosa.name) {
        return {error: {message:"Ops registro duplicado"}}
    }else{
        fs.writeFileSync('./src/data//data.json', JSON.stringify([...data, selectAllData]), 'utf8', (err) => {
            if (err) {
                console.log(err);
            }
        })
    }
    return {error: null}*/
    
}

//updateData
const updateData = (id, maravilhosaAtualizada) => { 
    const maravilhosaId = data.map(maravilhosa => maravilhosa.id)
    console.log(maravilhosaId)

    const atualizaId = maravilhosaId.indexOf(id)
    if (atualizaId < 0) {
        return "ID não encontrado!"
    }
    const maravilhosaAtualizadacomId = {id, ...maravilhosaAtualizada}
    console.log('maravilhosa atualizado com Id', maravilhosaAtualizadacomId)
    data.splice(atualizaId, 1, maravilhosaAtualizadacomId)
    const found = data.find(maravilhosa => maravilhosa.id === id)
    return found
}

//deleteData
const deleteData = (encontrarId) => {
    const index = data.indexOf(encontrarId)
    data.splice(index, 1)
    return data
}

module.exports = {
    selectAllData,
    selectDataById,
    insertData, 
    updateData, 
    deleteData
}