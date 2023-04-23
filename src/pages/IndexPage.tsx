import React, {FC} from "react";

import "semantic-ui-css/semantic.min.css";
import {FeedbackForm} from "../components/FeedbackForm";

const IndexPage: FC = () => {
    return (
        <>
            Hello, world!
            <FeedbackForm/>
        </>
    );
};

export default IndexPage;
