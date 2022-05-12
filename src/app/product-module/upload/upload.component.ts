import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit ,Output} from '@angular/core';
import { observable } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

   message:string="";
   progress:number=0;
  @Output()onuploadfinished=new EventEmitter();
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  public uploadfile=(files:any) =>{
    if(files.Length===0)
    return;
let filetoupload=<File>files[0]
const formdata= new FormData();
formdata.append('file',filetoupload,filetoupload.name)
this.http.post('https://localhost:44386/api/uploads',formdata,{reportProgress:true,observe:'events'}).
subscribe(event=>{
  if(event.type=== HttpEventType.UploadProgress){
  // this.progress=Math.round(100 * event.loaded /event.total );
  }
  else if(event.type===HttpEventType.Response){
    this.message='uploadSuccess';
    this.onuploadfinished.emit(event.body);
  }
})
  }

}
