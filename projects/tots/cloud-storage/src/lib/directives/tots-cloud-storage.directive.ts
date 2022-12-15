import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { TotsFile } from '../entities/tots-file';
import { TotsCloudStorageService } from '../services/tots-cloud-storage.service';

@Directive({
  selector: '[totsCloudStorage]'
})
export class TotsCloudStorageDirective {

  @Output() fileUploaded = new EventEmitter<TotsFile>();
  @Output() startUpload = new EventEmitter<any>();
  @Output() endUpload = new EventEmitter<any>();

  numFilesUpload = 0;
  numFilesUploading = 0;

  constructor(
    protected cloudStorage: TotsCloudStorageService) {
  }

  @HostListener('change', ["$event.target"])
  onChange(target: any) {
    // Verify if selected one file
    this.numFilesUpload = target.files.length;
    this.numFilesUploading = 0;
    if(target.files.length == 0){
      return;
    }
    // Call Start uploading
    this.startUpload.emit();
    // For each all files selected
    for (let i = 0; i < target.files.length; i++) {
      this.uploadFile(target.files[i]);
    }
  }

  uploadFile(file: File) {
    this.cloudStorage.upload(file).subscribe(result => {
      this.fileUploaded.emit(result);

      this.numFilesUploading++;
      this.verifyIfEnd();
    });
  }

  verifyIfEnd() {
    if(this.numFilesUpload == this.numFilesUploading){
      this.endUpload.emit();
    }
  }
}
