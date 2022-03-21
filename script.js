
//METHODE 1 

let player = document.querySelector('.player')
let lyrics = document.querySelector('.lyrics')
let lines = lyrics.textContent.trim().split('\n')

lyrics.removeAttribute('style')
lyrics.innerText = ''

let syncData = []

lines.map((line, index) => {
let [time, text] = line.trim().split('|')
syncData.push({'start': time.trim(), 'text': text.trim()})
console.log('syncData')
console.log(syncData)
console.log('line')
console.log(line)
})

player.addEventListener('timeupdate', () => {
syncData.forEach((item) => {
console.log(item)
if (player.currentTime >= item.start) lyrics.innerText = item.text
    })
})


// METHODE 2 : J'ai essayé mais ça marche pas 

// document.addEventListener("DOMContentLoaded",function(){
//     let audio = document.querySelector(".player")
//     let div = document.querySelector(".lyrics")
//     let table = {}

//     fetch("guerilla.txt").then(function (response) {

      

//             audio.addEventListener("timeupdate", function () {
          

//                 console.log(table)

//                for (let second in table) {
                
//                   console.log(table[second])

//                    if (second == Math.ceil(audio.currentTime)) {
//                         document.querySelector(".lyrics").innerHTML = table[second];
//                    }
//                }
//             })
       
//         })
// })
