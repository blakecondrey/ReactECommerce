import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'equipment',
                    imageUrl: 'https://i.ibb.co/5hqTJYZ/pexels-ivan-samkov-4162446.jpg',
                    id: 1,
                    linkUrl: 'shop/gear'
                },
                {
                    title: 'fit tech',
                    imageUrl: 'https://i.ibb.co/6B7B1ny/pexels-karolina-grabowska-4498479.jpg',
                    id: 2,
                    linkUrl: 'shop/fittech'
                },
                {
                    title: 'footwear',
                    imageUrl: 'https://i.ibb.co/8mLwxST/pexels-pixabay-415261.jpg',
                    id: 3,
                    linkUrl: 'shop/footwear'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/sHP8yy4/pexels-nathan-cowley-1089144.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/VSZb8D5/pexels-ketut-subiyanto-5039659.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    };
}

export default Directory;