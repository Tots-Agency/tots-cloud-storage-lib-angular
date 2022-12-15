import { NgModule } from '@angular/core';

import { TotsCloudStorageConfig, TOTS_CLOUD_STORAGE_PROVIDER } from './entities/tots-cloud-storage-config';

@NgModule({
  declarations: [
    
  ],
  imports: [
  ],
  exports: [
  ],
  providers: [
    {
      provide: TOTS_CLOUD_STORAGE_PROVIDER,
      useClass: TotsCloudStorageConfig
    }
  ]
})
export class CloudStorageModule { }
