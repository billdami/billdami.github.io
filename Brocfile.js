var env = require('broccoli-env').getEnv(),
    compileLess = require('broccoli-less-single'),
    stylesTree = 'less',
    css;

css = compileLess(
    [stylesTree], 
    'billdami.less', 
    'billdami.css', 
    {cleancss: env === 'production'}
);

module.exports = css;