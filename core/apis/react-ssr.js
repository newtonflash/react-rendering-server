import React from "react";
import ReactDOMServer from 'react-dom/server';
import FooterCopyRight from "../../src/components/footer-copy-right/footer-copy-right";

const getComponentByID = id => {
    return FooterCopyRight;
};

const compileReactComponent = (componentID, data) => {
    return ReactDOMServer.renderToStaticMarkup(<FooterCopyRight {...data}/>);
};

export default compileReactComponent;
