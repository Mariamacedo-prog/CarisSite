import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
type ListMenuType ={
  name: string,
  link: string
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() activePage = '';
  showMenu = false;
  infoNav = {
    whats: ""
  };
  listItemsMenu: ListMenuType[] = [{name:'Home', link: '/'}, {name: 'Sobre Nós',  link: '/sobre'}, {name: 'Empreendimentos',  link: '/empreendimentos'}, {name:  'Contato',  link: '/contato'}]
  constructor( private router: Router, private dataService: DataService) { }

  async ngOnInit() {
   await this.dataService.getData().subscribe((data: any) =>{
      this.infoNav = data.carisInfo;
    })
  }


  
}
