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

    getRemainingReactsVar() {
        if (this.moment !== undefined) {
            const remaining = this.moment.reacts.length - 3;
            return `--remaining-reacts: '+${remaining}'`;
        }

        throw new Error('Moment is undefined');
    }
}
