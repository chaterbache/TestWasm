let importObject = {
        imports: {
          imported_func: function(arg) {
            console.log(arg);
          }
        }
      };

WebAssembly.instantiateStreaming(fetch('main.wasm'), importObject)
.then(results => {
  
  const { add, sub, mul, sum, memory } = results.instance.exports

  console.log(add(1,1))
  console.log(sub(1,2))
  console.log(mul(1,2))
  b = [1, 2, 4, 5, 1999,4444444];

  const a = new Int32Array(memory.buffer, 0, b.length)
  a.set(b);

  console.log(sum(a.byteOffset, a.length))
});
