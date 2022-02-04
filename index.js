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
  console.log(results.instance.exports.add(1,1))
  console.log(results.instance.exports.sub(1,2))
  console.log(results.instance.exports.mul(1,2))
});
