import eggBasilURL from 'images/menu/pizzas/EggBrazil.png'
import VeggieFestURL from 'images/menu/pizzas/VeggieFest.svg'
import SalamiTomatoURL from 'images/menu/pizzas/SalamiTomato.svg'
import PepperoniEggURL from 'images/menu/pizzas/PepperoniEgg.svg'
import SalamiMushroomsURL from 'images/menu/pizzas/SalamiMushrooms.svg'
import LivesShroomsURL from 'images/menu/pizzas/LivesShrooms.svg'
import ItalianTicanURL from 'images/menu/pizzas/ItalianTican.svg'
import SupremeStyleURL from 'images/menu/pizzas/SupremeStyle.svg'
import { PizzaInformation } from 'global.types'

const Pizzas: Array<PizzaInformation> = [
  {
    name: 'EGG & BASIL',
    weight: 520,
    weightType: 'g',
    calories: 1200,
    description:
      'Our famous egg, basil, capers and black pepper. Don’t knock it ’til you try it.',
    price: 14,
    img: eggBasilURL,
    colors: {
      gradiend0: '#D9571F',
      gradiend100: '#F1C380',
    },
  },
  {
    name: 'VEGGIE FEST',
    weight: 520,
    weightType: 'g',
    calories: 1000,
    description:
      'Mushrooms, purple basil, capers and our famous secret veggie mix.',
    price: 12,
    img: VeggieFestURL,
    colors: {
      gradiend0: '#8F9F19',
      gradiend100: '#D2DA99',
    },
  },
  {
    name: 'SALAMI & TOMATO',
    weight: 560,
    weightType: 'g',
    calories: 1500,
    description:
      'What a perfect combination of salami, tomato wedges and sage. Tastes just like home.',
    price: 16,
    img: SalamiTomatoURL,
    colors: {
      gradiend0: '#D91F1F',
      gradiend100: '#F1A980',
    },
  },
  {
    name: 'PEPPERONI & EGG',
    weight: 540,
    weightType: 'g',
    calories: 1200,
    description:
      'Our famous egg, basil, capers and black pepper. Don’t knock it ’til you try it.',
    price: 14,
    img: PepperoniEggURL,
    colors: {
      gradiend0: '#46B88F',
      gradiend100: '#D0FD88',
    },
  },
  {
    name: 'SALAMI & MUSHROOMS',
    weight: 560,
    weightType: 'g',
    calories: 1500,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    price: 16,
    img: SalamiMushroomsURL,
    colors: {
      gradiend0: '#D9571F',
      gradiend100: '#F1C380',
    },
  },
  {
    name: '’LIVES & ’SHROOMS',
    weight: 520,
    weightType: 'g',
    calories: 1000,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet porttitor augue cursus viverra. Urna.',
    price: 12,
    img: LivesShroomsURL,
    colors: {
      gradiend0: '#D9571F',
      gradiend100: '#F1C380',
    },
  },
  {
    name: 'ITALIAN-TICAN',
    weight: 540,
    weightType: 'g',
    calories: 1200,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet porttitor augue cursus viverra. Urna.',
    price: 14,
    img: ItalianTicanURL,
    colors: {
      gradiend0: '#D91F1F',
      gradiend100: '#F19B80',
    },
  },
  {
    name: 'SUPREME STYLE',
    weight: 520,
    weightType: 'g',
    calories: 1000,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet porttitor augue cursus viverra. Urna.',
    price: 12,
    img: SupremeStyleURL,
    colors: {
      gradiend0: '#199F7F',
      gradiend100: '#99DAC3',
    },
  },
]

export default Pizzas
