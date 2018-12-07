import compileReactComponent from '../react-ssr';

const compileComponent = (componentInfo, done) => {
    var html = compileReactComponent(componentInfo.componentID, componentInfo.componentData);
    done(null, html);
};

module.exports = {
    compileComponent
};