import { Component } from '@angular/core';

import escuchadoRecientemente from '../../assets/mockdata/escuchadoRecientemente.json';
import tusMeGusta from '../../assets/mockdata/tusMeGusta.json';
import laHoraSad from '../../assets/mockdata/laHoraSad.json';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {

  data = [
    {
      title: 'Escuchado recientemente',
      albums: escuchadoRecientemente
    },
    {
      title: 'Tus me gusta',
      albums: tusMeGusta
    },
    {
      title: 'La hora sad',
      albums: laHoraSad
    }
  ];

  opts = {
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 20,
    freeMode: true
  }
  
  constructor(private router: Router) { }

  openAlbum(album) {
    const titleEscaped = encodeURIComponent(album.title);
    console.log('titleEscaped: ', titleEscaped);
    this.router.navigateByUrl(`/tabs/tabs1/${titleEscaped}`)
  }
    //funcion para arreglar las imagenes
  dasherize(string) {
    return string.replace(/[A-Z]/g, function (char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  };
}
