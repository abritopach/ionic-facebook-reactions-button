import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { trigger, state, style, animate, transition } from '@angular/animations';

/**
 * Generated class for the ReactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-reactions',
    templateUrl: 'reactions.html',
    animations: [
        trigger('scaleReactionIcon', [
            state('idle', style({
                transform: 'scale(1)'
            })),
            state('clicking', style({
                transform: 'scale(1.5)'
            })),
            transition('idle <=> clicking', animate('100ms linear')),
        ]),
    ]
})
export class ReactionsPage {

    reactionIcons: Object[] = []

    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController,
                private changeDetector: ChangeDetectorRef) {
        this.reactionIcons = [
            {iconImage: 'assets/img/like.png', iconState: 'idle'},
            {iconImage: 'assets/img/love.png', iconState: 'idle'},
            {iconImage: 'assets/img/haha.png', iconState: 'idle'},
            {iconImage: 'assets/img/wow.png', iconState: 'idle'},
            {iconImage: 'assets/img/sad.png', iconState: 'idle'},
            {iconImage: 'assets/img/angry.png', iconState: 'idle'}
        ];
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ReactionsPage');
    }

    share(icon) {
        icon.iconState = 'clicking';
        this.changeDetector.detectChanges();

        setTimeout(() => {
            this.viewCtrl.dismiss();
        }, 300);
    }

}
