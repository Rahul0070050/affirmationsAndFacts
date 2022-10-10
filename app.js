const affermations = "https://dulce-affirmations-api.herokuapp.com/affirmation/"
const randomFacts = "https://asli-fun-fact-api.herokuapp.com/"

const whatsappImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFYElEQVRoge2Za2wUVRTHf2d2twgIBQyoPBKtPDR92l0EMUSLYEyMEZNWo6gJCUGCqekWJEr8sEL8ANquBAOBGIMBFSEajYkxUQIKNDx2aXfLGxUjghCeBSrQ7s7xA1RhZ7Yzs6X6wf6+zbnnnPs/O2fu3DsLPfTw/0ZuShaNGCXxs2MFo0KFEKpjQIYBfa/NcRE4pnBQVOIG5qZRh49uW//M+nRXp+5SAffvmjc0nW5/BeFFYISXWIU/BPk4TXrpntCS33LVkFMBhQ3hQf6ALFDRGUCvXCe/RjvIRz6jfX5j+dKTXoM9F1Cys6YSkWXAYK+xDpwVkVcTwfo1XoJcF1C1rsq3v2BEVNBq79q8IB8EuDg7HlrZ7srbjdPIQ9W9erf4PxV4umviXKJ8S56vMln6bquTq+HkULWuytenxb/mXxMPIDxOW/qrkYeqHZ8vxwIOFAyvAypvijAvCI/2afEvdXbrhOJYzVRBvnDy604UpjWHop9kG88qbNy26v6X/L59IEO7R5przvqM1JhsS2zWFroc8EfciBf4CWUD4HkNd8nAlPoWZhu0LaAkMXeIKrOcMgssSgTzxyTHRif7jEAZ4Lhq5IKoTC/aUWv7prctQNrTs4DenSZFv0sEo28gEROgsXzxMSBrr3aRPEPs3z/WAhRR9CWnjKYpbyPoDclMXZazRCeE59GIRa/FUNhYWwJyj0O61G2t+VszjU0PvNckQkMXZHbGsOLGc+MyjZYCfEqFi2SnNlVEUnYDJrIqB3GuENN4JNNmKUBNDbrINfiujZFbbEeUYu/SXKIayjRZnwFDxrhI5cvvd8GSrCxW84Sgs3NT5wJhVKbJUoCo3uEml2LOyLSZyArAl5M4d9yZabBbRvu5TDatbEdN2Q0WoftWoatYtNkVYPtw2uA3DVleta7q71980Pn8xaBbclXnAs00WFsIznlIOP5AwYh5HRebKiIpM6WVwMHc9DlyPtNgXYXgtLecurA0Fn6s42r3+CUnxM8kYFeWgCZEI0AuB/ljmQabFpJmj0l9CmtLt9eO7jAkyqJHz1/If0iE94HrP50cJ5V6Mhl8760ArSNVZDqw3/VMqgcyTTYtpHFv+gEYqD79vnhnuKDD8GtF5HIiGK02xSxHWAucNFQrk+OX/g4QD61sbw7Wr0oG8wtRngMuO84ixKymDIpjc+4VzH05FAHoMdOQp3aXRy0TOVESCx8BhnfmIyrlibH1jdfbLHegOVS3H/DaRh1TDDVMfiiNhWeh7k9xhQ3hQcAwB7dfEqH6pkyj/Xa6a9viPgrLS+LhDUU7aie4CfDnMROHY6vCmszdL9mCipOvD5S2K4eBfDcCHNisIqvNK/r5ngnRM9cPBGMzA+3S9zWUBXT+Bv/TTJkFu8cvOZE5kLXq0lh4ocKbueu20AZsF2gwkbOG6O2qTAXudhFblwxF59oN+LNFqMhp1HLHukIeMFFhoqBeUh8PkOftTAygqpO96esWFGFmPLSoJZuDbQGFeyJ5Ag93ny53iMg7yWD06858bAswWlseBG7tFlUuEeTL0T8fme/kZ7+M+nTKzZfkAdXPUr37P+vmHxz7h1jlv+p/FVicCA2Y3/G5xgnrVuLqO+Ak3XuysuOoqsxsHlv/jZcg62buStskOhd/CZUfVeRDtdmf58BFgUVXLgfu8yoebFpIDXOK6A035gzQoKqbVY0t2rd/bE9hpA2grLFmTjptvCyYL4AUeZz7ACqrAyIr4qG6U16Fd2CzGw1vNJCjClvR1OZkaNBeN/1Yur12tPp0MlCGUoToEJABXL3LLcAJYL+gccPwbWgsr9ubq+geeujhH/4C73C/wFpP7o4AAAAASUVORK5CYII='

const savedFacts = document.getElementById('saved-facts-list')

let fact = null;
let key = null;
let have = false;
let copy = false;
let url = affermations

const affirBtn = document.getElementById("affirmation")
const factBtn = document.getElementById("random-facts")
const whatsApp = document.getElementById('whatsApp')
const copyText = document.getElementById('copy-text')
const alertBox = document.getElementById('alert')


