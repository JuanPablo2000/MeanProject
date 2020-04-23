import { Component, OnInit } from '@angular/core';

import {Project} from '../../models/project';
import {ProjectService} from '../../services/project.service';
import {UploadService} from '../../services/upload.service';
import {Global} from '../../services/global';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
    providers:[ProjectService,UploadService]
})
export class EditComponent implements OnInit {

  public title:String;
  public project:Project;
  public status:String;
  public filestoup:Array<File>;
  public savedproject;
  public url:string;

    constructor(


  private _projectService: ProjectService,
  private subida: UploadService,
  private _router:Router,
  private _route:ActivatedRoute
    ) {

  this.title="Edit Project";
this.url=Global.url;


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
    fileChange(event:any){
      console.log(event);
      this.filestoup=<Array<File>>event.target.files;

    }

    onSubmit(form){
  this._projectService.updateProject(this.project).subscribe(response=>{
  if(response.project){

    //Subir img:
    if(this.filestoup){
      this.subida.makeFileRequest(Global.url+'img/'+response.project._id,[],this.filestoup,'image')
      .then((result:any)=>{

      this.savedproject=result.project;

      this.status='succes';

      });
    }else{

      this.savedproject=response.project;
      this.status='success'

    }
  }
else{
    this.status='fail';
  }
  },error=>{
  console.log(<any>error);

  });

    }
}
