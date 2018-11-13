module.exports = api => {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: { browsers: ">10%" },
        modules: false,
        loose: true
      }
    ],
    "@babel/preset-react"
  ];

  const plugins = ["react-hot-loader/babel"];

  return { presets, plugins };
};
