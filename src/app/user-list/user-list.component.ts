import { Component, OnInit } from '@angular/core';
//import userData from '../user.json';
interface user{
  id:number;
  name:string;
  email:string;
  password:string;
}
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
searchText:any;
users=[
  {
  "id":1,"name":"anam","email":"anam@gmail.com","password":"anam@123"},

  {
    "id":2,"name":"sonu","email":"sonu@gmail.com","password":"sonu@123"},

  {
    "id":3,"name":"anki","email":"anki@gmail.com","password":"anki@123"},

  {
    "id":4,"name":"chotu","email":"chotu@gmail.com","password":"chotu@123"},

  {
    "id":5,"name":"babita","email":"babita@gmail.com","password":"babita@123"}
];
  constructor() { }
  
  ngOnInit(): void {
    
  }

}
