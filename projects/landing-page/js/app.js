
/* scroll to top button functions*/


//Get the button:
const mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {

  window.scrollTo({top: 0, behavior: 'smooth'});

}
/* end of scroll to top button functions*/


/* creating new sections , adding it to html */
const newUl = document.querySelector("#navbar__list");
const sectionss = [];
let ctr=3;


// create 3 li for original 3 sections, add to nav
for(let i =1;i<4;i++)
{
    const tempNumSectionLi=document.createElement('li');
    sectionss.push(tempNumSectionLi)
    tempNumSectionLi.innerText=`section ${i}`;
    newUl.appendChild(tempNumSectionLi);
}
  
//add new section , event listeener , all
function addSections()
{
  ctr++
  const addPoint = document.getElementById(`section${ctr-1}`);
  const newAddedSection = 
    `<section id="section${ctr}" data-nav="Section ${ctr}" class="list">
        <div class="landing__container">
          <h2>Section ${ctr}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
        
          <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
        </div>
      </section>`;
    addPoint.insertAdjacentHTML('afterend', newAddedSection);
   

    const tempNumSectionLi=document.createElement('li');
    sectionss.push(tempNumSectionLi);
    sectionss[ctr-1].setAttribute('id',`section${ctr}Li`);
    tempNumSectionLi.setAttribute('id',`section${ctr}Li`);
    tempNumSectionLi.innerText=`section ${ctr}`;
    newUl.appendChild(tempNumSectionLi);
    const tempS=document.getElementById(`section${ctr}`);//elements with this id in html
    const tempRectNo = tempS.getBoundingClientRect();
    const tempSectionNoLi=document.getElementById(`section${ctr}Li`);
    const myString = tempSectionNoLi.textContent;
    const stringLength = myString.length; // this will be 16
    let num=parseInt(myString.charAt(stringLength - 1));
    let num2=parseInt(myString.charAt(stringLength - 2));
    // console.log("num ",num);
    // console.log("ctr ",ctr);
    if(ctr>9)
    {
      num=num2*10+num;
    }
    window.addEventListener('scroll', ()=>update(tempRectNo,tempSectionNoLi,tempS));
    tempSectionNoLi.addEventListener("click",()=>anchoring(num));
    
  }
  

 let sections = document.querySelectorAll('li');
//add the id for all li
  //set id for section li
  for(let k=1;k<=sectionss.length;k++)
  {
    const tempS=document.getElementById(`section${k}`);//elements with this id in html
    const tempRectNo = tempS.getBoundingClientRect();
    sectionss[k-1].setAttribute('id',`section${k}Li`);
  }


//add event listeners to original 3 sections , li
for(let i=1;i<=sectionss.length;i++)
  {
    const ii=i;
    const tempS=document.getElementById(`section${i}`);//elements with this id in html
    const tempRectNo = tempS.getBoundingClientRect();
    const tempSectionNoLi=document.getElementById(`section${i}Li`);
    window.addEventListener('scroll', ()=>update(tempRectNo,tempSectionNoLi,tempS));
    tempSectionNoLi.addEventListener("click",()=>anchoring(ii));
  }


/*  capturing new sections into constants to use for the event listener of navbar items */
 const s1=document.getElementById("section1");//elements with this id in html
 s1.classList.remove("your-active-class");
function update(tempRect,tempSectionLi,tempS) {
  
  let top = window.scrollY+5;
  let offset = tempRect.top;
  let height = tempRect.height;
  if(top >= offset && top < (offset + height))
  {
    tempSectionLi.classList.add("your-active-class");
    tempS.classList.add("your-active-class");
  }
  else
  {
    tempSectionLi.classList.remove("your-active-class");
    tempS.classList.remove("your-active-class");
  }
}
 /*  end of eventListener update used for changing colour of navbar li to red*/


 /*  start of smooth scroll into view function used when clicking on li item */
function anchoring(num)
{
  document.getElementById(`section${num}`).scrollIntoView({behavior : "smooth"});
}


 /*  end of smooth scroll into view function used when clicking on li item */

