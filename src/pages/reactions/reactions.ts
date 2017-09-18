import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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
})
export class ReactionsPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ReactionsPage');
    }

    share(){
        this.viewCtrl.dismiss();
    }

}
