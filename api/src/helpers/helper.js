const obterId = (array) => { //não repedir o id
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
  }

const semNomeRepetido = (dado, nome) => {
    const encontrarRepetido = dado.find(Maravilhosa => Maravilhosa.nome == nome)
    return encontrarRepetido
    
    
}

module.exports = {
    obterId,
    semNomeRepetido
} 