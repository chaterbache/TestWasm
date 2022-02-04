let importObject = {
        imports: {
          imported_func: function(arg) {
            console.log(arg);
          }
        }
      };

WebAssembly.instantiateStreaming(fetch('main.wasm'), importObject)
.then(results => {
  // Do something with the results!
  console.log(results.instance.exports.add(1,2,3))
});
