 function speak() {
  text=document.getElementById('inputtext')
  _mode=localStorage.getItem('mode')
  if(_mode=='text'){
       text.style.display='block'
       text.focus();
       checkCondtion(text.value)
  }
  else{
    text.style.display='none'
      stext= speechR(checkCondtion);
      // if(checkCondtion){
      //   stext= speechR();
      // checkCondtion(stext);
      // }
  }
  text.value="";
 }
 document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    text=document.getElementById('inputtext')
    _mode=localStorage.getItem('mode')
    if(_mode=='text'){
         text.style.display='block'
         text.focus();
         checkCondtion(text.value)
    }
    else{
      text.style.display='none'
        stext= speechR(false);

    }
    text.value=""
  }
});
  
// You can trigger actions based on external input
  function textTyping(ttext){
    htmloutput=document.getElementById('output');
    output.innerHTML=ttext;
  }
  ma= new Audio('audio/maa.mp3');
     aye= new Audio('audio/aye.mp3');
     kya=new Audio('audio/kya_hal_h.mp3');
     khopdi=new Audio('audio/khopdi.mp3');
  function mode(modetype){
   console.log(modetype)
   localStorage.setItem('mode',modetype);
   text=document.getElementById('inputtext')
   document.getElementById('main').style.display='block';
   if(modetype=='text'){
    text.style.display='block'
    text.value=""
    text.focus();
}
else{
 text.style.display='none'

}
  }
 

function speakText(text, lang ="en-US") {
  const otpta=document.getElementById('otpt');
  otpta.innerHTML=""
  if (!text || typeof text !== "string" || text.trim() === "") {
      console.error("Speech synthesis error: Invalid or empty text.");
      return;
  }
  ui_in=document.getElementById('uiin')
  ui_end=document.getElementById('uiend')
  i=0;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.onstart = () => console.log("Speech synthesis started.");
  console.log(text)
  otpta.innerHTML=""
      function typing(){
        if(i<text.length){
          otpta.innerHTML+=text.charAt(i);
          i++;
        setTimeout(typing, 20);
       }}
       typing();
      uiend.style.animation='uii 1.5s linear 2';
      uiin.style.animation='uio .75s linear 4';
  utterance.onend = () => console.log("Speech synthesis completed.");
  utterance.onerror = (event) => {
      console.error("Speech synthesis error occurred:", event.error || "Unknown error");
  };
  try {
      speechSynthesis.cancel(); // Cancel any ongoing utterance
      speechSynthesis.speak(utterance);
  } catch (error) {
      console.error("Speech synthesis failed:", error);
  }
}
       // Speech Recognition Handler
              // Global variable 
     const mic= new webkitSpeechRecognition();
     spt=document.getElementById('scrpt');
     file= document.createElement('textarea');
     file.setAttribute('id','filel');
     time= new Date();
     url='';
     again=false;
     // return wish accoding to time
     hours=time.getHours();
             wish="";
     if(hours>12 && hours<=16){
       wish="afternoon"; 
     }
     else if(hours>=16 ){
       wish="evening";
     }
     else if(hours>4){
       wish="morning";
     }
     //airthmatic operation
     function airthmatic(input){
       aoutput=document.getElementById('arthmatic');
       aoutput.style.display='block'
       aoperants=input.match(/\d+/g)
       a=operants[0];
       b=operants[1];
     if(input.includes('add') ){
       sum=Number(a)+Number(b);
       console.log('Answer is : '+sum)
       aoutput.innerHTML=input+"<br> <b>"+sum;
       speakText(' Answer is '+sum);
     }
     else if(input.includes('subtract')){
       subtr=a-b;
       console.log(subtr)
       aoutput.innerHTML=input+"<br> <b>"+subtr;
       speakText(' Answer is '+subtr);
       }
     else if(input.includes('multipl')){
       mul=a*b;
       console.log(mul)
       aoutput.innerHTML=input+"<br> <b>"+mul;
       speakText(' Answer is '+mul);
     }else if(input.includes('division')){
       div=a/b;
       console.log(div)
       aoutput.innerHTML=input+"<br> <b>"+div;
       speakText(' Answer is '+div);
     }
     }
     gdata=""
  
