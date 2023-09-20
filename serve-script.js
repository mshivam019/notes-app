const { LiveReloadCompiler } = require("@nestjs/ng-universal");

const compiler = new LiveReloadCompiler({
  projectName: "notes",
});
compiler.run();
