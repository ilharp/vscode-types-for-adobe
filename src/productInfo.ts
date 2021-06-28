export interface AdobeProductVersion {
  id: string
  name: string
}

export interface AdobeProduct {
  id: string
  name: string
  versions: AdobeProductVersion[]
}

export const products: AdobeProduct[] = [
  {
    id: 'AfterEffects',
    name: 'After Effects',
    versions: [
      { id: '8.0', name: 'CS3 (8.0)' },
      { id: '9.0', name: 'CS4 (9.0)' },
      { id: '10.0', name: 'CS5 (10.0)' },
      { id: '10.5', name: 'CS5.5 (10.5)' },
      { id: '11.0', name: 'CS6 (11.0)' },
      { id: '12.0', name: 'CC (12.0)' },
      { id: '12.1', name: 'CC (12.1)' },
      { id: '12.2', name: 'CC (12.2)' },
      { id: '13.0', name: 'CC 2014 (13.0)' },
      { id: '13.1', name: 'CC 2014.1 (13.1)' },
      { id: '13.5', name: 'CC 2015 (13.5)' },
      { id: '13.6', name: 'CC 2015.1 (13.6)' },
      { id: '13.7', name: 'CC 2015.2 (13.7)' },
      { id: '13.8', name: 'CC 2015.3 (13.8)' },
      { id: '14.1', name: 'CC 2017.1 (14.1)' },
      { id: '14.2', name: 'CC 2017.2 (14.2)' },
      { id: '15.0', name: 'CC (15.0)' },
      { id: '2018', name: 'CC 2018 (15.0)' },
      { id: '15.1', name: 'CC (15.1)' },
      { id: '16.0', name: 'CC (16.0)' },
    ],
  },
  {
    id: 'Animate',
    name: 'Animate',
    versions: [{ id: '2013', name: 'CC 2013' }],
  },
  {
    id: 'Audition',
    name: 'Audition',
    versions: [
      { id: '2017', name: 'CC 2017' },
      { id: '2018', name: 'CC 2018' },
      { id: '2015.2', name: 'CC 2015.2' },
    ],
  },
  {
    id: 'Illustrator',
    name: 'Illustrator',
    versions: [{ id: '2015.3', name: 'CC 2015.3' }],
  },
  {
    id: 'InDesign',
    name: 'InDesign',
    versions: [
      { id: '2018', name: 'CC 2018' },
      { id: '2015.3', name: 'CC 2015.3' },
    ],
  },
  {
    id: 'Photoshop',
    name: 'Photoshop',
    versions: [{ id: '2015.5', name: 'CC 2015.5' }],
  },
  {
    id: 'Premiere',
    name: 'Premiere',
    versions: [{ id: '2018', name: 'CC 2018' }],
  },
]
