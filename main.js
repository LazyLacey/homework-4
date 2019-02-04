 function drawGreen(el) {
  el.style.border = '2px solid green';
 }


 function getElemByClass(classname){
   return document.getElementsByClassName(classname)[0];
 }

 function findParent(currentElement) {
   drawGreen(currentElement);
   var textBlockName = getElemByClass("blockName");
   const tagClass = currentElement.className;
   const tagName = currentElement.tagName;
   const tagDescription = tagClass != ""
      ?  `${tagName}(${tagClass}) -> `
      :  `${tagName} -> `
   textBlockName.textContent += tagDescription;
   const parent = currentElement.parentNode;
   const classname = parent.getAttribute("class");
   if(classname != "parent") {
     setTimeout(() => {
       findParent(parent)
     }, 100);
   }
   else {
     drawGreen(parent)
     textBlockName.textContent += `${parent.tagName}(${parent.className})`;
   }
  }

 function findNeededParent(startClassName) {
   var searchItem = getElemByClass(startClassName);
   findParent(searchItem);
 }

 findNeededParent("deepChild");
