import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './layout.component';
import { AsideDynamicComponent } from './components/aside-dynamic/aside-dynamic.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    AsideDynamicComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, SharedModule],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}
