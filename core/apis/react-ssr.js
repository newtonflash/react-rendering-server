import React from "react";
import ReactDOMServer from 'react-dom/server';
import getComponentByID from '../../src/components/component-registry';
import { ServerStyleSheet } from 'styled-components';

const ERROR = require('./error-codes');

const compileReactComponent = (componentID, data) => {
    const sheet = new ServerStyleSheet();
    const Component = getComponentByID(componentID);
    if(Component){
        var html =  ReactDOMServer.renderToString(sheet.collectStyles(<Component {...data}/>));
        var style = sheet.getStyleTags();
        return html + style ;
    } else {
        return {
            error:  `${ERROR._0005_COMPONENT_ID_NOT_CORRECT} : ${componentID}`
        }
    }
};

export default compileReactComponent;
