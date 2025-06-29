 const heading =  document.createElement('mainHeading');
 heading.textContent = 'Greeting , elements';
 document.body.appendChild(heading);

 const paragraphs=document.getElementsByTagName('p');

 for(const p of paragraphs){

    p.style.color='orange';
 }

 const introParagraph = document.getElementsByClassName('intro-Paragraph')[0];

 introParagraph.textContent = 'discover the magic of html elements ';


 const fp = document.querySelector("p");
 fp.style.fontSize= '18px';

 heading.setAttribute('class' , 'main-title');

 const newParagraph = document.createElement('p');
 newParagraph.textContent = 'A new paragraph has been added';
 document.body.appendChild(newParagraph);
