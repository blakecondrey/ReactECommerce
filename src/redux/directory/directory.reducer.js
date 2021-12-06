import IMAGES from "../../images";

const INITIAL_STATE = {
    sections: [
        {
            title: 'equipment',
            imageUrl: IMAGES.equipment, 
            id: 1,
            linkUrl: 'shop/gear'
        },
        {
            title: 'fit tech',
            imageUrl: IMAGES.fitTech,
            id: 2,
            linkUrl: 'shop/fittech'
        },
        {
            title: 'footwear',
            imageUrl: IMAGES.footWear,
            id: 3,
            linkUrl: 'shop/footwear'
        },
        {
            title: 'womens',
            imageUrl: IMAGES.womens,
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: IMAGES.mens,
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