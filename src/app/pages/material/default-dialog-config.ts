import { MatDialogConfig } from '@angular/material/dialog';


export function defaultDialogConfig() {
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = '85%';
  dialogConfig.height= '800px';
  

  return dialogConfig;
}


export function smallDialogConfig(){
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = '45%';
  dialogConfig.height= '400px';
  

  return dialogConfig;
}
