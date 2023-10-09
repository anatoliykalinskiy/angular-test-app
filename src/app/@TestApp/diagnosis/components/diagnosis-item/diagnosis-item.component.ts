import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {DiagnosisService} from "../../diagnosis.service";
import {FormControl, FormGroup} from "@angular/forms";
import {debounceTime, distinctUntilChanged, map, Observable, of, startWith, switchMap} from "rxjs";

@Component({
  selector: 'app-diagnosis-item',
  templateUrl: './diagnosis-item.component.html',
  styleUrls: ['./diagnosis-item.component.scss'],
  providers: [DiagnosisService]
})
export class DiagnosisItemComponent implements OnInit {
  @Input() data!: any;
  form: FormGroup = new FormGroup({
    diagnosisControl: new FormControl(''),
    notesControl: new FormControl('')
  })
  filteredOptions!: Observable<any[]>;

  ngOnInit() {
    this.filteredOptions = this.form.controls['diagnosisControl'].valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      map((value: string | null): string => value ? value.trim() : ''),
      distinctUntilChanged(),
      switchMap((value: string): Observable<any[]> => {
        return value ? this.service.getFilteredList({Search: value.toLowerCase()}) : of([])
      })
    );

    this.form.controls['notesControl'].valueChanges.subscribe(value => this.data.notes = value);
  }
//notes
  constructor(private service: DiagnosisService) {
  }

  onSelectValue(option: any): void {
    this.data.code.coding = option.code;
    this.data.context.identifier.value = option.id;
    this.data.onset_date = new Date().toISOString();
  }

}
