import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GalleryService } from './gallery.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(700, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  constructor(private galleryService: GalleryService) {}

  @Input('newsFromParent') news;
  @Input('show2') show;
  gallery;
  start: number;
  end: number;

  isMobile: boolean;

  getGallery(): void {
    this.galleryService.getGallery().subscribe((data) => {
      this.gallery = data.gallery;
    });
  }

  galleryNxt(): void {
    if (this.end < this.gallery.length) {
      this.start += 1;
      this.end += 1;
    } else {
      this.start = 0;
      this.end = 3;
    }
  }

  galleryPrv(): void {
    if (this.start > 0) {
      this.start -= 1;
      this.end -= 1;
    } else {
      this.start = this.gallery.length - 3;
      this.end = this.gallery.length;
    }
  }

  ngOnInit(): void {
    this.getGallery();
    if (window.screen.width <= 768) {
      this.isMobile = true;
    }
    console.log(this.isMobile);
    this.start = 0;
    this.end = 3;
  }
}
