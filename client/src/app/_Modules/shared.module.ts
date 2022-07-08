import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    NgxGalleryModule,
    FileUploadModule,
    TabsModule.forRoot(),
    NgxGalleryModule,
  ],
  exports: [BsDropdownModule, FileUploadModule, TabsModule, NgxGalleryModule],
})
export class SharedModule {}
