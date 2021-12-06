import IMAGES from "../../images";

const SHOP_DATA = {
    gear: {
      id: 1,
      title: 'Equipment',
      routeName: 'gear',
      items: [
        {
          id: 1,
          name: 'Battle Ropes',
          imageUrl: IMAGES.battleRopes,
          price: 99
        },
        {
          id: 2,
          name: 'Blue Yoga Mat',
          imageUrl: IMAGES.blueYogaMat,
          price: 18
        },
        {
          id: 3,
          name: 'AirDyne Bike',
          imageUrl: IMAGES.airDyneBike,
          price: 239
        },
        {
          id: 4,
          name: 'Ergonomic Jump Rope',
          imageUrl: IMAGES.jumpRope,
          price: 15
        },
        {
          id: 5,
          name: 'Resistance Band - Tubed',
          imageUrl: IMAGES.resistanceBands,
          price: 20
        },
        {
          id: 6,
          name: 'Rogue Olympic Bar',
          imageUrl: IMAGES.olympicBar,
          price: 129
        },
        {
          id: 7,
          name: 'Gymnastics Rings',
          imageUrl: IMAGES.gymnasticRings,
          price: 59
        },
        {
          id: 8,
          name: 'Mounted Pull-Up Bar',
          imageUrl: IMAGES.pullUpBar,
          price: 99
        },
        {
          id: 9,
          name: 'Exercise Ball',
          imageUrl: IMAGES.exerBall,
          price: 16
        }
      ]
    },
    footwear: {
      id: 2,
      title: 'Footwear',
      routeName: 'footwear',
      items: [
        {
          id: 10,
          name: 'Adidas NMD',
          imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          price: 220
        },
        {
          id: 11,
          name: 'Adidas Yeezy',
          imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
          price: 280
        },
        {
          id: 12,
          name: 'Black Converse',
          imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
          price: 110
        },
        {
          id: 13,
          name: 'Nike White AirForce',
          imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
          price: 160
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          price: 160
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190
        },
        {
          id: 17,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200
        }
      ]
    },
    fitTech: {
      id: 3,
      title: 'Fit Tech',
      routeName: 'fittech',
      items: [
        {
          id: 18,
          name: 'Apple Watch',
          imageUrl: IMAGES.iWatch,
          price: 299
        },
        {
          id: 19,
          name: 'Android Watch',
          imageUrl: IMAGES.android,
          price: 129
        },
        {
          id: 20,
          name: 'GShock',
          imageUrl: IMAGES.gShock,
          price: 99
        },
        {
          id: 21,
          name: 'Beats by Dre',
          imageUrl: IMAGES.beats,
          price: 165
        },
        {
          id: 22,
          name: 'VR Headset',
          imageUrl: IMAGES.vrHeadSet,
          price: 185
        }
      ]
    },
    womens: {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 23,
          name: 'Lavender Compression Two-Piece',
          imageUrl: IMAGES.lavSet,
          price: 65
        },
        {
          id: 24,
          name: 'Green Compression Two-Piece',
          imageUrl: IMAGES.greenSet,
          price: 65
        },
        {
          id: 25,
          name: 'Grey Crop Hoodie',
          imageUrl: IMAGES.greyCropHoodie,
          price: 40
        },
        {
          id: 26,
          name: 'Multi-Color Compression Two-Piece',
          imageUrl: IMAGES.multiCol,
          price: 80
        },
        {
          id: 27,
          name: 'GymShark Compression Pants',
          imageUrl: IMAGES.gymSharkPants,
          price: 45
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135
        },
        {
          id: 29,
          name: 'Athletic Face Mask - Black',
          imageUrl: IMAGES.blackFaceMask,
          price: 8
        }
      ]
    },
    mens: {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 30,
          name: 'Grey Long Sleeve 3/4 T',
          imageUrl: IMAGES.greyThreeQuarter,
          price: 29
        },
        {
          id: 31,
          name: 'Pink Running Nike T',
          imageUrl: IMAGES.pinkNike,
          price: 45
        },
        {
          id: 32,
          name: 'Black & White Baseball Tee',
          imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          price: 25
        },
        {
          id: 33,
          name: 'Multi-Colored Tennis Uni',
          imageUrl: IMAGES.tennis,
          price: 65
        },
        {
          id: 34,
          name: 'Fitted Running Shorts',
          imageUrl: IMAGES.shorts,
          price: 20
        },
        {
          id: 35,
          name: 'Grey DriFit Hoodie',
          imageUrl: IMAGES.driFit,
          price: 35
        }
      ]
    }
}

export default SHOP_DATA;