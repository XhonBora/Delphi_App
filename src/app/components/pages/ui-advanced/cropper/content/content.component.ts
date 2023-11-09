import { Component, ViewChild, OnInit } from '@angular/core';
import { CropperComponent } from 'angular-cropperjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  // Default
  @ViewChild('defaultCropper')
  public defaultCropper: CropperComponent;
  defaultconfig = {
    aspectRatio: 16 / 9,
    responsive: true,
    zoomable: true,
  };
  defaultimageUrl = "assets/img/costic/add-product-3.jpg";
  // Zoom Disble
  @ViewChild('disablezoomCropper')
  public disablezoomCropper: CropperComponent;
  disablezoomconfig = {
    aspectRatio: 16 / 9,
    responsive: true,
  };
  disablezoomimageUrl = "assets/img/costic/add-product-2.jpg";
  // With Controls
  @ViewChild('controlsCropper')
  public controlsCropper: CropperComponent;
  controlsconfig = {
    aspectRatio: 16 / 9,
    guides: false,
    responsive: true,
    preview: '.ms-crop-preview',
    zoomable: true
  };
  controlsimageUrl = "assets/img/costic/cropper.jpg";
  zoomIn(_$event: any) {
    this.controlsCropper.cropper.zoom(0.1);
  }
  zoomOut(_$event: any) {
    this.controlsCropper.cropper.zoom(-0.1);
  }
  rotateRight(_$event: any) {
    this.controlsCropper.cropper.rotate(45);
  }
  rotateLeft(_$event: any) {
    this.controlsCropper.cropper.rotate(-45);
  }
  moveLeft(_$event: any) {
    this.controlsCropper.cropper.move(-10, 0);
  }
  moveRight(_$event: any) {
    this.controlsCropper.cropper.move(10, 0);
  }
  moveDown(_$event: any) {
    this.controlsCropper.cropper.move(0, 10);
  }
  moveUp(_$event: any) {
    this.controlsCropper.cropper.move(0, -10);
  }
  lock(_$event: any) {
    this.controlsCropper.cropper.disable();
  }
  unLock(_$event: any) {
    this.controlsCropper.cropper.enable();
  }
  reset(_$event: any) {
    this.defaultCropper.cropper.reset();
    this.disablezoomCropper.cropper.reset();
    this.controlsCropper.cropper.reset();
  }
  ngOnInit(): void {
  }

}
