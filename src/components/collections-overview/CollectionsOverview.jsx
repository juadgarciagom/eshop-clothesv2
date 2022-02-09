import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PreviewCollection from "../preview-collection/PreviewCollection";

import { selectCollectionsForPreview } from "../../redux/selectors/shop-selector";

import "../collections-overview/collections-overview.scss";

const CollectionsOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
            {collections.map(({ id, ...otherItems }) => (
                <PreviewCollection key={id} {...otherItems} />
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
