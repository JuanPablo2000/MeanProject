import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project';
import {ProjectService} from '../../services/project.service';
import {UploadService} from '../../services/upload.service';
import {Global} from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService,UploadService]
})
export class CreateComponent implements OnInit {


public title:String;
public project:Project;
public status:String;
public filestoup:Array<File>;
public savedproject;
public url:string;

  constructor(


private _projectService: ProjectService,
private subida: UploadService


  ) {

this.title="Create New Project";
this.project= new Project('','','', 0,'','','');
this.url=Global.url;

  }

  ngOnInit(): void {
  }

  onSubmit(form){

    this._projectService.saveProject(this.project).subscribe(response=>{
      if(response.project){


        //Subir img:
this.subida.makeFileRequest(Global.url+'img/'+response.project._id,[],this.filestoup,'image')
.then((result:any)=>{

this.savedproject=result.project;

  this.status='succes';

  console.log(result);
  form.reset();


});
      }else{
        this.status='fail';
      }
      console.log(response);

    },error=>{
      console.log(<any>error);

    });
  }

fileChange(event:any){
  console.log(event);
  this.filestoup=<Array<File>>event.target.files;

}

}
