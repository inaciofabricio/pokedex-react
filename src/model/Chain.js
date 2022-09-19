import { limpaStringVazia } from "../util/util";

export default class Chain {

  constructor(data) {
    var urls = data?.evolution_chain?.url.split('/');
    urls = urls ? urls.filter(limpaStringVazia) : "";
    
    this._id = urls[urls.length-1] ? urls[urls.length-1] : 0;
  }

  get id(){
    return this._id;
  }
}
