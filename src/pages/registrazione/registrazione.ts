import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Camera } from 'ionic-native';
import { TutorialPage } from '../tutorial/tutorial';

@Component({
    selector: 'page-registrazione',
    templateUrl: 'registrazione.html'
})
export class RegistrazionePage {

    public base64Image: string;
    private imageSrc: string;
    tutButton = TutorialPage;

    constructor(public navCtrl: NavController) {

    }

    onLink(url: string) {
        window.open(url);
    }

    takePic() {
        Camera.getPicture({
          destinationType: Camera.DestinationType.DATA_URL,
          targetWidth: 1000,
          targetHeight: 1000,
        }).then((imageData) => {
        this.base64Image = 'data:image/jpeg;base64, ' + imageData;
    }, (err) => {
        console.log(err);
        });
    }

    openGallery() {
        Camera.getPicture({
            targetWidth: 1000,
            targetHeight: 1000,
            sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM
        }).then((imageData) => {
            this.base64Image = 'data:image/jpeg;base64, ' + imageData;
        }, (err) => {
            console.log(err);
        });
    }

    /*
    private openGallery(): void {
        let cameraOptions = {
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: Camera.DestinationType.FILE_URI,
            quality: 100,
            targetWidth: 1000,
            targetHeight: 1000,
            encodingType: Camera.EncodingType.JPEG,
            correctOrientation: true
        }

        Camera.getPicture(cameraOptions)
            .then(file_uri => this.imageSrc = file_uri,
            err => console.log(err));
    }
    */
}

