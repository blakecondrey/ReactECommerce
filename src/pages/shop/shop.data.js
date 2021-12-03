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
          name: 'Lavender Compression Two-Piece',
          imageUrl: 'https://i.ibb.co/6Z2gz8L/pexels-7700181.webp',
          price: 65
        },
        {
          id: 2,
          name: 'Green Compression Two-Piece',
          imageUrl: 'https://i.ibb.co/fkNrjrr/pexels-angela-roma-7479737.webp',
          price: 65
        },
        {
          id: 3,
          name: 'Grey Crop Hoodie',
          imageUrl: 'https://i.ibb.co/6n8ykP6/pexels-mikhail-nilov-6740038.webp',
          price: 40
        },
        {
          id: 4,
          name: 'Multi-Color Compression Two-Piece',
          imageUrl: 'https://i.ibb.co/Qm7XmLs/pexels-godisable-jacob-1055280.webp',
          price: 80
        },
        {
          id: 5,
          name: 'GymShark Compression Pants',
          imageUrl: 'https://i.ibb.co/njFKQ1g/pexels-t-s-5493124.webp',
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
          name: 'Athletic Face Mask - Black',
          imageUrl: 'https://i.ibb.co/XVHs1Tc/pexels-monstera-6998744-1.webp',
          price: 8
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
          name: 'Grey Long Sleeve 3/4 T',
          imageUrl: 'https://i.ibb.co/8cNy1bg/pexels-monstera-5384424.webp',
          price: 29
        },
        {
          id: 2,
          name: 'Pink Running Nike T',
          imageUrl: 'https://i.ibb.co/dLJpVx2/pexels-andrew-personal-training-733500.webp',
          price: 45
        },
        {
          id: 3,
          name: 'Black & White Baseball Tee',
          imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          price: 25
        },
        {
          id: 4,
          name: 'Multi-Colored Tennis Uni',
          imageUrl: 'https://i.ibb.co/BgwfZ35/pexels-oliver-sjo-stro-m-1103828.webp',
          price: 65
        },
        {
          id: 5,
          name: 'Fitted Running Shorts',
          imageUrl: 'https://i.ibb.co/B2QzZzM/pexels-ketut-subiyanto-4803915.webp',
          price: 20
        },
        {
          id: 6,
          name: 'Grey DriFit Hoodie',
          imageUrl: 'https://i.ibb.co/L8kWmHF/pexels-barbara-olsen-7869555.webp',
          price: 35
        }
      ]
    }
]

export default SHOP_DATA;