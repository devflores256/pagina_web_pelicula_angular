import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HelperServiceService {

  constructor() { }
  /* sweetalert(title:string, text:string, icon:SweetAlertIcon) {
    Swal.fire(title, text, icon);
  } */
  sweetalert(title: string, text: string, icon: SweetAlertIcon) {  
    Swal.fire({  
        title: title,  
        text: text,  
        icon: icon,  
        confirmButtonText: 'OK'  
    });  
  }  
}
