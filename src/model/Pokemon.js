import { convertePrimeiraLetraMaiuscula, minimizaStringEspecial } from "../util/util";
import Jogo from "./Jogo";
import Movimento from "./Movimento";
import StatusBasico from "./StatusBasico";

export default class Pokemon {

    constructor(id, data) { 
      this.id = id ? id : 0;
      this.nome =  data && data.name ? data.name : "Não Existe";
      this.tipo = data && data.types && data.types[0].type && data.types[0].type.name ? data.types[0].type.name : "...";
      this.img = data && data.sprites && data.sprites.front_default ? data.sprites.front_default : null;
      this.altura = data && data.height ? data.height * 10 : 0;
      this.peso = data && data.weight ? data.weight : 0;
      this.statusBasicos = data && data.stats ? data.stats : [];
      this.jogos = data && data.game_indices ? data.game_indices : [];
      this.movimentos = data && data.moves ? data.moves : [];
      this.idChain = 0;
    }
    
    get id() {
        return this._id;
    }
    set id(id){
        this._id = parseInt(id);
    }
  
    get nome() {
        return this._nome;
    }
    set nome(nome){
        this._nome = convertePrimeiraLetraMaiuscula(nome);
    }
  
    get tipo() {
        return this._tipo;
    }
    set tipo(tipo){
        this._tipo = convertePrimeiraLetraMaiuscula(tipo);
    }
  
    get img() {
        return this._img;
    }
    set img(img){
        this._img = img;
    }

    get altura() {
        return this._altura;
    }
    set altura(altura){

        if(altura === 0) {
          this._altura = "..."
        } else if(altura > 0 && altura >= 100){
            if((altura % 100) === 0) {
                this._altura = `${String((altura / 100)).replace('.',',')} m`;
            } else {
                this._altura = `${String((altura / 100).toFixed(2)).replace('.',',')} m`;
            }
        } else {
            this._altura = `${String(altura)} cm`;
        }
    }
  
    get peso() {
        return this._peso;
    }
    set peso(peso){
      if(peso === 0) {
        this._peso = "...";
      } else {
        this._peso = `${String((peso / 10).toFixed(1)).replace('.',',')} kg`;
      }
    }
  
    get statusBasicos() {
        return this._statusBasicos;
    }
    set statusBasicos(data){
  
      let array = [];
  
      data.forEach(i => {
  
        let nome = i.stat && i.stat.name ? minimizaStringEspecial(i.stat.name) : null;
        let status = i.base_stat ? i.base_stat : null;
  
        if(nome && status){
          array.push(new StatusBasico(nome, status));
        }
  
      });
  
      this._statusBasicos = array;
    }
  
    get jogos() {
        return this._jogos;
    }
    set jogos(data){
  
      let array = [];
  
      for (let i = 0; i < data.length; i++) {
  
        let id = i + 1;
        let nome = data[i].version && data[i].version.name ? data[i].version.name : null;
  
        if(id && nome){
          array.push(new Jogo(id, nome));
        }
  
      }
  
      this._jogos = array;
    }
  
    get movimentos() {
        return this._movimentos;
    }
    set movimentos(data){
  
      let array = [];
  
      for (let i = 0; i < data.length; i++) {
  
        let id = i + 1;
        let nome = data[i].move && data[i].move.name ? data[i].move.name : null;
  
        if(id && nome){
          array.push(new Movimento(id, nome));
        }
  
      }
  
      this._movimentos = array;
    }

    get idChain() {
      return this._idChain;
    }
    set idChain(idChain){
      this._idChain = parseInt(idChain);
    }
}
