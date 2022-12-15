import { NgModule } from '@angular/core';

import { TotsCloudStorageConfig, TOTS_CLOUD_STORAGE_PROVIDER } from './entities/tots-cloud-storage-config';
import { TotsCloudStorageDirective } from './directives/tots-cloud-storage.directive';

@NgModule({
  declarations: [
    /** DIRECTIVES */
    TotsCloudStorageDirective
  ],
  imports: [
  ],
  exports: [
    /** DIRECTIVES */
    TotsCloudStorageDirective
  ],
  providers: [
    {
      provide: TOTS_CLOUD_STORAGE_PROVIDER,
      useClass: TotsCloudStorageConfig
    }
  ]
})
export class TotsCloudStorageModule { }
