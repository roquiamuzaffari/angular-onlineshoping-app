import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
title='counterapp';
countNumber=0;
  btnState:boolean=false;
resetBtn()
{
  this.countNumber=0;
}

increseBtn()
{
  this.countNumber=this.countNumber+1;
  if(this.countNumber>=20)
  {
    if(this.countNumber=0){
      this.btnState = false;
    }
    else{
      this.btnState = true;
    }
    
  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
