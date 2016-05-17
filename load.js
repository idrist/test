var arr = [];
for(var i=0;i<10000000000;i++){
  var div = document.createElement("div");
  div.innerHTML = Date.now();
  arr.push(div);
}
