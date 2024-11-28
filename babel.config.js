module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        // Agrega aquí tus plugins de Babel si es necesario
        // Ejemplo: '@babel/plugin-proposal-class-properties'
      ],
    };
  };
  