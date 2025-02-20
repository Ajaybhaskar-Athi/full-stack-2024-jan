// import { Component } from '@angular/core';
// import { Component } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { SkysightData } from 'src/app/models/interfaces/skysight.interface';



import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-dum-card',
  templateUrl: './dum-card.component.html',
  styleUrls: ['./dum-card.component.css' ]
})
export class DumCardComponent {
  @Input() skysightDatasInput!: SkysightData;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon       = faDroplet;
  windIcon           = faWind;






/////////////////////////////////////////////////////

constructor(private ms:TodoService){}

formHeader="Add Location";
mobileName="";
price:any  ;
ram:any;
storage:any;
showForm=false;
id:any;
// is_edit:boolean=false;


mobiles:any;




        ngOnInit():void{
          this.getMobiles();
        }

  editForm(data:any){ //to load the content 
    this.showForm=true;
    if(data){
      this.mobileName=data.name;
      this.price=data.price;
      this.ram=data.ram;
      this.storage=data.storage;

      this.id=data._id;
      this.formHeader="Edit Location";
      // this.is_edit=true;

    }
  }
  openForm(){
    this.showForm=true;
    this.formHeader="Add Location";
    // this._id=null;
  }

    closeForm(){
      this.showForm=false;
     
    }
    
    saveMobile(){
        this.showForm=false;
        let body={
          name:this.mobileName,
          price:this.price,
          ram:this.ram,
          storage:this.storage,
        
        }
        console.log(body);
        this.ms.postMobile(body).subscribe(
          (res)=>{
            this.getMobiles();
          }

        )
    }

    
    editMobile(){
      this.showForm=false;
    let body={
          name:this.mobileName,
          price:this.price,
          ram:this.ram,
          storage:this.storage,
          _id:this.id
        }

        this.ms.putMobile(body).subscribe(
          (res)=>{
            this.getMobiles();
          }
        )
    }





      getMobiles(){
        
        this.ms.fetchMobiles().subscribe(
          (data)=>{
        this.mobiles=data;
        },(err)=>{
          console.log(err);
        }
      
      )
      }

      deleteMobile(id:any){
        this.ms.deleteMobile(id).subscribe(

          (res)=>{
              this.getMobiles();
          }
        )
      }

      ///////////////////////////////////////////////





}