alertBox.style.left = window.innerWidth / 2 - alertBox.clientWidth / 2 + 'px'


affirBtn.addEventListener("click", (e) => {
    affirBtn.classList.add("btn-success")
    factBtn.classList.remove("btn-success")
    url = affermations
    shoRandomResult()
})

factBtn.addEventListener("click", (e) => {
    affirBtn.classList.remove("btn-success")
    factBtn.classList.add("btn-success")
    url = randomFacts
    shoRandomResult()
})

copyText.addEventListener('click', () => {
    if (!copy) {
        return
    }
    alertBox.style.opacity = '1'
    setTimeout(() => {
        alertBox.style.opacity = '0'
    }, 1000);
    copy = false
    navigator.clipboard.writeText(fact)
})

whatsApp.addEventListener('click', () => {
    const a = document.createElement('a')
    a.setAttribute('href', `whatsapp://send?text=${fact}`)
    a.setAttribute('data-action', 'share/whatsapp/share')
//    a.setAttribute('target', '_blank')
    a.click()
})



function shoRandomResult() {

    fetch(url)
        .then(response => response.json())
        .then(response => {
            let content = response?.data?.fact || response[0]?.phrase
            console.log(content);
            document.getElementById('fact').innerText = content
            fact = content
            key = new Date().getTime()
            have = true;
            copy = true;
        })
        .catch(err => console.error(err));
}
// localStorage.clear('fact')

shoRandomResult()

let facts = JSON.parse(localStorage.getItem('fact'))
facts?.forEach(fact => {
    savedFacts.innerHTML += `
<li class="list-group-item px-3 border-0 rounded-3 list-group-item-primary mb-2">
    <h6 id="text">${fact.fact}</h6>
    <div id="btns">
        <a href="whatsapp://send?text=${fact.fact}" data-action="share/whatsapp/share" target="_blank">
            <img class="whatsapp" src="${whatsappImg}">
        </a> 
        <a id="delete" onClick="deleteFact(${fact.key})">
            <img class="close" src="https://img.icons8.com/ios-glyphs/90/000000/delete-sign.png"/>
        </a>
    </div>
</li>`
});

function saveTheFact() {
    if (!have) {
        return
    }
    have = false

    if (facts) {
        console.log(facts);
        localStorage.clear('fact')
        facts.push({ key, fact })
        savedFacts.innerHTML += `
        <li class="list-group-item px-3 border-0 rounded-3 list-group-item-primary mb-2">
            <h6 id="text">${fact}</h6>
            <div id="btns">
                <a href="whatsapp://send?text=${fact}" data-action="share/whatsapp/share" target="_blank">
                    <img class="whatsapp" src="${whatsappImg}"></a> 
                </a> 
                <a id="delete" onClick="deleteFact(${key})">
                    <img class="close" src="https://img.icons8.com/ios-glyphs/90/000000/delete-sign.png"/>
                </a>
            </div>
        </li>`
        localStorage.setItem('fact', JSON.stringify(facts))
    } else {
        let facts = [{ key, fact }]
        savedFacts.innerHTML = `
        <li class="list-group-item px-3 border-0 rounded-3 list-group-item-primary mb-2">
            <h6 id="text">${fact}</h6>
            <div id="btns">
                <a href="whatsapp://send?text=${fact}" data-action="share/whatsapp/share" target="_blank">
                    <img class="whatsapp" src="${whatsappImg}">
                </a> 
                <a id="delete" onClick="deleteFact(${key})">
                    <img class="close" src="https://img.icons8.com/ios-glyphs/90/000000/delete-sign.png"/>
                </a>
            </div>
        </li>`
        localStorage.setItem('fact', JSON.stringify(facts))
    }
}

function deleteFact(key) {
    let facts = JSON.parse(localStorage.getItem('fact'))
    let tempFact = facts?.filter(fact => fact.key != key)
    localStorage.setItem('fact', JSON.stringify(tempFact))
    savedFacts.innerHTML = ""
    tempFact?.forEach(fact => {
        savedFacts.innerHTML += `
        <li class="list-group-item px-3 border-0 rounded-3 list-group-item-primary mb-2">
            <h6 id="text">${fact.fact}</h6>
            <div id="btns">
                <a href="whatsapp://send?text=${fact.fact}" data-action="share/whatsapp/share" target="_blank">
                    <img class="whatsapp" src="${whatsappImg}">
                </a>
                <a id="delete" onClick="deleteFact(${fact.key})">
                    <img class="close" src="https://img.icons8.com/ios-glyphs/90/000000/delete-sign.png"/>
                </a>
            </div>
        </li>`
    });
}




// do your browser supports service worker
if ("serviceWorker" in navigator) {
    // register the service worker file
    navigator.serviceWorker.register('./app.service.worker.js').then(res => { // success
        console.log('servese worker is done');
    }).catch(err => { // failed
        console.log(err);
    })
}
