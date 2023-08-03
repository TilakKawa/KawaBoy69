function fetchActivity(){
    container.classList.replace('invisible','visible')
    headers.classList.replace('visible','invisible')
    button.style.top='75%'
    button.style.transform='translate(-50%,-50%) scale(1.4)'
    fetch('http://www.boredapi.com/api/activity')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.link){
            activity.innerHTML = `<span class='playfair'>Activity: </span><a href= ${data.link}><span class='monsterrat bold animation'>${data.activity}</span>(Learn More)</a>`
        }
        else{
            activity.innerHTML = `<span class='playfair'>Activity: </span><span class='monsterrat'>${data.activity}</span>`
            type.innerHTML = `<span class='playfair'>Type: </span><span class='monsterrat'>${data.type}</span>`
            participants.innerHTML = `<span class='playfair'>No. of Participants: </span><span class='monsterrat'>${data.participants}</span>`
            accessibility.innerHTML = `<span class='playfair'>Accessibility: </span><span class='monsterrat'>${data.accessibility}</span>`
        }
    })
}
button.addEventListener('click',fetchActivity)