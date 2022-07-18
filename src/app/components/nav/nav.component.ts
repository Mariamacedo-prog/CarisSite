import { Component, OnInit } from '@angular/core';


type ListMenuType ={
  name: string
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  listItemsMenu: ListMenuType[] = [{name:'Home'}, {name: 'Sobre Nós'}, {name: 'Obras'}, {name: 'Fale Conosco'}, {name:  'Contato'}]
  constructor() { }

  ngOnInit(): void {
  }


  
}
