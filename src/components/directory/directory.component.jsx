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
                    imageUrl: 'https://i.ibb.co/LrXdpz7/pexels-ivan-samkov-4162446.webp',
                    id: 1,
                    linkUrl: 'shop/gear'
                },
                {
                    title: 'fit tech',
                    imageUrl: 'https://i.ibb.co/QrZmSR5/pexels-karolina-grabowska-4498479.webp',
                    id: 2,
                    linkUrl: 'shop/fittech'
                },
                {
                    title: 'footwear',
                    imageUrl: 'https://i.ibb.co/MgrTfXL/pexels-pixabay-415261.webp',
                    id: 3,
                    linkUrl: 'shop/footwear'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/bdstTnG/pexels-nathan-cowley-1089144-1.webp',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/4YTGswq/pexels-ketut-subiyanto-5039659.webp',
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