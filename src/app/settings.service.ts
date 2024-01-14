import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';

import { DarkmodeService } from './darkmode.service';


@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(
    private dialog: MatDialog,
    public ds: DarkmodeService,
  ) {}
  arbeitszeitValitext = '';
  speichernbutton = 'Speichern';

  openSettingsDialogdeaktivate(): void {
    console.log("settingsopen")
  }

  openSettingsDialog(): void {
    const dialogRef = this.dialog.open(SettingsDialogComponent);

    // Du kannst hier weitere Aktionen nach dem Schließen des Dialogs hinzufügen
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog geschlossen', result);
    });

    if (this.ds.isDarkmode == true) {
      document.getElementById('bdy3')?.classList.toggle('dark-mode');
    }
  }

  validateInput(event: KeyboardEvent, inputinhalt: string): void {
    this.arbeitszeitValitext = inputinhalt;
    if (
      (parseInt(inputinhalt) > 2 &&
        parseInt(inputinhalt) < 24 &&
        !inputinhalt.includes(':') &&
        event.key !== 'Backspace') ||
      inputinhalt == '01' ||
      inputinhalt == '02'
    ) {
      this.arbeitszeitValitext = inputinhalt + ':';
    }
  }

  onSave(arbeitszeit: string) {
    let splitS: string[];

   console.log("close settings")

  }

  deletvalue() {
    const inputElement = <HTMLInputElement>(
      document.getElementById('arbeitszeit')
    );
    if (inputElement) {
      inputElement.value = '';
    }
  }

  reset() {
    const inputElement = <HTMLInputElement>(
      document.getElementById('arbeitszeit')
    );
    if (inputElement) {
      inputElement.value = '7:42';
    }
  }

  valiSave(arbeitszeit: string) {
    const meinButton: HTMLButtonElement | null = document.getElementById(
      'savebutton'
    ) as HTMLButtonElement;
    let arbeitszeitMIN = 0;
    let arbeitszeitSTD = 0;
    let splitS: string[];

    splitS = arbeitszeit.split(':');

    arbeitszeitSTD = parseInt(splitS[0]);

    if (splitS[1] == '' || splitS[1] == null) {
      arbeitszeitMIN = 0;
    } else {
      arbeitszeitMIN = parseInt(splitS[1]);
    }
    if (isNaN(arbeitszeitSTD) || isNaN(arbeitszeitMIN)) {
      meinButton.disabled = true;
      this.speichernbutton = 'Ungültige Eingabe';
    } else {
      if (
        arbeitszeitSTD < 0 ||
        arbeitszeitMIN < 0 ||
        arbeitszeitSTD > 23 ||
        arbeitszeitMIN >= 60
      ) {
        meinButton.disabled = true;
        this.speichernbutton = 'Ungültige Eingabe';
      } else {
        meinButton.disabled = false;
        this.speichernbutton = 'Speichern';
      }
    }
  }
}
