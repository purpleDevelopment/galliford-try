import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ContentService } from './services/content-service/content.service';
import { Network } from '@ionic-native/network/ngx'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/page-listing',
      icon: 'home',
    },
    {
      title: 'An Introduction',
      url: '/category/1iZ8DTMgRrVTvN4IfA5e27',
      icon: '',
    },
    {
      title: 'Our Safety Leadership Programme',
      url: '/category/2910htuYeQuQm47kN6CYyy',
      icon: '',
    },
    {
      title: 'Delivering the Leadership Programme',
      url: '/category/6nbXHMNHvKOm1cPOfJLLT1',
      icon: '',
    },
    {
      title: 'Leadership Training Programme',
      url: '/category/1J49wo9Wi7wVQtL0xavYP0',
      icon: '',
    },
    {
      title: 'Tools and Resources',
      url: '/category/3lmz2sa3MxzzttfAcsBGwa',
      icon: '',
    },
    {
      title: 'Sharing Best Practices',
      url: '/best-practice',
      icon: '',
    },
    {
      title: 'Upload Best Practices',
      url: '/upload-best-practice',
      icon: '',
    },
    {
      title: 'About this App',
      url: '/about',
      icon: '',
    },
    {
      title: 'Contact Us',
      url: '/contact',
      icon: '',
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private network: Network,
    private contentService: ContentService,
  ) {
    this.initializeApp();
  }

  initializeApp() {

    this.network.onDisconnect().subscribe(() => {
      
        console.log('WE ARE OFFLINE');
      
    });
 
    this.network.onConnect().subscribe(() => {
      
        console.log('WE ARE ONLINE');
      
    });

    if (!window.cordova) {
      this.contentService.preload();
      return;
    }
    // this.splashScreen.show();
    Promise.all([this.contentService.preload(), this.platform.ready()])
      .then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
  

    }

}
