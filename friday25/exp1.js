// const EventEmitter=require('events');
// //here EventEmitter is predefined class that is it is provided by the 
// const ud=new EventEmitter()
// ud.on('greet',(name)=>{
//     console.log(`Heloo there ${name} \n`)
// })
// ud.on('exit',(num)=>{
//     console.log(`thnkyou for visit ${num}\n`)
// })
// ud.emit('greet',"Utkarsh")
// ud.emit('exit','AIML')


// const EventEmitter=require('events');
// class Button extends EventEmitter{
//     click(){
//         console.log('Button was Clicked')
//         this.emit('click',{timestamp:Date.now()});
//     }
// }
// const button =new Button()
// button.on('click',(event)=>{
//     console.log(`click event fired at ${event.timestamp}`)

// });
// button.click();



console.log("Start")
setTimeout(()=>{
    console.log("timeout")
},2000)
setImmediate(()=>{
    console.log("Immediate")
})
process.nextTick(()=>{
    console.log("Next Tick")
})
console.log("Exit")
