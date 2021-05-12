import { User } from '../interfaces'
import { CAROUSEL_ITEM } from '../interfaces/HTML'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
]

/* Sample Carousel data. */
export const sampleCarouselData: CAROUSEL_ITEM[] = [
  {
    src: 'conor-luddy-coliemore-harbour-dublin-ireland',
    alt:
      'A photo of Coliemore Harbour in Dublin, Ireland. Credit: Conor Luddy.',
    label: '1 of 6',
    title: 'Coliemore Harbour',
    description: 'A lovely shot of Coliemore Harbour in Dublin by Conor Luddy.',
  },
  {
    src: 'dimitry-anikin-river-liffey-dublin-ireland',
    alt:
      'A photo of the River Liffey in Dublin, Ireland. Credit: Dimitry Anikin.',
    label: '2 of 6',
    title: 'River Liffey',
    description:
      'A lovely shot of the River Liffey at night in Dublin by Dimitry Anikin.',
  },
  {
    src: 'diogo-palhais-temple-bar-dublin-ireland',
    alt: 'A photo of Temple Bar in Dublin, Ireland. Credit: Diogo Palhais.',
    label: '3 of 6',
    title: 'Temple Bar',
    description: 'A lovely shot of Temple Bar in Dublin by Diogo Palhais.',
  },
  {
    src: 'gregory-dalleau-lough-tay-dublin-ireland',
    alt: 'A photo of Lough Tay in Dublin, Ireland. Credit: Gregory Dalleau.',
    label: '4 of 6',
    title: 'Lough Tay',
    description: 'A lovely shot of Lough Tay in Dublin by Gregory Dalleau.',
  },
  {
    src: 'henrique-craveiro-cliffs-of-moher-co-clare-ireland',
    alt:
      'A photo of the Cliffs of Moher in Clare, Ireland. Credit: Henrique Craveiro.',
    label: '5 of 6',
    title: 'Cliffs of Moher',
    description:
      'A lovely shot of the Cliffs of Moher in Clare by Henrique Craveiro.',
  },
  {
    src: 'jaime-casap-saint-patricks-cathedral-dublin-ireland',
    alt:
      'A photo of Saint Patricks Cathedral in Dublin, Ireland. Credit: Jaime Casap.',
    label: '6 of 6',
    title: 'Saint Patricks Cathedral',
    description:
      'A lovely shot of Saint Patricks Cathedral in Dublin by Jaime Casap.',
  },
]
