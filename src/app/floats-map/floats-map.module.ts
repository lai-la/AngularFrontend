import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FilterFloatsComponent } from './components/bottom-sheets/filter-floats/filter-floats.component';
import { SwitchLayersComponent } from './components/bottom-sheets/switch-layers/switch-layers.component';
import { ButtonNavComponent } from './components/button-nav/button-nav.component';
import { ClosePathButtonComponent } from './components/close-path-button/close-path-button.component';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import { FloatDetailsComponent } from './components/float-details/float-details.component';
import { LayerButtonComponent } from './components/layer-button/layer-button.component';
import { MapViewportComponent } from './components/map-viewport/map-viewport.component';
import { MapComponent } from './components/map/map.component';

import { FloatsMapRoutingModule } from './floats-map-routing.module';

@NgModule({
  imports: [
    SharedModule,
    FloatsMapRoutingModule
  ],
  declarations: [
    MapViewportComponent,
    MapComponent,
    FilterButtonComponent,
    FloatDetailsComponent,
    LayerButtonComponent,
    ButtonNavComponent,
    FilterFloatsComponent,
    SwitchLayersComponent,
    ClosePathButtonComponent
  ],
  entryComponents: [
    FilterFloatsComponent,
    SwitchLayersComponent
  ]
})
export class FloatsMapModule {
}
