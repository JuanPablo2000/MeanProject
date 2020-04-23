import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Project} from '../models/project';
import {Global} from './global';

@Injectable()
export class ProjectService{
  public url:String;

  constructor(
    private _http:HttpClient
  ){
    this.url=Global.url;
  }
  testService(){
    return 'Probando el servicio de angularr4';
  }

saveProject(project:Project):Observable<any>{

let params=JSON.stringify(project);
let headers= new HttpHeaders().set('Content-Type','application/json');

return this._http.post(this.url+'save',params,{headers: headers});

}

getProjects():Observable<any>{
  let headers=new HttpHeaders().set('Content-Type','application/json');
  return this._http.get(this.url+'all',{headers:headers});
}

getProject(id):Observable<any>{

  let headers=new HttpHeaders().set('Content-Type','application/json');

  return this._http.get(this.url+'project/'+id,{headers:headers});
}


deleteProject(id):Observable<any>{
  let headers=new HttpHeaders().set('Content-Type','application/json');
   return this._http.delete(this.url+'delete/'+id,{headers:headers});
}

updateProject(project):Observable<any>{
  let params=JSON.stringify(project);
  let headers=new HttpHeaders().set('Content-Type','application/json');

  return this._http.put(this.url+'projectupdate/'+project._id,params,{headers:headers});
}

}
