import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SettingsService } from '../settings.service';
import { DarkmodeService } from '../darkmode.service';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss'],
})
export class SettingsDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<SettingsDialogComponent>,
    public ds: DarkmodeService,
    public op: SettingsService
  ) {}

  arbeitszeitValitext = '';

  closeDialog(arbeitszeit: string): void {
    this.op.onSave(arbeitszeit);

    this.dialogRef.close();
  }
}
