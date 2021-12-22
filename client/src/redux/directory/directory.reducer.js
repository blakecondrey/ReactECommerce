const INITIAL_STATE = {
    sections: [
        {
            title: 'gear',
            imageUrl: 'https://i.ibb.co/0BBCd9J/oly-bar.png', 
            id: 1,
            linkUrl: 'shop/gear'
        },
        {
            title: 'fit tech',
            imageUrl: 'https://i.ibb.co/ZH8Ckqf/android.png',
            id: 2,
            linkUrl: 'shop/fittech'
        },
        {
            title: 'footwear',
            imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
            id: 3,
            linkUrl: 'shop/footwear'
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/fHV4rPr/pexels-photo-1089144-1.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/4ZjHDZR/pexels-photo-5039659-1-1-1.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;