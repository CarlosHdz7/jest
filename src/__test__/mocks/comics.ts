import { IComic, ResultsEntityComic } from '../../interfaces/IComic';

const comicsMock: IComic = {
  code: 200,
  status: 'Ok',
  copyright: '© 2021 MARVEL',
  attributionText: 'Data provided by Marvel. © 2021 MARVEL',
  attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2021 MARVEL</a>',
  etag: '67f159208f0e2cd5d7c4921a972671a08c2fbaf5',
  data: {
    offset: 0,
    limit: 20,
    total: 49501,
    count: 20,
    results: [
      {
        id: 82967,
        digitalId: 0,
        title: 'Marvel Previews (2017)',
        issueNumber: 0,
        variantDescription: '',
        description: null,
        modified: '2019-11-07T08:46:15-0500',
        isbn: '',
        upc: '75960608839302811',
        diamondCode: '',
        ean: '',
        issn: '',
        format: '',
        pageCount: 112,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/82967',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/82967/marvel_previews_2017?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/23665',
          name: 'Marvel Previews (2017 - Present)',
        },
        variants: null,
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2099-10-30T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2019-10-07T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        images: [],
        creators: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82967/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10021',
              name: 'Jim Nausedas',
              role: 'editor',
            },
          ],
          returned: 1,
        },
        characters: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1308/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man (Peter Parker)',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82967/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/183698',
              name: 'cover from Marvel Previews (2017)',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/183699',
              name: 'story from Marvel Previews (2017)',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82967/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 82965,
        digitalId: 0,
        title: 'Marvel Previews (2017)',
        issueNumber: 0,
        variantDescription: '',
        description: 'null',
        modified: '2019-08-21T17:11:27-0400',
        isbn: '',
        upc: '75960608839302611',
        diamondCode: 'JUL190068',
        ean: '',
        issn: '',
        format: '',
        pageCount: 152,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/82965',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/82965/marvel_previews_2017?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/23665',
          name: 'Marvel Previews (2017 - Present)',
        },
        variants: null,
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2099-08-28T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2019-08-05T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        images: [],
        creators: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82965/creators',
          items: [],
          returned: 0,
        },
        characters: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82965/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82965/stories',
          items: [],
          returned: 0,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82965/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 82970,
        digitalId: 0,
        title: 'Marvel Previews (2017)',
        issueNumber: 0,
        variantDescription: '',
        description: '',
        modified: '2020-02-07T09:35:32-0500',
        isbn: '',
        upc: '75960608839303111',
        diamondCode: '',
        ean: '',
        issn: '',
        format: '',
        pageCount: 112,
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/82970',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/82970/marvel_previews_2017?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Marvel-Previews-0/digital-comic/52952?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/23665',
          name: 'Marvel Previews (2017 - Present)',
        },
        variants: null,
        dates: [
          {
            type: 'onsaleDate',
            date: '2099-01-29T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2020-01-06T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82970/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10021',
              name: 'Jim Nausedas',
              role: 'editor',
            },
          ],
          returned: 1,
        },
        characters: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82970/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82970/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/183704',
              name: 'cover from Marvel Previews (2017)',
              type: 'cover',
            },
          ],
          returned: 1,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/82970/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 1308,
        digitalId: 0,
        title: 'Marvel Age Spider-Man Vol. 2: Everyday Hero (Digest)',
        issueNumber: 0,
        variantDescription: '',
        description: "\"The Marvel Age of Comics continues! This time around, Spidey meets his match against such classic villains as Electro and the Lizard, and faces the return of one of his first foes: the Vulture! Plus: Spider-Man vs. the Living Brain, Peter Parker's fight with Flash Thompson, and the wall-crawler tackles the high-flying Human Torch!\"",
        modified: '2018-01-22T15:42:11-0500',
        isbn: '0-7851-1451-3',
        upc: '5960611451-00111',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Digest',
        pageCount: 96,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "\"The Marvel Age of Comics continues! This time around, Spidey meets his match against such classic villains as Electro and the Lizard, and faces the return of one of his first foes: the Vulture! Plus: Spider-Man vs. the Living Brain, Peter Parker's fight with Flash Thompson, and the wall-crawler tackles the high-flying Human Torch!\"",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/1308',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/collection/1308/marvel_age_spider-man_vol_2_everyday_hero_digest?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/1242',
          name: 'Marvel Age Spider-Man Vol. 2: Everyday Hero (2004)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2029-12-31T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 5.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/20/4bc665483c3aa',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/90/5a664c954a55b',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/80/5a6648f8aaccc',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/c0/5a6648efbc46c',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/4/00/5a6648c368f52',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/40/4bc689a4ce796',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/c0/4bc684889f8ed',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/50/4bc6809bdc81b',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/20/4bc665483c3aa',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 10,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1308/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/694',
              name: 'Mark Brooks',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/434',
              name: 'Michael Ryan',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/424',
              name: 'Udon Comics',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/692',
              name: 'Pat Davidson',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/689',
              name: 'Derek Fridolfs',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/6743',
              name: 'Rich Perrotta',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/682',
              name: 'Todd Dezago',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/326',
              name: 'Daniel Quantz',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/691',
              name: 'Jonboy Meyers',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/688',
              name: 'Michael OHare',
              role: 'penciller',
            },
          ],
          returned: 10,
        },
        characters: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1308/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man (Peter Parker)',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 9,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1308/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2759',
              name: 'Cover #2759',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2760',
              name: 'Interior #2760',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2763',
              name: 'Cover #2763',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2764',
              name: 'Interior #2764',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2769',
              name: 'Cover #2769',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2770',
              name: 'Interior #2770',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2771',
              name: 'Cover #2771',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2772',
              name: 'Interior #2772',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/65682',
              name: 'MARVEL AGE SPIDER-MAN VOL. 2: EVERYDAY HERO 0 cover',
              type: 'cover',
            },
          ],
          returned: 9,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1308/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 1689,
        digitalId: 0,
        title: 'Official Handbook of the Marvel Universe (2004) #10 (MARVEL KNIGHTS)',
        issueNumber: 10,
        variantDescription: 'MARVEL KNIGHTS',
        description: "On the mean streets of the Marvel Universe, the kid gloves come off. Guardian devils, vengeance-seeking vigilantes and enigmatic assassins stalk the city's dark underbelly _ and the urban action unfolds with gritty intensity. The newest entry in Marvel's best-selling Handbook series, OHOTMUMK04 includes in-depth bios on a host of the House's edgiest icons - from Black Panther to Shang-Chi!",
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '5960605694-00111',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "On the mean streets of the Marvel Universe, the kid gloves come off. Guardian devils, vengeance-seeking vigilantes and enigmatic assassins stalk the city's dark underbelly _ and the urban action unfolds with gritty intensity. The newest entry in Marvel's best-selling Handbook series, OHOTMUMK04 includes in-depth bios on a host of the House's edgiest icons - from Black Panther to Shang-Chi!",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/1689',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/1689/official_handbook_of_the_marvel_universe_2004_10_marvel_knights/marvel_knights?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/787',
          name: 'Official Handbook of the Marvel Universe (2004)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2029-12-31T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/30/4bc64df4105b9',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/30/4bc64df4105b9',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 9,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1689/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/887',
              name: 'Ronald Byrd',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/902',
              name: 'Jeff Christiansen',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/903',
              name: 'Anthony Flamini',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/888',
              name: 'Michael Hoskin',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/897',
              name: 'Sean Mcquaid',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/394',
              name: 'Eric J. Moreels',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/900',
              name: 'Barry Reese',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/896',
              name: 'Stuart Vandal',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/490',
              name: 'Pat Lee',
              role: 'penciller (cover)',
            },
          ],
          returned: 9,
        },
        characters: {
          available: 14,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1689/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009156',
              name: 'Apocalypse',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009197',
              name: 'Blink',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009243',
              name: 'Colossus',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009313',
              name: 'Gambit',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009349',
              name: 'Holocaust (Age of Apocalypse)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009417',
              name: 'Magneto',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009447',
              name: 'Mister Sinister',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009546',
              name: 'Rogue',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010969',
              name: 'Sabretooth (Age of Apocalypse)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010975',
              name: 'Shadowcat (Age of Apocalypse)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010976',
              name: 'Silver Samurai (Age of Apocalypse)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010979',
              name: 'Storm (Age of Apocalypse)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009636',
              name: 'Sunfire',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009718',
              name: 'Wolverine',
            },
          ],
          returned: 14,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1689/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4612',
              name: 'Cover #4612',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4613',
              name: 'Interior #4613',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1689/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 331,
        digitalId: 0,
        title: 'Gun Theory (2003) #4',
        issueNumber: 4,
        variantDescription: '',
        description: "The phone rings, and killer-for-hire Harvey embarks on another hit. But nothing's going right this job. There's little room for error in the business of killing - so what happens when one occurs?\r\n32 PGS./ PARENTAL ADVISORY ...$2.50",
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '5960605468-00111',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "The phone rings, and killer-for-hire Harvey embarks on another hit. But nothing's going right this job. There's little room for error in the business of killing - so what happens when one occurs?\r\n32 PGS./ PARENTAL ADVISORY ...$2.50",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/331',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/331/gun_theory_2003_4?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/649',
          name: 'Gun Theory (2003)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2029-12-31T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 2.5,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/331/creators',
          items: [],
          returned: 0,
        },
        characters: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/331/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/331/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2263',
              name: 'Interior #2263',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/65423',
              name: 'GUN THEORY 4 cover',
              type: 'cover',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/331/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 428,
        digitalId: 0,
        title: 'Ant-Man (2003) #4',
        issueNumber: 4,
        variantDescription: '',
        description: "Ant-Man digs deeper into finding out who is leaking those dirty little secrets that are threatening our national security. And who's better at uncovering dirty LITTLE secrets than him??",
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '5960605482-00411',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "Ant-Man digs deeper into finding out who is leaking those dirty little secrets that are threatening our national security. And who's better at uncovering dirty LITTLE secrets than him??",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/428',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/428/ant-man_2003_4?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/551',
          name: 'Ant-Man (2003 - 2004)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2029-12-31T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 2.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/4/20/4bc697c680890',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/4/20/4bc697c680890',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/428/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/600',
              name: 'Clayton Crain',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/344',
              name: 'Daniel Way',
              role: 'writer',
            },
          ],
          returned: 2,
        },
        characters: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/428/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/428/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2331',
              name: 'Cover #2331',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2332',
              name: 'Interior #2332',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/428/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 3627,
        digitalId: 0,
        title: 'Storm (2006)',
        issueNumber: 0,
        variantDescription: '',
        description: "The epic, untold love story between Marvel's two pre-eminent Black super heroes -- Storm and the Black Panther -- is finally told, as only New York Times best-selling author Eric Jerome Dickey can do it!  An orphaned street urchin, living by her wits on the unforgiving plains of Africa as she struggles to harness her slowly-developing mutant powers...A warrior Prince, embarking on his rite of passage as he ponders the great responsibility in his future...And a crew of ruthless mercenaries who'll stop at nothing to capture an elusive creature of legend -- the fabled wind-rider.  What sparks occur when their paths intersect?  Don't miss out on this story, True Believer, as it builds to a July Event that will shake the entire Marvel Universe.\r<br>\r<br>32 PGS./T+ SUGGESTED FOR TEENS AND UP ...$2.99\r<br>",
        modified: '2015-01-29T20:04:55-0500',
        isbn: '',
        upc: '',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "The epic, untold love story between Marvel's two pre-eminent Black super heroes -- Storm and the Black Panther -- is finally told, as only New York Times best-selling author Eric Jerome Dickey can do it!  An orphaned street urchin, living by her wits on the unforgiving plains of Africa as she struggles to harness her slowly-developing mutant powers...A warrior Prince, embarking on his rite of passage as he ponders the great responsibility in his future...And a crew of ruthless mercenaries who'll stop at nothing to capture an elusive creature of legend -- the fabled wind-rider.  What sparks occur when their paths intersect?  Don't miss out on this story, True Believer, as it builds to a July Event that will shake the entire Marvel Universe.\r<br>\r<br>32 PGS./T+ SUGGESTED FOR TEENS AND UP ...$2.99\r<br>",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/3627',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/3627/storm_2006?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/357',
          name: 'Storm (2006)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2029-12-31T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/3627/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/370',
              name: 'Eric Jerome Dickey',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/371',
              name: 'David Hine',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/243',
              name: 'Mike Mayhew',
              role: 'penciller (cover)',
            },
          ],
          returned: 3,
        },
        characters: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/3627/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009629',
              name: 'Storm',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/3627/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/496',
              name: 'Cover #496',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/497',
              name: 'Interior #497',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/3627/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 291,
        digitalId: 0,
        title: 'Ant-Man (2003) #1',
        issueNumber: 1,
        variantDescription: '',
        description: "Size does matter.  And no one knows this more than Hank Pym - a.k.a. Ant-Man. Got a problem with Galactus? Call the FF. Got a problem with, say, mind-controlled cockroaches? Then Ant-Man's your man! And needless to say, it's done a number on our diminutive hero's self-esteem.  When Ant-Man is tapped to infiltrate an international spy ring that has been siphoning secrets out of Washington, he jumps at the chance - unaware that he's being used as a pawn in a larger game of espionage.\r\n32 PGS./PARENTAL ADVISORY...$2.99",
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '5960605396-01811',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "Size does matter.  And no one knows this more than Hank Pym - a.k.a. Ant-Man. Got a problem with Galactus? Call the FF. Got a problem with, say, mind-controlled cockroaches? Then Ant-Man's your man! And needless to say, it's done a number on our diminutive hero's self-esteem.  When Ant-Man is tapped to infiltrate an international spy ring that has been siphoning secrets out of Washington, he jumps at the chance - unaware that he's being used as a pawn in a larger game of espionage.\r\n32 PGS./PARENTAL ADVISORY...$2.99",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/291',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/291/ant-man_2003_1?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/551',
          name: 'Ant-Man (2003 - 2004)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2029-12-31T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 2.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/e0/4bc6a2497684e',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/e0/4bc6a2497684e',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/291/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/600',
              name: 'Clayton Crain',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/344',
              name: 'Daniel Way',
              role: 'writer',
            },
          ],
          returned: 2,
        },
        characters: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/291/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/291/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1806',
              name: 'Cover #1806',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1807',
              name: 'Interior #1807',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/291/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 376,
        digitalId: 0,
        title: 'Ant-Man (2003) #3',
        issueNumber: 3,
        variantDescription: '',
        description: "When Hank Pym - a.k.a. Ant-Man - is tapped by U.S. Intelligence to infiltrate an international spy ring that has been siphoning secrets out of Washington, the diminutive hero jumps at the chance - unaware that he's being used as a pawn in a larger game of espionage.\r32 PGS./PARENTAL ADVISORY...$2.99",
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '5960605396-02011',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "When Hank Pym - a.k.a. Ant-Man - is tapped by U.S. Intelligence to infiltrate an international spy ring that has been siphoning secrets out of Washington, the diminutive hero jumps at the chance - unaware that he's being used as a pawn in a larger game of espionage.\r32 PGS./PARENTAL ADVISORY...$2.99",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/376',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/376/ant-man_2003_3?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/551',
          name: 'Ant-Man (2003 - 2004)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2029-12-31T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 2.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/70/4bc69c7e9b9d7',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/70/4bc69c7e9b9d7',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/376/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/600',
              name: 'Clayton Crain',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/344',
              name: 'Daniel Way',
              role: 'writer',
            },
          ],
          returned: 2,
        },
        characters: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/376/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/376/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1810',
              name: 'Cover #1810',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1811',
              name: 'Interior #1811',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/376/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 1994,
        digitalId: 0,
        title: 'Official Handbook of the Marvel Universe (2004) #13 (TEAMS)',
        issueNumber: 13,
        variantDescription: 'TEAMS',
        description: "Heavy-hitting heroes unite! This Official Handbook contains in-depth bios on more than 30 of the Marvel Universe's most awesome assemblages - including the Defenders, Power Pack and the New Thunderbolts! Plus: An all-new cover by superstar artist Tom Grummett, digitally painted by Morry Hollowell.\r<br>48 PGS./All Ages ...$3.99\r<br>",
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '5960605695-00111',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "Heavy-hitting heroes unite! This Official Handbook contains in-depth bios on more than 30 of the Marvel Universe's most awesome assemblages - including the Defenders, Power Pack and the New Thunderbolts! Plus: An all-new cover by superstar artist Tom Grummett, digitally painted by Morry Hollowell.\r<br>48 PGS./All Ages ...$3.99\r<br>",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/1994',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/1994/official_handbook_of_the_marvel_universe_2004_13_teams/teams?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/787',
          name: 'Official Handbook of the Marvel Universe (2004)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2029-12-31T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/20/4bc63a47b8dcb',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/20/4bc63a47b8dcb',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 10,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1994/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/887',
              name: 'Ronald Byrd',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/902',
              name: 'Jeff Christiansen',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/903',
              name: 'Anthony Flamini',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/930',
              name: 'Richard Green',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/888',
              name: 'Michael Hoskin',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/897',
              name: 'Sean Mcquaid',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/394',
              name: 'Eric J. Moreels',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/899',
              name: 'Mark OEnglish',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/896',
              name: 'Stuart Vandal',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/483',
              name: 'Tom Grummett',
              role: 'penciller (cover)',
            },
          ],
          returned: 10,
        },
        characters: {
          available: 14,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1994/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009156',
              name: 'Apocalypse',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009197',
              name: 'Blink',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009243',
              name: 'Colossus',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009313',
              name: 'Gambit',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009349',
              name: 'Holocaust (Age of Apocalypse)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009417',
              name: 'Magneto',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009447',
              name: 'Mister Sinister',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009546',
              name: 'Rogue',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010969',
              name: 'Sabretooth (Age of Apocalypse)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010975',
              name: 'Shadowcat (Age of Apocalypse)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010976',
              name: 'Silver Samurai (Age of Apocalypse)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010979',
              name: 'Storm (Age of Apocalypse)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009636',
              name: 'Sunfire',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009718',
              name: 'Wolverine',
            },
          ],
          returned: 14,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1994/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4614',
              name: 'Cover #4614',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4615',
              name: 'Interior #4615',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1994/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 1158,
        digitalId: 0,
        title: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB (Trade Paperback)',
        issueNumber: 0,
        variantDescription: '',
        description: "The Ultimates vs. the Ultimate X-Men: the battle begins. When the X-Men do the worst thing they could to humanity, the government orders Captain America, Iron Man, Thor and the rest of the Ultimates to bring them down. A small but lethal army, the Ultimates were created to face these and other newly rising threats to mankind. But the X-Men's founder, Professor X, hasn't been training his students for nothing -- and the youngs mutants just might take out the Ultimates first.",
        modified: '2018-03-12T16:56:16-0400',
        isbn: '0-7851-1129-8',
        upc: '',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Trade Paperback',
        pageCount: 112,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "The Ultimates vs. the Ultimate X-Men: the battle begins. When the X-Men do the worst thing they could to humanity, the government orders Captain America, Iron Man, Thor and the rest of the Ultimates to bring them down. A small but lethal army, the Ultimates were created to face these and other newly rising threats to mankind. But the X-Men's founder, Professor X, hasn't been training his students for nothing -- and the youngs mutants just might take out the Ultimates first.",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/1158',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/collection/1158/ultimate_x-men_vol_5_ultimate_war_tpb_trade_paperback?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/216',
          name: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB (1999)',
        },
        variants: [],
        collections: [],
        collectedIssues: [
        ],
        dates: [
          {
            type: 'onsaleDate',
            date: '2029-12-31T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '1961-01-01T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 9.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/f0/4bc6670c80007',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/f0/4bc6670c80007',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 9,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1158/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/232',
              name: 'Chris Bachalo',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
              name: 'Virtual Calligr',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/6170',
              name: 'Olivier Coipel',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/312',
              name: 'Mike Deodato',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/181',
              name: 'Geoff Johns',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/52',
              name: 'Bruce Jones',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/88',
              name: 'Mark Millar',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/479',
              name: 'Paul Mounts',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/427',
              name: 'Tim Townsend',
              role: 'inker',
            },
          ],
          returned: 9,
        },
        characters: {
          available: 17,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1158/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010908',
              name: 'Beast (Ultimate)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010911',
              name: 'Black Widow (Ultimate)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010913',
              name: 'Captain America (Ultimate)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010917',
              name: 'Colossus (Ultimate)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011131',
              name: 'Hawkeye (Ultimate)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011005',
              name: 'Hulk (Ultimate)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010933',
              name: 'Iceman (Ultimate)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010946',
              name: 'Jean Grey (Ultimate)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010943',
              name: 'Magneto (Ultimate)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011007',
              name: 'Nick Fury (Ultimate)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010963',
              name: 'Quicksilver (Ultimate)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010966',
              name: 'Rogue (Ultimate)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010971',
              name: 'Scarlet Witch (Ultimate)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010978',
              name: 'Storm (Ultimate)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011025',
              name: 'Thor (Ultimate)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009689',
              name: 'Vanisher (Ultimate)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010992',
              name: 'Wasp (Ultimate)',
            },
          ],
          returned: 17,
        },
        stories: {
          available: 9,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1158/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/270',
              name: 'The Ultimates vs. the Ultimate X-Men: the battle begins. When the X-Men do the worst thing they could to humanity, the governmen',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/39348',
              name: 'Interior #39348',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/39349',
              name: 'Free Preview of Hulk #50',
              type: 'promo',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/39351',
              name: 'Interior #39351',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/39352',
              name: 'Free Preview of Hulk #50',
              type: 'promo',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/39354',
              name: 'Interior #39354',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/39355',
              name: 'Free Preview of Avengers 65',
              type: 'promo',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/39357',
              name: 'Interior #39357',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/65260',
              name: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR 0 cover',
              type: 'cover',
            },
          ],
          returned: 9,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1158/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 1220,
        digitalId: 0,
        title: 'Amazing Spider-Man 500 Covers Slipcase - Book II (Trade Paperback)',
        issueNumber: 0,
        variantDescription: '',
        description: null,
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Trade Paperback',
        pageCount: 0,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/1220',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/collection/1220/amazing_spider-man_500_covers_slipcase_-_book_ii_trade_paperback?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/277',
          name: 'Amazing Spider-Man 500 Covers Slipcase - Book II (2003)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2029-12-31T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        images: [],
        creators: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1220/creators',
          items: [],
          returned: 0,
        },
        characters: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1220/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1220/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/351',
              name: 'Interior #351',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/65310',
              name: 'AMAZING SPIDER-MAN 500 COVERS SLIPCASE - BOOK II 0 cover',
              type: 'cover',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1220/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 1003,
        digitalId: 0,
        title: 'Sentry, the (Trade Paperback)',
        issueNumber: 0,
        variantDescription: '',
        description: 'On the edge of alcoholism and a failed marriage, Bob Reynolds wakes up to discover his true nature. A forgotten hero, he must unravel the conspiracy to erase his memory from mankind before an evil entity returns.',
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '0-7851-0799-1',
        upc: '',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Trade Paperback',
        pageCount: 240,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'On the edge of alcoholism and a failed marriage, Bob Reynolds wakes up to discover his true nature. A forgotten hero, he must unravel the conspiracy to erase his memory from mankind before an evil entity returns.',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/1003',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/collection/1003/sentry_the_trade_paperback?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/65',
          name: 'Sentry, the (1999)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2029-12-31T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 9.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/c0/4bc66d78f1bee',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/c0/4bc66d78f1bee',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1003/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/55',
              name: 'Paul Jenkins',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/56',
              name: 'Jae Lee',
              role: 'penciller',
            },
          ],
          returned: 2,
        },
        characters: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1003/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1003/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/66',
              name: 'On the edge of alcoholism and a failed marriage, Bob Reynolds wakes up to discover his true nature. A forgotten hero, he must un',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/65143',
              name: 'SENTRY, THE TPB 0 cover',
              type: 'cover',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1003/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 384,
        digitalId: 0,
        title: 'Gun Theory (2003) #3',
        issueNumber: 3,
        variantDescription: '',
        description: "The phone rings, and killer-for-hire Harvey embarks on another hit. But nothing's going right this job. There's little room for error in the business of killing - so what happens when one occurs?\r\n\r\n32 PGS./ PARENTAL ADVISORY ...$2.50",
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '5960605492-00411',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "The phone rings, and killer-for-hire Harvey embarks on another hit. But nothing's going right this job. There's little room for error in the business of killing - so what happens when one occurs?\r\n\r\n32 PGS./ PARENTAL ADVISORY ...$2.50",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/384',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/384/gun_theory_2003_3?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/649',
          name: 'Gun Theory (2003)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2029-12-31T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 2.5,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/60/4bc69f11baf75',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/384/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/576',
              name: 'Jon Proctor',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/344',
              name: 'Daniel Way',
              role: 'writer',
            },
          ],
          returned: 2,
        },
        characters: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/384/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/384/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2538',
              name: 'Cover #2538',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2539',
              name: 'Interior #2539',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/384/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 1886,
        digitalId: 0,
        title: 'Official Handbook of the Marvel Universe (2004) #12 (SPIDER-MAN)',
        issueNumber: 12,
        variantDescription: 'SPIDER-MAN',
        description: "The spectacular sequel to last year's OFFICIAL HANDBOOK OF THE MARVEL UNIVERSE: SPIDER-MAN 2004, this Official Handbook contains in-depth bios on more than 30 of the wisecracking web-slinger's closest allies and most infamous enemies - including the Stacy Twins, fresh from the pages of AMAZING SPIDER-MAN, and Toxin, in time for this month's TOXIN #1! Plus: An all-new cover by superstar artist Tom Raney, digitally painted by Morry Hollowell.\r<br>48 PGS./Marvel PSR ...$3.99\r<br>",
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '5960605667-00111',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "The spectacular sequel to last year's OFFICIAL HANDBOOK OF THE MARVEL UNIVERSE: SPIDER-MAN 2004, this Official Handbook contains in-depth bios on more than 30 of the wisecracking web-slinger's closest allies and most infamous enemies - including the Stacy Twins, fresh from the pages of AMAZING SPIDER-MAN, and Toxin, in time for this month's TOXIN #1! Plus: An all-new cover by superstar artist Tom Raney, digitally painted by Morry Hollowell.\r<br>48 PGS./Marvel PSR ...$3.99\r<br>",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/1886',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/1886/official_handbook_of_the_marvel_universe_2004_12_spider-man/spider-man?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/787',
          name: 'Official Handbook of the Marvel Universe (2004)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2029-12-31T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/4bc64020a4ccc',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/4bc64020a4ccc',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 12,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1886/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/907',
              name: 'Heather Buchanan',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/887',
              name: 'Ronald Byrd',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/902',
              name: 'Jeff Christiansen',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/909',
              name: 'Eric Engelhard',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/906',
              name: 'Mike Fichera',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/910',
              name: 'Jason Godin',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/897',
              name: 'Sean Mcquaid',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/900',
              name: 'Barry Reese',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/905',
              name: 'Al Sjoerdsma',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/911',
              name: 'Bryan Thiessen',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/908',
              name: 'Kerry Wilkinson',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/444',
              name: 'Tom Raney',
              role: 'penciller (cover)',
            },
          ],
          returned: 12,
        },
        characters: {
          available: 14,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1886/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009156',
              name: 'Apocalypse',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009197',
              name: 'Blink',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009243',
              name: 'Colossus',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009313',
              name: 'Gambit',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009349',
              name: 'Holocaust (Age of Apocalypse)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009417',
              name: 'Magneto',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009447',
              name: 'Mister Sinister',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009546',
              name: 'Rogue',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010969',
              name: 'Sabretooth (Age of Apocalypse)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010975',
              name: 'Shadowcat (Age of Apocalypse)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010976',
              name: 'Silver Samurai (Age of Apocalypse)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010979',
              name: 'Storm (Age of Apocalypse)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009636',
              name: 'Sunfire',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009718',
              name: 'Wolverine',
            },
          ],
          returned: 14,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1886/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4430',
              name: 'Cover #4430',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4431',
              name: 'Interior #4431',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1886/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 183,
        digitalId: 0,
        title: 'Startling Stories: The Incorrigible Hulk (2004) #1',
        issueNumber: 1,
        variantDescription: '',
        description: 'For Doctor Bruce Banner life is anything but normal. But what happens when two women get between him and his alter ego, the Incorrigible Hulk? Hulk confused! \r\nIndy superstar Peter Bagge (THE MEGALOMANIACAL SPIDER-MAN) takes a satirical jab at the Hulk mythos with a tale of dames, debauchery and destruction.\r\n32 PGS./MARVEL PSR...$2.99',
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '5960605429-00811',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'For Doctor Bruce Banner life is anything but normal. But what happens when two women get between him and his alter ego, the Incorrigible Hulk? Hulk confused! \r\nIndy superstar Peter Bagge (THE MEGALOMANIACAL SPIDER-MAN) takes a satirical jab at the Hulk mythos with a tale of dames, debauchery and destruction.\r\n32 PGS./MARVEL PSR...$2.99',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/183',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/183/startling_stories_the_incorrigible_hulk_2004_1?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/565',
          name: 'Startling Stories: The Incorrigible Hulk (2004)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2029-12-31T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 2.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        images: [],
        creators: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/183/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/6291',
              name: 'Peter Bagge',
              role: 'penciller (cover)',
            },
          ],
          returned: 1,
        },
        characters: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/183/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009351',
              name: 'Hulk',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/183/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1891',
              name: 'Cover #1891',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1892',
              name: 'Interior #1892',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/183/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 1332,
        digitalId: 0,
        title: 'X-Men: Days of Future Past (Trade Paperback)',
        issueNumber: 0,
        variantDescription: '',
        description: "\"Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!? \"",
        modified: '2017-02-28T14:52:22-0500',
        isbn: '0-7851-1560-9',
        upc: '5960611560-00111',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Trade Paperback',
        pageCount: 144,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "\"Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!? \"",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/1332',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/collection/1332/x-men_days_of_future_past_trade_paperback?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/1327',
          name: 'X-Men: Days of Future Past (2004)',
        },
        variants: [],
        collections: [],
        collectedIssues: [
        ],
        dates: [
          {
            type: 'onsaleDate',
            date: '2029-12-31T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 9.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/b0/4bc66463ef7f0',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1332/creators',
          items: [],
          returned: 0,
        },
        characters: {
          available: 10,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1332/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009159',
              name: 'Archangel',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009164',
              name: 'Avalanche',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009199',
              name: 'Blob',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009243',
              name: 'Colossus',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009271',
              name: 'Destiny',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009472',
              name: 'Nightcrawler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009522',
              name: 'Pyro',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009629',
              name: 'Storm',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009718',
              name: 'Wolverine',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009726',
              name: 'X-Men',
            },
          ],
          returned: 10,
        },
        stories: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1332/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/15472',
              name: 'Days of Future Past',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/27788',
              name: 'Mind Out of Time!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/65738',
              name: 'X-MEN: DAYS OF FUTURE PAST TPB 0 cover',
              type: 'cover',
            },
          ],
          returned: 3,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1332/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 1749,
        digitalId: 0,
        title: 'Official Handbook of the Marvel Universe (2004) #11 (X-MEN - AGE OF APOCALYPSE)',
        issueNumber: 11,
        variantDescription: 'X-MEN - AGE OF APOCALYPSE',
        description: 'Your complete guide to the epic saga! This Official Handbook includes in-depth bios on more than 40 denizens of the Age of Apocalypse - from Abyss to Weapon X! Plus: An all-new cover by superstar-in-waiting Mark Brooks, digitally painted by Justin Ponsor.\r<br>48 PGS./Marvel PSR ...$3.99\r<br>',
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '5960605625-00111',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'Your complete guide to the epic saga! This Official Handbook includes in-depth bios on more than 40 denizens of the Age of Apocalypse - from Abyss to Weapon X! Plus: An all-new cover by superstar-in-waiting Mark Brooks, digitally painted by Justin Ponsor.\r<br>48 PGS./Marvel PSR ...$3.99\r<br>',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/1749',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/1749/official_handbook_of_the_marvel_universe_2004_11_x-men_-_age_of_apocalypse/x-men_-_age_of_apocalypse?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/787',
          name: 'Official Handbook of the Marvel Universe (2004)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2029-12-31T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/b0/4bc6494ed6eb4',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/b0/4bc6494ed6eb4',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1749/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/694',
              name: 'Mark Brooks',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/684',
              name: 'Mike Raicht',
              role: 'writer',
            },
          ],
          returned: 2,
        },
        characters: {
          available: 14,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1749/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009156',
              name: 'Apocalypse',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009197',
              name: 'Blink',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009243',
              name: 'Colossus',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009313',
              name: 'Gambit',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009349',
              name: 'Holocaust (Age of Apocalypse)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009417',
              name: 'Magneto',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009447',
              name: 'Mister Sinister',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009546',
              name: 'Rogue',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010969',
              name: 'Sabretooth (Age of Apocalypse)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010975',
              name: 'Shadowcat (Age of Apocalypse)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010976',
              name: 'Silver Samurai (Age of Apocalypse)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010979',
              name: 'Storm (Age of Apocalypse)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009636',
              name: 'Sunfire',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009718',
              name: 'Wolverine',
            },
          ],
          returned: 14,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1749/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4153',
              name: 'Cover #4153',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4154',
              name: 'Interior #4154',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/1749/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 323,
        digitalId: 0,
        title: 'Ant-Man (2003) #2',
        issueNumber: 2,
        variantDescription: '',
        description: 'Ant-Man digs deeper to find out who is leaking secret information that threatens our national security.\r\n32 pgs./PARENTAL ADVISORY...$2.99',
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '5960605396-01911',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'Ant-Man digs deeper to find out who is leaking secret information that threatens our national security.\r\n32 pgs./PARENTAL ADVISORY...$2.99',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/323',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/323/ant-man_2003_2?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/551',
          name: 'Ant-Man (2003 - 2004)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2029-12-31T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 2.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/20/4bc69f33cafc0',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/20/4bc69f33cafc0',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/323/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/600',
              name: 'Clayton Crain',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/344',
              name: 'Daniel Way',
              role: 'writer',
            },
          ],
          returned: 2,
        },
        characters: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/323/characters',
          items: [],
          returned: 0,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/323/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1808',
              name: 'Cover #1808',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1809',
              name: 'Interior #1809',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/323/events',
          items: [],
          returned: 0,
        },
      },
    ],
  },
};

