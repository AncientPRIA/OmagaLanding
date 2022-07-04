const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
}) => {
    console.log("STAGE", stage);
    // build-javascript
    // build-html
    if (stage === 'build-html') {
        actions.setWebpackConfig({
            plugins: [
                new CopyWebpackPlugin({
                    patterns: [
                        {
                            from: path.resolve(__dirname, './subtree/omaha-landing/dist'),
                            to: path.resolve(__dirname, './public'),
                        }
                    ]
                }),
            ],
        });
    }
};

// exports.onCreateWebpackConfig = ({
//     stage,
//     rules,
//     loaders,
//     plugins,
//     actions,
// }) => {
//
// };

exports.createPages = async ({ actions }) => {
  // const { createPage } = actions
  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })
};


