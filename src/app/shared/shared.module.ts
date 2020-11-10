import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StickyHeaderComponent } from './sticky-header/sticky-header.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    StickyHeaderComponent,
    SearchComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    NavigationComponent,
    StickyHeaderComponent,
    SearchComponent,
  ],
})
export class SharedModule {}
