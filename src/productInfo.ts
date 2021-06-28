interface AdobeProduct {
  name: string
  versions: { [key: string]: string }
}

export const products: { [key: string]: AdobeProduct } = {
  AfterEffects: {
    name: 'After Effects',
    versions: {
      '8.0': 'CS3 (8.0)',
      '9.0': 'CS4 (9.0)',
      '10.0': 'CS5 (10.0)',
      '10.5': 'CS5.5 (10.5)',
      '11.0': 'CS6 (11.0)',
      '12.0': 'CC (12.0)',
      '12.1': 'CC (12.1)',
      '12.2': 'CC (12.2)',
      '13.0': 'CC 2014 (13.0)',
      '13.1': 'CC 2014.1 (13.1)',
      '13.5': 'CC 2015 (13.5)',
      '13.6': 'CC 2015.1 (13.6)',
      '13.7': 'CC 2015.2 (13.7)',
      '13.8': 'CC 2015.3 (13.8)',
      '14.1': 'CC 2017.1 (14.1)',
      '14.2': 'CC 2017.2 (14.2)',
      '15.0': 'CC (15.0)',
      '15.1': 'CC (15.1)',
      '16.0': 'CC (16.0)',
    },
  },
  Animate: {
    name: 'Animate',
    versions: {
      '2013': 'CC 2013',
    },
  },
  Audition: {
    name: 'Audition',
    versions: {
      '2015.2': 'CC 2015.2',
      '2017': 'CC 2017',
      '2018': 'CC 2018',
    },
  },
  Illustrator: {
    name: 'Illustrator',
    versions: {
      '2015.3': 'CC 2015.3',
    },
  },
  InDesign: {
    name: 'InDesign',
    versions: {
      '2015.3': 'CC 2015.3',
      '2018': 'CC 2018',
    },
  },
  Photoshop: {
    name: 'Photoshop',
    versions: {
      '2015.5': 'CC 2015.5',
    },
  },
  Premiere: {
    name: 'Premiere',
    versions: {
      '2018': 'CC 2018',
    },
  },
}
