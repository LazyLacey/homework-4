 function drawRed(el) {
  el.style.border = '2px solid red';
 }
var sbln2 = document.querySelector('.sibling_second');
var sbln1 = document.querySelector('div.sibling_first div.deepChild');

 function drawGreen(el) {
  el.style.border = '2px solid green';
 }

 function filterChild(el) {
        const collection = Array.from(el.childNodes);
        return collection.filter(c => c.tagName === 'DIV')
    }


 function findParent(currentElement) {
   drawRed(currentElement);
   const parent = currentElement.parentNode;
   const classname = parent.getAttribute("class");
   if(classname != "sibling_first") {
     setTimeout(() => {
       findParent(parent)
     }, 2000);
   }
   else {
     setTimeout((f)=>{
     drawRed(parent);
     f(sbln2);
   }, 2000,findChildren);
   }
  }

  function findChildren(el) {
      drawGreen(el);
      const child = filterChild(el)[0];

      if(child && child.class != "deepChild") {
          setTimeout((str) => {
              findChildren(child);
          }, 2000,'dsad')
      } else {
              drawGreen(el);
      }
  }


findParent(sbln1);
