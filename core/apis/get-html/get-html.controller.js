import compileReactComponent from '../react-ssr';

const compileComponent = (componentInfo, done) => {
    var html = compileReactComponent(componentInfo.id, componentInfo.data, componentInfo.type);
    if(!html.error){
        done(null, html);
    } else {
        done(html);
    }
};

module.exports = {
    compileComponent
};