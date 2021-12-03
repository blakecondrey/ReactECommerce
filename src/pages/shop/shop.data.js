const SHOP_DATA = [
    {
      id: 1,
      title: 'Equipment',
      routeName: 'gear',
      items: [
        {
          id: 1,
          name: 'Battle Ropes',
          imageUrl: 'https://i.ibb.co/QPR4NKb/pexels-tima-miroshnichenko-6390228.webp',
          price: 99
        },
        {
          id: 2,
          name: 'Blue Yoga Mat',
          imageUrl: 'https://i.ibb.co/RgnnN2h/pexels-dmytro-2394051.webp',
          price: 18
        },
        {
          id: 3,
          name: 'AirDyne Bike',
          imageUrl: 'https://i.ibb.co/mT116PD/pexels-cottonbro-7689278.webp',
          price: 239
        },
        {
          id: 4,
          name: 'Ergonomic Jump Rope',
          imageUrl: 'https://i.ibb.co/kqX85rR/pexels-dom-j-45056.webp',
          price: 15
        },
        {
          id: 5,
          name: 'Resistance Band - Tubed',
          imageUrl: 'https://i.ibb.co/3BKm9vs/pexels-ricky-nugraha-6667512.webp',
          price: 20
        },
        {
          id: 6,
          name: 'Rogue Olympic Bar',
          imageUrl: 'https://i.ibb.co/m9JT1d1/pexels-victor-freitas-949126.webp',
          price: 129
        },
        {
          id: 7,
          name: 'Gymnastics Rings',
          imageUrl: 'https://i.ibb.co/4pBcxWy/pexels-victor-freitas-931325.webp',
          price: 59
        },
        {
          id: 8,
          name: 'Mounted Pull-Up Bar',
          imageUrl: 'https://i.ibb.co/6mTC7Cs/pexels-rodnae-productions-7187945.webp',
          price: 99
        },
        {
          id: 9,
          name: 'Exercise Ball',
          imageUrl: 'https://i.ibb.co/yBmS6wQ/pexels-andrea-piacquadio-3757649.webp',
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 1,
          name: 'Adidas NMD',
          imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          price: 220
        },
        {
          id: 2,
          name: 'Adidas Yeezy',
          imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
          price: 280
        },
        {
          id: 3,
          name: 'Black Converse',
          imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
          price: 110
        },
        {
          id: 4,
          name: 'Nike White AirForce',
          imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
          price: 160
        },
        {
          id: 5,
          name: 'Nike Red High Tops',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          price: 160
        },
        {
          id: 6,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160
        },
        {
          id: 7,
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190
        },
        {
          id: 8,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Fit Tech',
      routeName: 'fittech',
      items: [
        {
          id: 1,
          name: 'Apple Watch',
          imageUrl: 'https://i.ibb.co/mHKLWJk/pexels-torsten-dettlaff-437037.webp',
          price: 299
        },
        {
          id: 2,
          name: 'Android Watch',
          imageUrl: 'https://i.ibb.co/MsjzJd9/pexels-jens-mahnke-4679246.webp',
          price: 129
        },
        {
          id: 3,
          name: 'GShock',
          imageUrl: 'https://i.ibb.co/QpgQpyB/pexels-pixabay-158741.webp',
          price: 99
        },
        {
          id: 4,
          name: 'Beats by Dre',
          imageUrl: 'https://i.ibb.co/7vXzdzG/pexels-parag-deshmukh-577769.webp',
          price: 165
        },
        {
          id: 5,
          name: 'VR Headset',
          imageUrl: 'https://i.ibb.co/dkbspmz/pexels-andrea-piacquadio-834949.webp',
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 1,
          name: 'Teal Textured Tanktop',
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          price: 25
        },
        {
          id: 2,
          name: 'Floral Blouse',
          imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          price: 20
        },
        {
          id: 3,
          name: 'Floral Dress',
          imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          price: 80
        },
        {
          id: 4,
          name: 'Red Dots Dress',
          imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          price: 80
        },
        {
          id: 5,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45
        },
        {
          id: 6,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135
        },
        {
          id: 7,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 1,
          name: 'Camo Puffer Vest',
          imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          price: 325
        },
        {
          id: 2,
          name: 'Blue Floral',
          imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
          price: 20
        },
        {
          id: 3,
          name: 'Black & White Baseball Tee',
          imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          price: 25
        },
        {
          id: 4,
          name: 'Pink Floral',
          imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
          price: 25
        },
        {
          id: 5,
          name: 'Jean Long Sleeve',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40
        },
        {
          id: 6,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25
        }
      ]
    }
]

export default SHOP_DATA;