const comicMock: ResultsEntityComic = {
  id: 82970,
  digitalId: 0,
  title: 'Marvel Previews (2017)',
  issueNumber: 0,
  variantDescription: '',
  description: null,
  modified: '2020-02-07T09:35:32-0500',
  isbn: '',
  upc: '75960608839303111',
  diamondCode: '',
  ean: '',
  issn: '',
  format: '',
  pageCount: 112,
  textObjects: [],
  resourceURI: 'http://gateway.marvel.com/v1/public/comics/82970',
  urls: [
    {
      type: 'detail',
      url: 'http://marvel.com/comics/issue/82970/marvel_previews_2017?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
    },
    {
      type: 'purchase',
      url: 'http://comicstore.marvel.com/Marvel-Previews-0/digital-comic/52952?utm_campaign=apiRef&utm_source=40f0d934c3f0f36e107eaaea86be8e27',
    },
  ],
  series: {
    resourceURI: 'http://gateway.marvel.com/v1/public/series/23665',
    name: 'Marvel Previews (2017 - Present)',
  },
  variants: null,
  collections: [],
  collectedIssues: [],
  dates: [
    {
      type: 'onsaleDate',
      date: '2099-01-29T00:00:00-0500',
    },
    {
      type: 'focDate',
      date: '2020-01-06T00:00:00-0500',
    },
  ],
  prices: [
    {
      type: 'printPrice',
      price: 0,
    },
  ],
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada',
    extension: 'jpg',
  },
  images: [
    {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada',
      extension: 'jpg',
    },
  ],
  creators: {
    available: 1,
    collectionURI: 'http://gateway.marvel.com/v1/public/comics/82970/creators',
    items: [
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/creators/10021',
        name: 'Jim Nausedas',
        role: 'editor',
      },
    ],
    returned: 1,
  },
  characters: {
    available: 0,
    collectionURI: 'http://gateway.marvel.com/v1/public/comics/82970/characters',
    items: [],
    returned: 0,
  },
  stories: {
    available: 1,
    collectionURI: 'http://gateway.marvel.com/v1/public/comics/82970/stories',
    items: [
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/183704',
        name: 'cover from Marvel Previews (2017)',
        type: 'cover',
      },
    ],
    returned: 1,
  },
  events: {
    available: 0,
    collectionURI: 'http://gateway.marvel.com/v1/public/comics/82970/events',
    items: [],
    returned: 0,
  },
};

export { comicsMock, comicMock };
