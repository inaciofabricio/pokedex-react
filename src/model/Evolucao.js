export default class Evolucao {

  constructor(nome, atual) {
    this._nome = nome;
    this._atual = atual
  }

  get nome(){
    return this._nome;
  }

  get atual(){
    return this._atual;
  }

}
