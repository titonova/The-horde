

// START COPYING FROM HERE
const send_joke_intervals =  [30000, 40000];
const send_shower_thoughts_intervals =  [30000, 40000];

let sent_jokes = [];
let sent_shower_thoughts = [];
function sendJokes() {
    setInterval(function(){
        $.get("https://icanhazdadjoke.com/",{}, function(data, status){
       
            const joke = data.joke
            if(!sent_jokes.includes(joke)){
              $("#content").val(joke).submit()
              console.log(joke)
              sent_jokes.push(joke);
            }
          },"json");
     }, getRndInteger(send_joke_intervals[0],send_joke_intervals[1]));
}
  
function sendShowerThoughts(){
  setInterval(function(){
      $.get("https://www.reddit.com/r/showerthoughts/hot.json",{}, function(data, status){

          const randdnum = getRndInteger(0,data.data.children.length - 1);
          const st = (data.data.children[randdnum].data.title)

          
          if(!sent_shower_thoughts.includes(st)){
            console.log(st)
            $("#content").val(st).submit()
            sent_shower_thoughts.push(st)
          }

          

        },"json");
    }, getRndInteger(send_shower_thoughts_intervals[0],send_shower_thoughts_intervals[1]));
}
  
  
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

// END COPY HERE

// Use these functions to release the horde!!
sendShowerThoughts()
sendJokes()