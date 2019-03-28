self.addEventListener("sync", function (event) {
  console.log(event.tag);
  event.waitUntil(doSomething());
});

doSomething = function(){
  console.log("syncing......");
  Promise.resolve("sync complete");
}
