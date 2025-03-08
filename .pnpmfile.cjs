module.exports = {
  hooks: {
    readPackage: (pkg) => {
      delete pkg.dependencies["@types/eslint"];
      delete pkg.devDependencies["@types/eslint"];
      delete pkg.optionalDependencies["@types/eslint"];
      delete pkg.peerDependencies["@types/eslint"];
      return pkg;
    },
  },
};
