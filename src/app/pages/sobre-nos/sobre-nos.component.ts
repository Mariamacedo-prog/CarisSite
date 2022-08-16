import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.scss']
})
export class SobreNosComponent implements OnInit {
  info={
    subtitulo: "  ",
    texto: "  ",
    fraseSocio: "  ",
    autor: "  ",
    txt1:{
      titulo: "  ",
      conteudo: "  ",
    },
    txt2:{
      titulo: "  ",
      conteudo:  "  ",
    },
    txt3:{
      titulo:"  ",
      conteudo: "  ",
    },
    conteudoAgenda: "  ",
    endereco: "  ",
  }
  constructor( private router: Router,  private dataService: DataService) { }

  async ngOnInit() {
    const result = await this.dataService.getData().subscribe((data: any) =>{
      this.info = data.sobreNos;
    })
  }
  

}
