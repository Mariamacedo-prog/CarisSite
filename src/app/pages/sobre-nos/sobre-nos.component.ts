import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.scss']
})
export class SobreNosComponent implements OnInit {
  info={
    subtitulo: "Lorem Ipsum is simply dummy text of the printing and. ",
    texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    fraseSocio: "''Lorem Ipsum is simply dummy text of the printing and typesetting industry...''",
    autor: "- André Lima - Socio",
    txt1:{
      titulo: "MISSÃO",
      conteudo:"Lorem Ipsum is simply dummy text of the printing and. Lorem Ipsum is simply dummy text of the printing and. "
    },
    txt2:{
      titulo: "VISÃO",
      conteudo:"Lorem Ipsum is simply dummy text of the printing and typesetting orem Ipsum is simply dummy text of the printing and typesetting ind."
    },
    txt3:{
      titulo: "VALORES",
      conteudo:"Lorem Ipsum is simply dummy text of the printing and typesetting ind, the printing and typesetting ind."
    },
    conteudoAgenda: "Lorem Ipsum is simply dummy text of the printing and. Lorem Ipsum is simply dummy text of the print, lorem Ipsum is simply dummy text of the printing and. Lorem Ipsum is simply dummy text of the print",
    endereco:"Av. ezequias bezerra de farias, N 85, Bl 25 ap 4, das 8:00 as 18:00."
  }
  constructor( private router: Router) { }

  ngOnInit(): void {
  }

}
