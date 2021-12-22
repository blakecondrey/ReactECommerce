import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import {
    CollectionPreviewContainer,
    TitleContainer,
    TitleLink,
    PreviewContainer
} from './collection-preview.styles'

const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <TitleContainer>
            <TitleLink to={`/shop/${title.toLowerCase()}`}>{title.toUpperCase()}</TitleLink>
        </TitleContainer>
        <PreviewContainer>
            {items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
            ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default CollectionPreview;