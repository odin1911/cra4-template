const CracoAntDesignPlugin = require('craco-antd');

module.exports = {
  babel: {
    plugins: [
      [
        'babel-plugin-styled-components',
        // {
        //   displayName: false,
        // },
      ],
    ],
  },
  plugins: [{ plugin: CracoAntDesignPlugin }],
};
