import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css'],
})
export class TvComponent implements OnInit {
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  allTvs: any[] = [
    {
      backdrop_path: '/m0bV3qBiJBBlpFaaKjwHo13MVjm.jpg',
      first_air_date: '2005-01-03',
      genre_ids: [35, 10767],
      id: 14981,
      name: 'The Late Late Show with Craig Ferguson',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'The Late Late Show with Craig Ferguson',
      overview:
        "The Late Late Show with Craig Ferguson is an American late-night talk show hosted by Scottish American comedian Craig Ferguson, who is the third regular host of the Late Late Show franchise. It follows Late Show with David Letterman in the CBS late-night lineup, airing weekdays in the US at 12:37 a.m. It is taped in front of a live studio audience from Monday to Friday at CBS Television City in Los Angeles, California, directly above the Bob Barker Studio. It is produced by David Letterman's production company Worldwide Pants Incorporated and CBS Television Studios.\n\nSince becoming host on January 3, 2005, after Craig Kilborn and Tom Snyder, Ferguson has achieved the highest ratings since the show's inception in 1995. While the majority of the episodes focus on comedy, Ferguson has also addressed difficult subject matter, such as the deaths of his parents, and undertaken serious interviews, such as one with Desmond Tutu, which earned the show a 2009 Peabody Award.",
      popularity: 8783.422,
      poster_path: '/gGC7zSDgG0FY0MbM1pjfhTCWQBI.jpg',
      vote_average: 7.1,
      vote_count: 76,
    },
    {
      backdrop_path: '/amtOltTVcK9vQtL1iQS6p3LBi05.jpg',
      first_air_date: '2015-03-23',
      genre_ids: [10767],
      id: 62223,
      name: 'The Late Late Show with James Corden',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'The Late Late Show with James Corden',
      overview:
        "Once Craig Ferguson retires, James Corden will be taking over The Late Late Show. The show is a late night talk show that interviews celebrities and has its own bits. And of course, it's all hosted by James Corden.",
      popularity: 4839.48,
      poster_path: '/4yLOZ4Y9loZNykxYkLcsQ8k12zY.jpg',
      vote_average: 5.6,
      vote_count: 108,
    },
    {
      backdrop_path: '/yogK95l1lK8wyDK9N1YfOiGYJJ8.jpg',
      first_air_date: '1993-08-30',
      genre_ids: [10767, 35],
      id: 498,
      name: 'Late Show with David Letterman',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Late Show with David Letterman',
      overview:
        "Late Show with David Letterman is an American late-night talk show hosted by David Letterman on CBS. The show debuted on August 30, 1993, and is produced by Letterman's production company, Worldwide Pants Incorporated and CBS Television Studios. The show's music director and band-leader of the house band, the CBS Orchestra, is Paul Shaffer. The head writer is Matt Roberts and the announcer is Alan Kalter. Of the major U.S. late-night programs, Late Show ranks second in cumulative average viewers over time and third in number of episodes over time. The show leads other late night shows in ad revenue with $271 million in 2009.\n\nIn most U.S. markets the show airs at 11:35 p.m. Eastern/Pacific time, but is recorded Monday through Wednesday at 4:30 p.m., and Thursdays at 3:30 p.m and 6:00 p.m. The second Thursday episode usually airs on Friday of that week.\n\nIn 2002, Late Show with David Letterman was ranked No. 7 on TV Guide's 50 Greatest TV Shows of All Time. CBS has a contract with Worldwide Pants to continue the show through 2014; by then, Letterman will surpass Johnny Carson as the longest tenured late-night talk show host.",
      popularity: 3054.613,
      poster_path: '/dHjXgLhu7M4Tq6GUbs4m6BZ4HbS.jpg',
      vote_average: 6.4,
      vote_count: 125,
    },
    {
      backdrop_path: '/gMMnf8VRg3Z98WaFmOLr9Jk8pIs.jpg',
      first_air_date: '2015-09-08',
      genre_ids: [35, 10767],
      id: 63770,
      name: 'The Late Show with Stephen Colbert',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'The Late Show with Stephen Colbert',
      overview:
        'Stephen Colbert brings his signature satire and comedy to The Late Show with Stephen Colbert, the #1 show in late night, where he talks with an eclectic mix of guests about what is new and relevant in the worlds of politics, entertainment, business, music, technology, and more. Featuring bandleader Jon Batiste with his band Stay Human, the Emmy Award-nominated show is broadcast from the historic Ed Sullivan Theater. Stephen Colbert, Chris Licht, Tom Purcell, and Jon Stewart are executive producers. Barry Julien and Denise Rehrig serve as co-executive producers.',
      popularity: 4716.791,
      poster_path: '/9jkThAGYj2yp8jsS6Nriy5mzKFT.jpg',
      vote_average: 6.5,
      vote_count: 201,
    },
    {
      backdrop_path: '/jWXrQstj7p3Wl5MfYWY6IHqRpDb.jpg',
      first_air_date: '1952-12-26',
      genre_ids: [10763],
      id: 94722,
      name: 'Tagesschau',
      origin_country: ['DE'],
      original_language: 'de',
      original_name: 'Tagesschau',
      overview:
        'German daily news program, the oldest still existing program on German television.',
      popularity: 3260.112,
      poster_path: '/7dFZJ2ZJJdcmkp05B9NWlqTJ5tq.jpg',
      vote_average: 7.5,
      vote_count: 142,
    },
    {
      backdrop_path: '/yii7eIlaw1MRMfa7FTA6mW8hBUQ.jpg',
      first_air_date: '2023-08-14',
      genre_ids: [35, 10766],
      id: 213026,
      name: 'Fuzuê',
      origin_country: ['BR'],
      original_language: 'pt',
      original_name: 'Fuzuê',
      overview: '',
      popularity: 3181.582,
      poster_path: '/zNNFg8z3z7uT817n6M0kHRcYwq1.jpg',
      vote_average: 5.7,
      vote_count: 5,
    },
    {
      backdrop_path: '/3n2TjKw3HrwDqgVgcynvantOfS3.jpg',
      first_air_date: '2023-01-04',
      genre_ids: [18, 10751],
      id: 215103,
      name: 'Teri Meri Doriyaann',
      origin_country: ['IN'],
      original_language: 'hi',
      original_name: 'तेरी मेरी डोरियाँ',
      overview:
        'It’s hate at first sight for Sahiba and Angad! But destined to be together, their lives get intertwined by a marriage alliance, and a love-hate story ensues.',
      popularity: 2984.953,
      poster_path: '/4BHDmYiuSnNL3nqKIOzLJKYX4AN.jpg',
      vote_average: 7.2,
      vote_count: 107,
    },
    {
      backdrop_path: '/oOce9hLMVFubjAJliau4kiSNPnW.jpg',
      first_air_date: '1990-09-13',
      genre_ids: [80, 18],
      id: 549,
      name: 'Law & Order',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Law & Order',
      overview:
        "In cases ripped from the headlines, police investigate serious and often deadly crimes, weighing the evidence and questioning the suspects until someone is taken into custody. The district attorney's office then builds a case to convict the perpetrator by proving the person guilty beyond a reasonable doubt. Working together, these expert teams navigate all sides of the complex criminal justice system to make New York a safer place.",
      popularity: 2615.555,
      poster_path: '/77OPlbsvX3pzoFbyfpcE3GXMCod.jpg',
      vote_average: 7.5,
      vote_count: 452,
    },
    {
      backdrop_path: '/1Xm0WqoT0DjZm5JdG2V6YFabrOz.jpg',
      first_air_date: '2023-02-13',
      genre_ids: [10759, 35, 18],
      id: 215803,
      name: 'Batang Quiapo',
      origin_country: ['PH'],
      original_language: 'tl',
      original_name: 'Quiapo Kid',
      overview:
        'A young man rises to be one of the biggest outlaws in the neighborhood while he navigates his way in life to survive in Quiapo. Hoping to earn the affection of his parents, his feat draws him closer to the truth about his identity.',
      popularity: 2876.972,
      poster_path: '/9McqS8mgMf5NJCAKZIY6J1oOl8y.jpg',
      vote_average: 7.3,
      vote_count: 91,
    },
    {
      backdrop_path: '/gMDRoKAN4b4oPgkOcBoV4RW0LsD.jpg',
      first_air_date: '2022-05-02',
      genre_ids: [18],
      id: 216289,
      name: 'Pyar Ka Pehla Naam: Radha Mohan',
      origin_country: ['IN'],
      original_language: 'hi',
      original_name: 'Pyar Ka Pehla Naam: Radha Mohan',
      overview:
        'In modern-day Vrindavan, Mohan, a charming flute player, loses his spark post a tragedy. Radha, who admires him since her childhood days, decides to remind him of his true love, Lord Krishna.',
      popularity: 2821.51,
      poster_path: '/cGUF4aT3GCmCy3f84KKIpWS3kty.jpg',
      vote_average: 5.8,
      vote_count: 11,
    },
    {
      backdrop_path: '/hH4YaZuH89Hlyz0DEkf362Mj8gU.jpg',
      first_air_date: '2012-01-09',
      genre_ids: [35],
      id: 65701,
      name: 'Good Mythical Morning',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Good Mythical Morning',
      overview:
        'Two "Internetainers" (Rhett & Link) go far out and do the weirdest  things, giving you a daily dose of casual comedy every Monday-Friday.',
      popularity: 1892.582,
      poster_path: '/2Fja87aTeuXxTEI1MH2IuHHSsLq.jpg',
      vote_average: 7.1,
      vote_count: 41,
    },
    {
      backdrop_path: '/Ajku4m7jbMpCTEPr794Imv19mCA.jpg',
      first_air_date: '2005-10-17',
      genre_ids: [35, 10763],
      id: 4385,
      name: 'The Colbert Report',
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'The Colbert Report',
      overview:
        'The Colbert Report is an American satirical late night television program that airs Monday through Thursday on Comedy Central. It stars political humorist Stephen Colbert, a former correspondent for The Daily Show with Jon Stewart. The Colbert Report is a spin-off from and counterpart to The Daily Show that comments on politics and the media in a similar way. It satirizes conservative personality-driven political pundit programs, particularly Fox News\' The O\'Reilly Factor. The show focuses on a fictional anchorman character named Stephen Colbert, played by his real-life namesake. The character, described by Colbert as a "well-intentioned, poorly informed, high-status idiot", is a caricature of televised political pundits.\n\nThe Colbert Report has been nominated for seven Primetime Emmy Awards each in 2006, 2007, 2008, 2009, 2010, 2011, and 2012, two Television Critics Association Awards Awards, and two Satellite Awards. In 2013, it won two Emmys. It has been presented as non-satirical journalism in several instances, including by the Tom DeLay Legal Defense Trust and by Robert Wexler following his interview on the program. The Report received considerable media coverage following its debut on October 17, 2005, for Colbert\'s coining of the term "truthiness", which dictionary publisher Merriam-Webster named its 2006 Word of the Year.',
      popularity: 1931.274,
      poster_path: '/pn2CVXjOlR8kY5MgOTJjZ71IM0Q.jpg',
      vote_average: 6.9,
      vote_count: 239,
    },
    {
      backdrop_path: '/jtAh65bX9Ydy2NFkwTN6V9WSzWb.jpg',
      first_air_date: '2023-02-07',
      genre_ids: [18],
      id: 220525,
      name: 'Maitree',
      origin_country: [],
      original_language: 'hi',
      original_name: 'मैत्री',
      overview: '',
      popularity: 2478.076,
      poster_path: '/k57vsZ5Pl80WRR02ahgC3QLdhhL.jpg',
      vote_average: 7.7,
      vote_count: 36,
    },
    {
      backdrop_path: '/ohJTnu93hJ0Uonl86Wn3mOSlWXN.jpg',
      first_air_date: '2017-02-06',
      genre_ids: [10751, 35, 18],
      id: 91759,
      name: 'Come Home Love: Lo and Behold',
      origin_country: ['HK'],
      original_language: 'cn',
      original_name: '愛·回家之開心速遞',
      overview:
        "Hung Sue Gan starting from the bottom, established his own logistics company, which is now running smoothly. His only concern now are his three daughters. His eldest daughter has immigrated overseas. His second daughter Hung Yeuk Shui has reached the marriageable age, but has no hopes for marriage anytime soon. She is constantly bickering with her younger sister Hung Sum Yue, who is an honour student, over trivial matters, causing their father to not know whether to laugh or cry. Hung Sue Yan, Hung Sue Gan's brother, moves in with the family, temporarily ending his life as a nomadic photographer. He joins Hung Yeuk Shui's company and encounters Ko Pak Fei, the director of an online shop. The two appear to be former lovers, making for lots of laughter. Since Hung Sue Yan moved in, a series of strange events have occurred in the family. Upon investigation, the source is traced to Lung Ging Fung, a promising young man who is the son of department store mogul Lung Gam Wai.",
      popularity: 2293.601,
      poster_path: '/lgD4j9gUGmMckZpWWRJjorWqGVT.jpg',
      vote_average: 3.6,
      vote_count: 16,
    },
    {
      backdrop_path: '/2N4LXvTkUwPRkbvyzdmzvtnCHgR.jpg',
      first_air_date: '2023-07-25',
      genre_ids: [],
      id: 225660,
      name: 'Pira-Pirasong Paraiso',
      origin_country: ['PH'],
      original_language: 'tl',
      original_name: 'Pira-Pirasong Paraiso',
      overview:
        'A con artist takes on the job of pretending to be one of the long-lost sisters of a young and rich woman. As she navigates a world of cunning and lies, she learns about right and wrong, love and family, and spectacular truths about herself.',
      popularity: 2154.364,
      poster_path: '/gELcO56G9EsUj6LSjaDq8VvI8De.jpg',
      vote_average: 8,
      vote_count: 13,
    },
    {
      backdrop_path: '/9TXcHOeCsM8W3ZKKIKjdYUsRSeq.jpg',
      first_air_date: '2017-07-17',
      genre_ids: [80, 18],
      id: 72879,
      name: 'Tomorrow is Ours',
      origin_country: ['FR'],
      original_language: 'fr',
      original_name: 'Demain nous appartient',
      overview:
        'The story revolves around the people of Sète, France. Their lives are punctuated by family rivalries, romance and scenes from daily life, but also by plots involving police investigations, secrets and betrayals.',
      popularity: 2664.138,
      poster_path: '/3uU5uJzOX7xe7mn7YKpBM9oiEZO.jpg',
      vote_average: 6.6,
      vote_count: 36,
    },
    {
      backdrop_path: '/kdF7ZTktLHVVhAhI90uuzqlZqJI.jpg',
      first_air_date: '2023-06-06',
      genre_ids: [18],
      id: 228093,
      name: 'Titlie',
      origin_country: ['IN'],
      original_language: 'hi',
      original_name: 'Titlie',
      overview:
        'Obsessed by the notion of fairy tale love , Titlie marries her beau Garv . Soon , the picture - perfect romance turns abusive , forcing her to wrestle with reality .',
      popularity: 1979.142,
      poster_path: '/5kZi1LCFugNAeDCWOF3ornGNm2W.jpg',
      vote_average: 7.9,
      vote_count: 84,
    },
    {
      backdrop_path: '/5YfFibGB0Mjcl2RHUqztlPBCJp8.jpg',
      first_air_date: '2023-06-12',
      genre_ids: [18, 10766],
      id: 226411,
      name: 'Revenge is mine',
      origin_country: ['ES'],
      original_language: 'es',
      original_name: 'Mía es la venganza',
      overview: '',
      popularity: 1993.532,
      poster_path: '/bReUZMOPDSs4fpONIIQER6X4yNm.jpg',
      vote_average: 7.3,
      vote_count: 55,
    },
    {
      backdrop_path: '/aWPhMZ0P2DyfWB7k5NXhGHSZHGC.jpg',
      first_air_date: '2023-05-08',
      genre_ids: [18, 80, 10766],
      id: 209265,
      name: 'Land of Desire',
      origin_country: ['BR'],
      original_language: 'pt',
      original_name: 'Terra e Paixão',
      overview:
        'The saga of a woman, guided by the power of love and moved by the desire for justice, who crosses paths with a family divided by ambition and many secrets.',
      popularity: 1961.631,
      poster_path: '/5kCMJ0vVzN9PsoamKctNnUz68Q2.jpg',
      vote_average: 6.6,
      vote_count: 115,
    },
    {
      backdrop_path: '/5e1MxLWTJh6n4qtYz0vlevOK6qW.jpg',
      first_air_date: '2023-07-03',
      genre_ids: [18, 10766],
      id: 229932,
      name: 'Pyaar Ka Pehla Adhyaya  - Shiv Shakti',
      origin_country: ['IN'],
      original_language: 'hi',
      original_name: 'Pyaar Ka Pehla Adhyaya  - Shiv Shakti',
      overview:
        'Shiv has a rewarding career as a doctor, but his personal life is in tatters. Shakti, an orphan, is a nurturer by nature. Will Shakti heal a broken Shiv?',
      popularity: 1882.483,
      poster_path: '/jHK9bCDefHq43cHvMVUM7SLumYF.jpg',
      vote_average: 8.1,
      vote_count: 50,
    },
  ];

//   constructor() {}

//   ngOnInit(): void {}

// }
allData: any[] = this.allTvs;

  private searchval: string = '';
  showMoviesDetails: boolean = true;

  constructor() {}

  set searchValue(value: string) {
    this.searchval = value;
    this.searchallTvs(value);
  }

  ngOnInit(): void {}

  toggleDetails(tvId: number) {
    console.log(tvId);
    
    for (const item of this.allTvs) {
      if (item.id == tvId) {
        item.toggleDiscription = !item.toggleDiscription;
      }
    }
  }

  searchallTvs(tvTitle: string) {
    if (tvTitle == '') {
      this.allTvs = this.allData;
    } else {
      this.allTvs = this.allTvs.filter((tv) => {
        if (
          tv.title
            .toLocaleLowerCase()
            .includes(tvTitle.toLocaleLowerCase())
        ) {
          return tv;
        }
      });
    }
  }

}
