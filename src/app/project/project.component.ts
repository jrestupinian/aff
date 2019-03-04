import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  //providers: [ApiService]
})
export class ProjectComponent implements OnInit {

  projects = [{name: 'Auditoría Tarifas'}];
  title = "Lista de auditorías"

  constructor(private api:ApiService){
    this.getProjects();
  }

  getProjects = () => {
    this.api.getAllProjects().subscribe(
      data => {
        this.projects = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
  }

}
