import { Inject, Injectable } from '@angular/core';
import { TotsCloudStorageConfig, TOTS_CLOUD_STORAGE_PROVIDER } from '../entities/tots-cloud-storage-config';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { TotsFile } from '../entities/tots-file';

@Injectable({
  providedIn: 'root'
})
export class TotsCloudStorageService {

  baseUrl = 'https://storage.googleapis.com/upload/storage/v1/b/';
  basePublicUrl = 'https://storage.googleapis.com/';

  constructor(
    @Inject(TOTS_CLOUD_STORAGE_PROVIDER) protected config: TotsCloudStorageConfig,
    protected http: HttpClient
  ) { }

  upload(file: File): Observable<TotsFile> {
    return this.http
    .post<any>(this.baseUrl + this.config.bucket + '/o?uploadType=media&name=' + this.generateFilename(file), file)
    .pipe(map(data => {
      let item = new TotsFile();
      item.name = file.name;
      item.size = data.size;
      item.url = this.basePublicUrl + this.config.bucket + '/' + data.name;
      item.mediaLink = this.basePublicUrl + this.config.bucket + '/' + data.name;
      return item;
    }));
  }

  generateFilename(file: File): string {
    let now = new Date();
    return now.getMilliseconds() + '_' + now.getFullYear() + now.getMonth() + now.getDay() + now.getHours() + '_' + file.name.replace(/ /g, "");
  }
}
