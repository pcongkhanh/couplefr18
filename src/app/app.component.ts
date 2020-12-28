import { Component } from '@angular/core';
import { NewsService } from './news.service';
import { NavBarService } from './nav-bar.service';
import { News } from './News';
import { Navs } from './Navs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'COUPLE FR18';
  show = false;
  onPages = {
    clickHome: false,
    clickNews: false,
    clickLifestyle: false,
    clickFashion: false,
    clickAbout: false,
    clickContact: false,
  };

  isMobile: boolean;

  news: News[];
  navBar: Navs[];

  constructor(
    private newsService: NewsService,
    private navsService: NavBarService
  ) {}

  getNews(): void {
    this.newsService.getNews().subscribe((data) => {
      this.news = data.News;
      this.show = true;
    });
  }

  getNavs(): void {
    this.navsService.getNavs().subscribe((data) => {
      this.navBar = data.Navs;
    });
  }

  navClick(event): void {
    Object.keys(this.onPages).forEach((k) => {
      this.onPages[k] = false;
    });
    switch (event) {
      case 0: {
        this.onPages.clickHome = true;
        break;
      }
      case 1: {
        this.onPages.clickNews = true;
        break;
      }
      case 2: {
        this.onPages.clickLifestyle = true;
        break;
      }
      case 3: {
        this.onPages.clickFashion = true;
        break;
      }
      case 4: {
        this.onPages.clickAbout = true;
        break;
      }
      case 5: {
        this.onPages.clickContact = true;
        break;
      }
    }
  }

  ngOnInit() {
    this.onPages.clickHome = true;
    this.getNews();
    this.getNavs();
    if (window.screen.width <= 768) {
      this.isMobile = true;
    }
  }
}
