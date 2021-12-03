import axios from 'axios';

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  
  const topicsDiv = document.createElement('div');
  topicsDiv.classList.add('topics');
  const t = [topics];
  t.forEach(element => {
    const tabDiv = document.createElement('div');
    tabDiv.classList.add('tab');
    tabDiv.textContent = element;
    
  });
}


const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  
  
  let data = [];
  axios.get(`http://localhost:5000/api/topics`)
  .then(r => {
   //console.log('response:', r.data.topics);
   r.data.topics.forEach(e =>{
    data.push(e);
    
   });
   
    
  
  }).catch(err => {
    console.error(err);
  })
  
  console.log(`data: `,data); //shows length of 5
  
  console.log('Data Length:', data.length); //shows length of 0
  const grabSelector = document.querySelector(selector);
  data.forEach(e =>{ //I believe this thinks length is 0
    grabSelector.appendChild(Tabs(e));
  });
  
  
  
}

export { Tabs, tabsAppender }
