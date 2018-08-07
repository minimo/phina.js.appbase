phina.globalize();

phina.define("MainScene", {
  superClass: 'DisplayScene',
  init: function() {
    this.superInit();
  },
});

phina.main(function() {
  const app = GameApp({
    startLabel: 'main',
  });
  app.enableStats();
  app.run();
});
