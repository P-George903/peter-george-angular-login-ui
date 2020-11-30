import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  public readonly loginForm: FormGroup;

  

  @Output()serverCreated= new EventEmitter<{serverName: string, serverContent: string, serverEmail: string, serverDate: string}>();
 
  newServerName = '';
  newServerContent = '';
  newServerEmail = '';
  newServerDate = ''
  constructor(private readonly fb: FormBuilder, private readonly router: Router){
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      birthDay: [null, [Validators.required, Validators.minLength(8),Validators.max(2000), Validators.min(1900)]]
    });
  }
  
  

  ngOnInit(): void {
  }
onAddServer(){
  this.router.navigate(['/server', ],{
queryParams:this.loginForm.value
  })

  
  this.serverCreated.emit({
    serverName: this.newServerName, 
    serverContent: this.newServerContent,
    serverEmail: this.newServerEmail,
    serverDate: this.newServerDate
    
  })
}
 


 } 

