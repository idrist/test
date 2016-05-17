var arr = [];
for(var i=0;i<100000;i++){
  var div = document.createElement("div");
  div.innerHTML = Date.now();
  arr.push(div);
}