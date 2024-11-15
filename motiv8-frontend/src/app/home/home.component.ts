import { Component, signal, WritableSignal } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Moment, testMoments } from '../models/post';
import { MomentComponent } from '../moment/moment.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [MomentComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    userHasPosted: boolean = false;

    moments: WritableSignal<Moment[]> = signal(testMoments);
}