function rememberData(input) {
  input = input.trim(); // Normalize input
  let question = "";
  let answer = "";

  // Case 1: Starts with "remember"
  if (input.toLowerCase().startsWith("remember")) {
      const cleanedInput = input.slice(8).trim(); // Remove "remember"
      const parts = cleanedInput.split(/ is | are | was | were /); // Split at common linking words
      if (parts.length === 2) {
          question = `what is ${parts[0].trim()}`;
          answer = parts[1].trim();
      }
  }
  // Case 2: Ends with "remember it"
  else if (input.toLowerCase().endsWith("remember it")) {
      const cleanedInput = input.slice(0, -11).trim(); // Remove "remember it"
      const parts = cleanedInput.split(/ is | are | was | were /);
      if (parts.length === 2) {
          question = `what is ${parts[0].trim()}`;
          answer = parts[1].trim();
      }
  }
  // Case 3: Contains "remember" mid-sentence
  else if (input.toLowerCase().includes("remember")) {
      const parts = input.split(/ remember /i); // Split at "remember"
      if (parts.length === 2) {
          const subParts = parts[1].split(/ is | are | was | were /); // Further split the second part
          if (subParts.length === 2) {
              question = `what is ${parts[0].trim()} ${subParts[0].trim()}`;
              answer = subParts[1].trim();
          }
      }
  }
  // Case 4: Generic fallback for common patterns
  else if (/ is | are | was | were /.test(input)) {
      const parts = input.split(/ is | are | was | were /);
      if (parts.length === 2) {
          question = `what is ${parts[0].trim()}`;
          answer = parts[1].trim();
      }
  }

  // Return structured memory or error message
  if (question && answer) {
      return { question, answer };
  } else {
      return "Invalid input. Ensure your input contains 'remember' or follows common patterns.";
  }
}
  

     //function to control the textarea(file)
     function writeStart(){
     a=document.createElement('a');
         fileo=document.getElementById('fileli');
         fileo.appendChild(a)
         a.innerHTML="Save File";
         a.setAttribute('id',"savef")
         m=new webkitSpeechRecognition();
         m.start();
         m.onresult=function(event){
         winput=event.results[0][0].transcript;
     if(winput.includes('save it') || winput.includes('stop')){
       m.stop();
       mic.start();
       filel.style.animation = "edd 2s linear infinite"
       const data= new Blob([file.value],{type: 'text/plain'});
       a.href= URL.createObjectURL(data);
       a.download=filename;
       a.click();
       a.remove()
         speakText(" Saving file");
     }
     else if(winput.includes('clear') && winput.includes('file')){
       file.value=null;
       file.focus()=true;
     }
     else if(winput.includes('font') || winput.includes('colour') || winput.includes('color')){
         res=winput.split(' ')
         if(winput.includes('font') ){
         colo=res.indexOf('font');
         color=res[colo+1];
         filel.style.color=color;
        speakText(" colour "+color)
         }
         else if (winput.includes('colour')) {
              colo=res.indexOf('colour');
              color = "";
              for (c=colo+1; c<res.length; c++) {
                  color=color+res[c];
              }
              filel.style.color = color;
              speakText(" colour "+color)
              if(color=="deepskyblue"){
                js.style.color='#000';  
              }
              else{
                  js.style.color='#ffccff';  
              }
       }
     else if (winput.includes('color')) {
             colo = res.indexOf('color');
             color = res[colo+1]
             filel.style.color = color;
             speakText(" colour "+color)
         }
         else{
             filel.style.color = 'lime';
         }
     }
     else if(winput.includes('remove file box') || winput.includes('clear screen')){
             speakText(" file removed")
             file.remove();
       a.remove()

             mic.start() ;
     }
     else{
       file.value=file.value+' '+winput ;
     }
       }
       m.onend=function(){
       if(winput.includes('save it') ){
       m.stop()
       file.remove() ;
     }
     else if(winput.includes('remove file box') || winput.includes('clear screen')){
         m.stop() ;
         mic.start() ;
     }
     else if(winput.includes('stop')){
         m.stop() ;
     }
     else{
       m.start()
     }
       }
     }
     file.placeholder="Write something....." ;
     file.addEventListener("input",function() {
      //  if(file.value.includes('Rohit')){
      //   file.style.color="red"
      //  }
      //  else{
      //    file.style.color="lime"
      //  }
     }) ;
     thn="";
     // set nick name
     function setname(){
      speakText(thn+"What should i call you?" );
      username=prompt(thn+"What should i call you?" )

        speakText(" You'd like me to i call your name,"+username+". is that right?");
        const userResponse = confirm(" You'd like me to i call your name,"+username+". is that right?");

        if (userResponse) {
          speakText(" Okey. Now i call you "+username);
          localStorage.setItem('my name', username)
        } else {
            setname();
            thn="then "
        }
     }
     function setName(){
       input ="" ;
       console.log('Start...')
       micro=new webkitSpeechRecognition() ;
       
       speakText(thn+"What should i call you?" );
       setTimeout(() => {
         micro.start();
       }, 2000);
       micro.onresult = function(event){
       input=event.results[0][0].transcript;
      
      textTyping(input);
       console.log(input);
       if(input.length>0){
        speakText(" You'd like me to i call your name,"+input+". is that right?");
         console.log('name')
         m=new webkitSpeechRecognition()
         setTimeout(() => {
           m.start();
         }, 3000);
         m.onresult=function(event){
          chose=event.results[0][0].transcript;
          cho=chose.toLowerCase();
    
      textTyping(cho);
          if(cho.includes('ye') || cho.includes('ha') && cho.length>0){
             speakText(" Okey. Now i call you "+input);
             console.log('~/')
             localStorage.setItem('my name', input)
          }
          else{
            thn="then."
            setName(); 
          }
         }
       } 
       } 
         }
         function checkCondtion(iinput){
          input=iinput.toLowerCase();
          function rem(){
            fetch('http://localhost:8080/remGET')
            .then(response=>{
             if(!response.ok){
                 throw new Error(response.status)
             }
             else{
                 return response.json();
             }
            })
            .then(data=>{
        for(const item of data){
         if(input.includes(item.key)){
           speakText(item.value);
           console.log(item.value);
           item.value=""
           gdata=false;
             break;
         }
         else{
           gdata=true;
         }
        }
      });
      return gdata;
      }
          console.log("Your Input is : "+input);
          textTyping(input)
         /*Virtual Input*/  // input = "create new file rohit.txt";
         res=input.split(' ');
         il=res.length;
         ch="";
         last=il-1;
         ques="";
         rn="";
         search=res.indexOf('search');
         op=res.indexOf('open');
         the=res.indexOf('the');
         where="";
         ot="";
         exc="";
         teln="";
         fl=res.indexOf('file');
         filename="";
         for(o=0;o<il;o++){
           ot=ot+" "+res[o]
         }
         if(input.includes('on')){
             where=res.indexOf('on');
         }
         else{
             where=res.indexOf('in')
         }
           if(input.includes('search')){
             found="Search";
             fd=search
           }
           else{
             found="Open"
             fd=op
           }
         data='';
          if(input.includes('hello') && il<3 || input.includes('jarvis')&& il<3 || input.includes('hi')&& il<3 ){
            kya.play();
          speakText(' Good '+wish+' Sir, How can I assist you today?');
            console.log('I am here');
            again=true;
         }
         else if(res[il-1]=="youtube" || res[il-1]=="YouTube" && !input.includes('download') || input.includes('youtube') ){
           if(input.includes('search')){
              console.log("You tube");
                 for(data=fd+1;data<where;data++){
                   ch=ch+" "+res[data];
                 }
                 if(res[last]=="tube" && res[last-1]=="you"){
                   res[last]=res[last-1]+res[last];
                   console.log('Youtube');
                 }
                speakText(" searching "+ch+" on youtube ");
              window.open('https://youtube.com/results?sp=mAEA&search_query='+ch);
           }
           else{
               speakText(' Opening youtube')
             window.open('https://youtube.com');
           }
             console.log(" "+found+"ing "+ch+' '+res[where]+" "+ res[last]+"........// ");
         }
         else if(input.includes('stop')){
             again=false;
         }
         else if(input.includes('background') && !input.includes('file')  || input.includes('Background') && !input.includes('value')){
             if(input.includes('background') ){
                 bg=res.indexOf('background');
           }
             else{
                 bg=res.indexOf('Background');
             }
             if(input.includes('color') || input.includes('Color') || input.includes('colour') || input.includes('Colour')){
                 co=res.indexOf(res[bg+1]);
                 cool="";
                 for(c=bg+2;c<il;c++){
                     cool=cool+res[c];
                 }
                 console.log(res[bg]+' '+res[co]+' '+cool)
                 bd.style.background=cool;
                 speakText(" Set Background colour "+cool)
                 again=true;
             }
             else if(input.includes('image') || input.includes('Image')){
                 im= res.indexOf(res[bg + 1]);
                 img=document.createElement('input');
                 img.type='file';
                 img.accept="image/*";
                 document.body.appendChild(img);
                 img.click();
                 image="";
                 img.addEventListener('change', function(event) {
                     var file = event.target.files[0];
                     var reader = new FileReader();
                     reader.onload = function(e) {
                         var imageUrl = e.target.result;
                         bd.style.backgroundImage = "url('" + imageUrl + "')";
                     };
                     reader.readAsDataURL(file);
                     speakText(" Changing background Image");
                     again = true;
                 });
             }
         }
         else if(input.includes('download') && input.includes('check')){
           speakText(" Now you cank play youtube download videos")
           window.open('https://www.youtube.com/feed/downloads')
         }
         else if(input.includes('remove') || input.includes('clear') ){
         bt=document.getElementById('bt');
    
           aoutput=document.getElementById('arthmatic')
             tb=document.getElementById('data');
               tbdy=document.getElementById('tbody');
              if(input.includes('file')){
               file.remove();
              }
              else if(input.includes('battery')){
               bt.style.display='none'
              }
              else if(input.includes('user') || input.includes('table')){
               tb.style.display='none'
              }
              else if(input.includes('answer') || input.includes('Answer')){
               aoutput.style.display='none'
              }
              else{
               bt.style.display='none'
               tb.style.display='none'
               aoutput.style.display='none'
                 file.remove();
              }
                 speakText(" Clearing")
                 again=true;
              }
         else if(input.includes('battery') || input.includes('charging') || input.includes('Battery')){
             autext="";
         bt=document.getElementById('bt');
    
             navigator.getBattery().then((battery) => {
                 b = battery.level * 100;
                 bl = b.toString().split('.')[0];
                 bbl = 100-bl;
                 chr = "";
                 if (battery.charging==true) {
                     chr = "+"
                 }
                 else {
                     chr = ""
                 }
                 bt.style.display='block'
                 console.log("Battery Level :) " + bl + "% "+chr+"\n " + battery.charging);
                 ll.innerHTML = bl + "%" + chr;
                 bt.style.background = "linear-gradient(0deg, lime " + bl + "%,transparent " + bl + "% )";
                 speakText(" Battery level is, "+bl+"%. Charging status is, "+battery.charging)
             });
             bt.style.display="flex";
             again=true;
         }
         else if( input.includes('my name') ||  input.includes('mera naam') ){
             if(input.includes('change') || input.includes('Change') || input.includes('Badal') || input.includes('badal') ){
              //  au.lang="hi-IN"
            again=false;
            setTimeout(function() {
              mod=localStorage.getItem('mode')
              if(mod=='text'){
                  setname();
              } else{
                setName();
              }   
              
            },2000)
             }
             else{
               uname=localStorage.getItem('my name');
             //  au1.text = "I remember your name, your name is "+uname;
             if(uname.length<2){
               speakText(" I don't know your name")
             }
             else{
               speakText(' I remember your name, your name is '+uname)
             }
               inpu=uname;
               again=true;
             }
         }
         else if(input.includes('remember')){
          const remembered = rememberData(input);
  console.log("Input:", input);
  if (typeof remembered === "object") {
      console.log("Data remembered:", remembered);
      console.log("Question:", remembered.question);
      console.log("Answer:", remembered.answer);
      fetch('http://localhost:8080/remPOST',{
        method: 'POST',
        header: {
          'Content-Type': 'text/plain'
        },
        body: remembered.question+'.'+remembered.answer
      })
  } else {
      console.log(remembered); // If there's an error
  }
  console.log("-----");
         }
         else if(input.includes('what') || input.includes('why') ||input.includes('when') ||input.includes('how') ||input.includes('who')||input.includes('where')){
      
       if(rem()){
        if(input.includes('what')){
          ques=input.indexOf('what')
         }
         else if(input.includes('why')){
          ques=input.indexOf('why')
         } 
         else if(input.includes('when')){
          ques=input.indexOf('when')
         } 
         else if(input.includes('how')){
          ques=input.indexOf('how')
         } 
         else if(input.includes('who')){
          ques=input.indexOf('who')
         }
         else if(input.includes('where')){
          ques=input.indexOf('where')
         }
         else{
          return 0;
         }
         let data; 
         for (data =ques; data<=last; data++) {
            ch= ch+" "+res[data];
            }
            speakText('Searching on the web '+ ch)
          window.open('https://www.google.com/search?q='+ch);
       }
       else{
        console.log('-----')
       }
         }
         else if(input.includes('call') || input.includes('Call') || input.includes('dial') || input.includes('Dial') ){
            if(input.includes('call')){
             call=res.indexOf('call');
             tel=call+1;
            }
            else if(input.includes('dial')){
             call=res.indexOf('dial');
             tel=call+1;
            }
            else if(input.includes('Dial')) {
                call=res.indexOf('Dial');
                tel = call+1;
            }
            else{
                call=res.indexOf('call');
                    tel=call+1;
            }
            if(input.includes(res[where])){
                    tel=call+2;
            }
            else if(input.includes('the')){
                tel=call+3;
            }
            for(tl=tel;tl<il;tl++){
                teln=teln+res[tl];
            }
            steln=teln.split(' ');
             speakText(' Dial '+steln);
            number=document.createElement('a');
            number.id='num';
            document.body.appendChild(number);
            number.href='tel: '+teln;
            setTimeout(function(){
            number.click();
            },4000);
            again=false;
         }
         else if(input.includes('+') || input.includes('-') || input.includes('*') || 
         input.includes('X') || input.includes('x') || input.includes('/') || input.includes('add')
          || input.includes('multipl') || input.includes('division') 
          || input.includes('subtract')  ){
           aoutput=document.getElementById('arthmatic');
           aoutput.style.display='block';
           operants=input.match(/\d+/g);
           a=operants[0];
           b=operants[1];
           if(input.includes('+') || input.includes('-')){
           if(input.includes('+') ){
           opr=input.indexOf('+');
           sum=Number(a)+Number(b);
           console.log('Answer of : '+ sum);
           aoutput.innerHTML=input+"<br> <b>"+sum;
             speakText(' it is,'+sum)
    
           }
           else{
             opr=input.indexOf('-')
             subtr=a-b;
             console.log('Answer of : '+ subtr);
           aoutput.innerHTML=input+"<br> <b>"+subtr;
            speakText(' it is,'+subtr);
           }
         }
         else if(input.includes('*') || input.includes('/')||input.includes('X') || input.includes('x') ){
           if(input.includes('*') || input.includes('X') || input.includes('x') ){
           opr=input.indexOf('*');
           mul=a*b;
           console.log('Answer of is : '+ mul)
           aoutput.innerHTML=input+"<br> <b>"+mul;
            speakText(' it is,'+mul);
           }
           else{
             opr=input.indexOf('/')
             divi=a/b;
             console.log('Answer of  is: '+ divi)
           aoutput.innerHTML=input+"<br> <b>"+divi;
             speakText(' Answer is '+divi);
           }
         }
         else{
           airthmatic(input);
         }
         }
         else if(input.includes('user')){
           const tb=document.getElementById('tbody');
               fetch('http://localhost:8080/api/jarvis')
            .then( resposnse=>{
             if(!resposnse.ok){
                speakText(" Connection error. Check you connection")
               throw new Error('http error '+resposnse.status);
             }
             else{
               return resposnse.json();
             }
            })
            .then(data => {
             showTable();
             console.log(data);
                lofdata=data.length;
                speakText(" I found "+lofdata+" user")
         
                 data.forEach(item => {
                 row=document.createElement('tr');
         
                 idc=document.createElement('td');
                 idc.textContent=item.id;
                 row.appendChild(idc)
         
                 namec=document.createElement('td');
                 namec.textContent=item.first_name;
                 row.appendChild(namec)
         
                 emailc=document.createElement('td');
                 emailc.textContent=item.email;
                 row.appendChild(emailc)
         
                 genderc=document.createElement('td');
                 genderc.textContent=item.gender;
                 row.appendChild(genderc)
         
                 tb.appendChild(row)
             });
            })
            .catch(error =>{
             console.log(error);
             speakText(" there has "+error);
            })
            again=true;
           }
         else if(input.includes('run') || input.includes('Run') || input.includes('execute')){
           if(input.includes('run') || input.includes('Run')){
               if(input.includes('run')){
                   run=res.indexOf('run');
               }
               else{
                   run=res.indexOf('run');
               }
           }
           else{
               run=res.indexOf('execute')
           }
           for(r=run+1;r<il;r++){
             rn=rn+''+res[r];
           }
               speakText(' execute ,'+rn);
               console.log(rn)
           window.open(rn+'.html');
         }
         else if(input.includes('search')){
                   for (data =fd+1; data<=last; data++) {
                   ch= ch+" "+res[data];
                   }
                   speakText("  Searching "+ch)
               window.open('https://www.google.com/search?q='+ch);
               console.log('Searching');
               }
         else if(input.includes('open')){
                 if(res[op+1] =="the") {
                 for(data =fd+2; data<=last; data++){
                   ch= ch+""+res[data];
                    }
                 }
                    else{
                        for(data=fd+1;data<=last;data++){
                            ch =ch+""+res[data];
                        } 
                    }
                    if(op+2>il){
                        speakText(" Please Ask clearly and again, What you ask to open ")
                        again=true;
                    }
                    else{
                     url='https://www.'+ch+'.com';
                     speakText("  opening "+ch);
                     window.open(url)
                    again=false;
                    }
               }
          else if(input.includes('file') && input.includes('data')){
              if(input.includes('set')){
                  se=res.indexOf('set')
                  atr=res[se+1];
                  if(atr=='as'){
                      atr=res[se+2]
                  }
                  bd.style.background=file.value;
                  console.log(atr);
                  speakText(" background colour is "+file.value)
                  }
          }
          else{
               if(input.includes('date') || input.includes('tarikh')){
                  date=time.getDate();
                  month= time.toLocaleString('en-GB', { month: 'long' });
                  speakText(date+','+month);
                  again=true;
                   }
              else if(input.includes('weather') ||  input.includes('Weather') || input.includes('Mausam')){
              speakText(" Today's weather, searching on the web")
               window.open("https://www.google.com/search?q=today's weather ");
              }
              else if(input.includes('create') && input.includes('file')){
               const filelo=document.getElementById('fileli');
             file.style.display="block"
                for(f=fl+1;f<il;f++){
                  filename=filename+res[f];
                }
               console.log('file...');
               filelo.appendChild(file);
               speakText(' Creating new file,'+filename+' Now you can start write')
               console.log('creating file'+filename);
               setTimeout(function(){
                       writeStart();
               },6000)
               again=false;
              }
              else if(input.includes('script code')){
                  file.value=spt.textContent
              }
              else if(input.includes('save it')){
                a=document.createElement('a');
           const data= new Blob([file.value],{type: 'text/plain'});
           a.href= URL.createObjectURL(data);
           a.download='filename';
           a.click();
           speakText(" File saving Successfully")
           a.remove();
           again=true;
              }
             //  else if(input.length>30){
             //   ma.play();
             //  }
              else if(input.includes('exit') || input.includes('close') && input.includes('page')){
                 speakText(" Closing current page");
                 setTimeout(function(){
                 window.close();
                 },1000);
                 again=false;
              }
              else if(input.includes('stop') && input.includes('mic') || input.includes('listen')){
                  again=false;
              }
                   else if(input.length>2){
                   gdata=false;
                     console.log('ok')
                     fetch('http://localhost:8080/trainerGET')
                .then(response=>{
                 if(!response.ok){
                     throw new Error(response.status)
                 }
                 else{
                     return response.json();
                 }
                })
                .then(data=>{
            for(const item of data){
             if(input.includes(item.key)){
               speakText(item.value);
               console.log(item.value);
               item.value=""
               gdata=false;
                 break;
             }
             else{
               gdata=true;
             }
            }
            if(gdata==true){
             getdata(input)
            }
          })
                .catch(err=>{
                  setTimeout(() => {
              document.getElementById('ed').style.animation="re 1.5s linear 5"
                  }, 5000);
              document.getElementById('ed').style.animation="uii 1.5s linear infinite"
    
                 speakText(" there has an ,"+err);  
                })      
                     //   aye.play();       
                    }
               //  speakText(' I fail to understand')
         
               }
               return again;
              
         }
      
    
  
     function speechR(again){
      input=""
      bd=document.getElementById('bd');
      const mic = new webkitSpeechRecognition();
      mic.autoplay=false;
      mic.continue=false;
      mic.lang = "en-GB"
       mic.start();
       mic.onstart=function(){
         js.style.animation="ui 1s linear infinite"
         js.style.color="white";
        }
       mic.onend=function(){
           if(again==true){
               setTimeout(function() {
                   mic.stop();
                   mic.start();
                   }, 4000);
               js.style.animation="ui 2s linear infinite"
           }
           else if(again==false) {
               mic.stop();
               js.style.animation="ed 2s linear infinite";
           }
           else{
               mic.stop();
           }
        }
         mic.onresult = function(event) {
           i=0;
      input = event.results[0][0].transcript; 
      checkCondtion(input);
      if(checkCondtion==true){
        speechR(true)
      }
     console.log(input)
        }
        


     }
     function getdata(input){
                 sdata=""
                 smethod=""
                 fetch('http://localhost:8080/getdata')
                 .then( resposnse=>{
         if(!resposnse.ok){
            speakText(" Connection error. Check you connection")
            document.getElementById('ed').style.animation="re 1s linear 5"
            
           throw new Error('http error '+resposnse.status);
         }
         else{
            console.log('connect succesfuly')
           return resposnse.json(); 
         }
       })
       .then(data=>{
         data.forEach(item => {
           if(input.includes(item.data)){
            sdata=item.data;
            smethod=item.method;
           }
         })
         if(smethod=="search"){
           window.open("https://www.google.com/search?q="+input);
         }
         else if(smethod=="youtube"){
           window.open('https://youtube.com/results?sp=mAEA&search_query='+input)
         }
         else{
           ufound(input)
         }
         console.log('Data: '+sdata+'\n Method: '+smethod)
         document.getElementById('bpath').style.animation="draw 3s linear 1"
       })      
       }   
     function ufound(inp){
       
       speakText(" you trying to search or open in youtube?")
                 meth=""
                 rec=new webkitSpeechRecognition();
                 setTimeout(() => {
                 rec.start();
                 }, 4000);
                 rec.onresult = function(e){
                   user_input=e.results[0][0].transcript.toLowerCase();
                   console.log('Usr : '+ user_input)
                     if(user_input.includes('search')){
                       meth="search"
                       speakText(" Searching on the web")
                       setTimeout(() => {
                       window.open("https://www.google.com/search?q="+inp);
                       }, 4000);
                       
                     }
                     else if(user_input.includes('youtube')){
                       meth="youtube";
                       speakText(" Searching on the you tube")
                       setTimeout(() => {
                       window.open('https://youtube.com/results?sp=mAEA&search_query='+inp)
                       }, 4000);
                     }
                     else{
                     //  ma.play();
                       khopdi.play();
                       speakText(" Faild to understand")
                     }
                     again=false;
                 checkDB(input,meth)
                 }
     }
     function showTable(){
       tb=document.getElementById('data');
       tb.style.display='block'
         }
     function checkDB(uinput, meth){
          
           again=false;
           console.log(uinput, meth)
           fetch('http://localhost:8080/savedata',{
                   method: 'POST',
                   header: {
                     'Content-Type': 'text/plain'
                   },
                   body: uinput+'.'+meth
                 })
                 document.getElementById('spath').style.animation=" draw 3s linear 1"
                 document.getElementById('bpath').style.animation=" draw 3s linear 1"
                 document.getElementById('sdata').innerHTML="Data Save SuccessFully "
         }
     async function checkURL(url){
         try{
             const resposnse= await fetch(url,{
                 method: 'HEAD',
                 cache :'no-cache'
             });
             if(resposnse.ok){
                 console.log('URL is valid...')
             }
             else{
                 console.log('URL is not valid.....!')
             }
         }
         catch (error){
                 console.error(' Error: ',error)
         }
       }
       // setInterval(() => {
       //  console.clear()
      //  }, 60000);
