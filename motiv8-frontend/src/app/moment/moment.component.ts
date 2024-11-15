import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Moment } from '../models/post';

@Component({
    selector: 'app-moment',
    standalone: true,
    imports: [CardComponent],
    templateUrl: './moment.component.html',
    styleUrl: './moment.component.scss',
})
export class MomentComponent {
    @Input()
    moment?: Moment;
}
