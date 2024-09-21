import { Component, Input } from '@angular/core';
import { IconCogComponent } from './icon-cog/icon-cog.component';
import { IconHelpComponent } from './icon-help/icon-help.component';
import { IconInfoComponent } from './icon-info/icon-info.component';
import { IconModel } from './models/icon.model';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [IconCogComponent, IconHelpComponent, IconInfoComponent],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input({ required: true }) data!: IconModel;
}
