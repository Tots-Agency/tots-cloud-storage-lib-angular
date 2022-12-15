import { Injectable, InjectionToken } from "@angular/core";

export const TOTS_CLOUD_STORAGE_PROVIDER = new InjectionToken<TotsCloudStorageConfig>('tots.cloud-storage');

@Injectable()
export class TotsCloudStorageConfig {
  bucket: string = '';
}