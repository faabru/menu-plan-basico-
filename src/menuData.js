import heroMain from './img/hero.jpg'
import storyTop from './img/5fe7d35169e3395f12828e23d6eb409e.jpg'
import dishOne from './img/07904352e95f255c336008b3f815c94e.jpg'
import dishTwo from './img/a5dedfb711802934915e54a7e8008488.jpg'

export const MEDIA = {
  heroMain,
  storyTop,
  dishOne,
  dishTwo,
}

const p = (personal, mediana, grande) => ({ personal, mediana, grande })

export const GUIDE = [
  { size: 'Personal', cm: '25 cm', pax: '1–2' },
  { size: 'Mediana', cm: '30 cm', pax: '3–4' },
  { size: 'Grande', cm: '35 cm', pax: '4–6' },
]

export const SECTIONS = [
  {
    id: 'antipasti',
    kicker: 'para encender el apetito',
    title: 'Entrantes',
    items: [
      { name: 'Ensalada Caprese', desc: 'tomate, mozzarella fresca, albahaca, aceite de oliva 0.4', tags: ['V'], price: '4.90' },
      { name: 'Alitas de Pollo', desc: 'BBQ · Buffalo · Honey — 6 o 12 unidades', tags: ['Picante'], price: '6.90' },
      { name: 'Nachos', desc: 'queso fundido, jalapeño, guacamole, crema agria', tags: ['Lácteos'], price: '7.50' },
      { name: 'Bruschetta', desc: 'tomate fresco, ajo y albahaca sobre masa madre', tags: ['V'], price: '5.50' },
    ],
  },
  {
    id: 'rosse',
    kicker: 'tomate san marzano & mozzarella fresca',
    title: 'Pizzas Rojas',
    sizes: true,
    items: [
      { name: 'Margherita', desc: 'salsa de tomate san marzano, mozzarella fresca, albahaca', tags: ['V'], price: p('6.50', '9.50', '12.50') },
      { name: 'Pepperoni', desc: 'tomate, mozzarella, pepperoni crujiente', tags: ['Picante'], price: p('7.00', '10.50', '13.80') },
      { name: 'Hawaiana', desc: 'tomate, mozzarella, jamón y piña asada', tags: [], price: p('7.20', '10.80', '14.20') },
      { name: 'Cuatro Quesos', desc: 'mozzarella, parmesano, gorgonzola, provola', tags: ['V', 'Lácteos'], price: p('7.90', '11.90', '15.60') },
      { name: 'Napolitana', desc: 'tomate, mozzarella, aceitunas, alcaparras, orégano', tags: ['V'], price: p('7.40', '11.00', '14.50') },
    ],
  },
  {
    id: 'speciali',
    kicker: 'recetas de la casa',
    title: 'Pizzas Especiales',
    sizes: true,
    items: [
      { name: 'La Toscana', desc: 'tomate, mozzarella, salchichón, pimiento, cebolla morada, aceitunas', tags: [], price: p('8.50', '12.80', '16.90') },
      { name: 'Mediterránea', desc: 'tomate, mozzarella, berenjena, calabacín, feta, tomates secos', tags: ['V'], price: p('8.00', '12.00', '15.80') },
      { name: 'Carne Golpea', desc: 'tomate, mozzarella, pepperoni, salchicha, bacon, carne molida', tags: [], price: p('9.20', '13.80', '18.20') },
      { name: 'Veggie Deluxe', desc: 'tomate, mozzarella, pimiento, cebolla, setas, brócoli, aceitunas', tags: ['V'], price: p('7.80', '11.60', '15.20') },
      { name: 'Buffalo Chicken', desc: 'salsa ranch, pollo, mozzarella, cebolla roja, apio', tags: ['Picante'], price: p('8.90', '13.40', '17.60') },
    ],
  },
  {
    id: 'bianche',
    kicker: 'base blanca & firma del horno',
    title: 'Pizzas Blancas',
    sizes: true,
    items: [
      { name: 'La Forestiera', desc: 'salsa blanca, mozzarella, setas de estación, espárragos, trufa', tags: ['V'], price: p('9.50', '14.30', '18.90') },
      { name: 'Pescatora', desc: 'salsa de ajo, mariscos frescos del día, mozzarella, cilantro', tags: [], price: p('10.50', '15.80', '20.90') },
      { name: 'BBQ Chicken', desc: 'salsa BBQ ahumada, pollo, cebolla caramelizada, mozzarella', tags: [], price: p('9.20', '13.90', '18.30') },
    ],
  },
  {
    id: 'combos',
    kicker: 'ahorra con brasa',
    title: 'Combos',
    items: [
      { name: 'Famiglia', desc: '1 grande + 2 bebidas + 1 postre', tags: [], price: '28.90' },
      { name: 'Doble', desc: '2 medianas + 2 bebidas', tags: [], price: '24.50' },
      { name: 'Clásico', desc: '1 personal + 1 bebida', tags: [], price: '12.90' },
      { name: 'Piccolo', desc: '1 personal (3 ingredientes) + jugo + palitos', tags: ['Infantil'], price: '9.90' },
    ],
  },
  {
    id: 'dolci',
    kicker: 'el cierre dulce',
    title: 'Postres',
    items: [
      { name: 'Tiramisú', desc: 'artesanal con café, mascarpone y cacao amargo', tags: ['Lácteos'], price: '6.50' },
      { name: 'Cannoli', desc: 'crujiente, ricotta, virutas de chocolate', tags: ['Lácteos'], price: '6.90' },
      { name: 'Gelato', desc: 'pistacho · stracciatella · limón — variedades del día', tags: ['V'], price: '4.90' },
      { name: 'Brownie & Gelato', desc: 'chocolate 70 % tibio con vainilla', tags: ['Lácteos'], price: '7.50' },
    ],
  },
  {
    id: 'bevande',
    kicker: 'para levantar los brindis',
    title: 'Bebidas',
    single: true,
    items: [
      { name: 'Refrescos', desc: 'coca-cola · fanta · sprite · agua tónica', tags: [], price: '2.50' },
      { name: 'Agua Mineral', desc: 'natural o con gas — 500 ml / 1 L', tags: [], price: '2.00' },
      { name: 'Cerveza', desc: 'artesanal local e italiana', tags: [], price: '4.80' },
      { name: 'Vino', desc: 'tinto o blanco — copa / botella', tags: [], price: '5.00' },
      { name: 'Jugos del Día', desc: 'naranja · limón · mango', tags: [], price: '3.50' },
    ],
  },
]

export const SPECIAL = {
  label: 'Por tiempo limitado',
  title: 'Toscana · 35 cm',
  desc: '+ bebida 1 L + postre a elección · solo por hoy',
  price: '16.90',
}