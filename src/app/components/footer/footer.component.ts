import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  carisInfo = {
    rua: "Av. ezequias bezerra de farias",
    numero: "85",
    complemento: "Bl 25 ap 4",
    cidade: 'Ferraz de Vasconcelos',
    estado: 'SP',
    cep: '03399-199',
    telefone: '+55 (11) 98347-5047',
    email: "caris@construtora.com",
    facebook: 'https://www.facebook.com/mariamacedo.kamikorosu/',
    instagram: 'https://www.instagram.com/maria.s.ma/',
    twitter: 'https://api.whatsapp.com/send?L=pt&phone=5511983475047'
  }
  constructor() { }

  ngOnInit(): void {
  }

  goToStart(){
    document.documentElement.scrollTop = -2000;
  }
}
