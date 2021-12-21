import React from "react";

import {
    SpinnerContainer,
    SpinnerOverlay
} from "../with-spinner/with-spinner.styles";

const Spinner = () => (
    <SpinnerOverlay>
        <SpinnerContainer />
    </SpinnerOverlay>
);

export default Spinner;