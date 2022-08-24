import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  infoContato = {
    imgBackground: {
      src: "",
      alt: ""
    },
    whats: ""
  }
  constructor(private dataService: DataService) { }

  async ngOnInit(){
    document.documentElement.scrollTop = -2000;
    const result = await this.dataService.getData().subscribe((data: any) =>{
      this.infoContato = data.contato;
      this.infoContato.whats = data.carisInfo.whats;
    });
  }

}
