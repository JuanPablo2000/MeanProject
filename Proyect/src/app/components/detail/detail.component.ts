import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project';
import {ProjectService} from '../../services/project.service';
import {Global} from '../../services/global';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ProjectService]
})
export class DetailComponent implements OnInit {

public url:String;
public project:Project;
public _id:Project;
public confirm:boolean;

  constructor(

    private _projectService:ProjectService,
    private _router:Router,
    private _route:ActivatedRoute

  ) {

this.url=Global.url;
this.confirm=false;
  }

  ngOnInit(){

this._route.params.subscribe(params =>{

let id=params.id;

this.getProject(id);

console.log(params.id);



});

  }

getProject(id){

this._projectService.getProject(id).subscribe(response=>{
  this.project=response.project;
},error=>{
console.log(<any>error);

});

}

deleteProject(id){
  console.log(this.project);

  this._projectService.deleteProject(id).subscribe(response=>{
    if(response.project){
      this._router.navigate(['/proyects']);
    }
  },error=>{
    console.log(<any>error);

  });
}

setConfirm(par:boolean){
  this.confirm=par;
}

}
