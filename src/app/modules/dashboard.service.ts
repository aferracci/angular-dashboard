import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [
      {
        name: "ASIA",
        data: [120, 240, 360, 820, 1024, 1240, 1528]
      },
      {
        name: "AFRICA",
        data: [220, 340, 550, 920, 1124, 1340, 1628]
      },
      {
        name: "EUROPA",
        data: [230, 440, 650, 1020, 1223, 1440, 1728]
      },
      {
        name: "AMERICA",
        data: [333, 540, 750, 1120, 1324, 1540, 1828]
      },
      {
        name: "OCEANIA",
        data: [444, 640, 859, 1220, 11424, 1640, 1928]
      },
    ];
  }

  cards() {
    return [71, 69, 39, 66];
  }

  pie () {
    return [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
      }, {
          name: 'Internet Explorer',
          y: 11.84
      }, {
          name: 'Firefox',
          y: 10.85
      }, {
          name: 'Edge',
          y: 4.67
      }, {
          name: 'Safari',
          y: 4.18
      }, {
          name: 'Sogou Explorer',
          y: 1.64
      }, {
          name: 'Opera',
          y: 1.6
      }, {
          name: 'QQ',
          y: 1.2
      }, {
          name: 'Other',
          y: 2.61
      }]
    }];
  }
}
