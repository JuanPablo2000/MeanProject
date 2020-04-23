import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project';
import {ProjectService} from '../../services/project.service';
import {Global} from '../../services/global';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
  providers:[ProjectService]
})
export class ProyectsComponent implements OnInit {

public projects:Project[];
public url:string;

  constructor(  private _projectService:ProjectService  ) {

this.url=Global.url;

  }

  ngOnInit(): void {

    this.getProjects();
  }

  getProjects(){

this._projectService.getProjects().subscribe(Response=>{
if(Response.projects){

this.projects=Response.projects;

}
console.log(Response);


},Error=>{

console.log(Error);


});

  }

}
