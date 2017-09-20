import { Component } from '@angular/core';
import { DetailsService} from './detailsService';
import { Form, FormsModule, FormBuilder,ReactiveFormsModule , Validators, FormControl, FormGroup } from '@angular/forms';
import { IMyDpOptions} from 'mydatepicker';
import { NumberFormatPipe} from './number-format.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public mockData:any = {};
  user:FormGroup;
  risk:FormGroup;

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy',    
    inline: false,
    showClearDateBtn:false
  };

  constructor(private detailsService:DetailsService) {    
    this.detailsService.getMockData().subscribe(result => {
      this.mockData = result.mockData;
    });
  }

  ngOnInit(){ 
    this.risk = new FormGroup({
      payrate: new FormControl(82.20,[Validators.required]),
      mtm: new FormControl(64.54,[Validators.required]),
      cr01: new FormControl(1.07,[Validators.required]),
      ir01: new FormControl(-1650000.00,[Validators.required])
    });

    this.user = new FormGroup({
      type: new FormControl('Type',[Validators.required]),
      referenceEntity: new FormControl('IBM Corporation',[Validators.required]),
      creditTemplate: new FormControl('SNAC',[Validators.required]),
      restructuring: new FormControl('MR',[Validators.required]),
      seniority: new FormControl('Senior Unsecured',[Validators.required]),
      startDate: new FormControl('',[Validators.required]),
      currency: new FormControl('USD',[Validators.required]),
      paymentFrequency: new FormControl('Quarterly',[Validators.required]),
      maturityDate: new FormControl('',[Validators.required]),
      dateRoll: new FormControl('Modified Following',[Validators.required]),
      coupon: new FormControl('500',[Validators.required]),
      quantity: new FormControl(10000000.00,[Validators.required]),
      dayCount: new FormControl('ACT/360',[Validators.required]),
      recovery: new FormControl('40',[Validators.required]),
      buySell: new FormControl('Buy',[Validators.required]),
    });   

    this.user.patchValue({startDate: {
      date: {
          year: 2015,
          month: 3,
          day: 17}
      }});

    this.user.patchValue({maturityDate: {
      date: {
          year: 2015,
          month: 3,
          day: 17}
      }});
   
  }
 
  onSubmit(data){
    console.log(data._value);
    this.detailsService.postInstrumentDetails(data._value).subscribe(result => {
      alert(result.message);
      console.log(result);
    });
  }

  onRiskSubmit(data){
    console.log(data._value);
    this.detailsService.postRiskDetails(data._value).subscribe(result => {
      console.log(result);
      alert(result.message);
    });
  }  
}
