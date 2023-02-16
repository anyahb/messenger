const users = [
    {
        user: "./img/plus.png"
    },
    {
        user: "./img/vera.png"
    },
    {
        user: "./img/steven.png"
    },
    {
        user: "./img/jack.png"
    },
    {
        user: "./img/alisson.png"
    }
]

const createUsers = (list) => {

    for (let i = 0; i < list.length; i++) {

        const users = document.querySelector('.second-column__users')
        const user = document.createElement('div')
        user.classList.add("second-column__item")
        users.append(user)

        const userImg = document.createElement('img')
        userImg.classList.add("second-column__item-img")
        userImg.src = list[i].user
        user.append(userImg)
    }
}

const messages = [
    {
        img: "./img/steven.png",
        name: "Steven Goldberg",
        message: "Your status is hilarius!",
        time: "1:11 PM",
        amount: "3"
    },
    {
        img: "./img/user2.png",
        name: "Danny Richardson",
        message: "Can you call me when you get home?",
        time: "12:22 PM",
        amount: "2"
    },
    {
        img: "./img/user3.png",
        name: "Emmanuel Johnson",
        message: "Just got this new protein and it's the best thing I've ever drank",
        time: "10:13 AM",
        amount: "1"
    },
    {
        img: "./img/user4.png",
        name: "Creatives Connect",
        message: "Last week we discussed creative financing",
        time: "10:09 AM",
        amount: "7"
    },
    {
        img: "./img/user5.png",
        name: "Lidia Gonzalez",
        message: "I'll wear a white shirt with blue jeans, what about you?",
        time: "8:26 AM",
        amount: "1"
    },
    {
        img: "./img/user6.png",
        name: "Viktor Johnmark",
        message: "You won't see this on the news",
        time: "5:12 AM",
        amount: "12"
    },
    {
        img: "./img/user7.png",
        name: "Nikky Lahiri",
        message: "I won't be home soon, so just give them my number",
        time: "3:19 AM",
        amount: "2"
    },
    {
        img: "./img/user8.png",
        name: "Fred Konk",
        message: "this looks amazing, are you kidding me?",
        time: "2:00 AM",
        amount: "4"
    },
]


const createMessages = (list) => {
    for (let i = 0; i < list.length; i++) {


        const messages = document.querySelector('.second-column__messages')
        const message = document.createElement('div')
        message.classList.add("second-column__message")
        messages.append(message)


        const messagesContent = document.createElement('div')
        messagesContent.classList.add("second-column__content")
        message.append(messagesContent)


        const messagePic = document.createElement('div')
        messagePic.classList.add("second-column__user-pic")
        messagesContent.append(messagePic)

        const messagePicItem = document.createElement('img')
        messagePicItem.classList.add("second-column__user-el")
        messagePicItem.src = list[i].img
        messagePic.append(messagePicItem)


        const messageText = document.createElement('div')
        messageText.classList.add("second-column__text")
        messagesContent.append(messageText)


        const messageName = document.createElement('div')
        messageName.classList.add("second-column__username")
        messageName.textContent = list[i].name
        messageText.append(messageName)


        const messageWords = document.createElement('div')
        messageWords.classList.add("second-column__text-content")
        messageWords.textContent = list[i].message
        messageText.append(messageWords)


        const messageNumbers = document.createElement('div')
        messageNumbers.classList.add("second-column__numbers")
        message.append(messageNumbers)


        const messageTime = document.createElement('div')
        messageTime.classList.add("second-column__time")
        messageTime.textContent = list[i].time
        messageNumbers.append(messageTime)


        const messageAmount = document.createElement('div')
        messageAmount.classList.add("second-column__amount")
        messageAmount.textContent = list[i].amount
        messageNumbers.append(messageAmount)


    }
}


const receivedMessages = [
    {
        img: "./img/viktor.png",
        message: "Check this out!",
        time: "5:12 AM",
        isMy: true
    },

    {
        message: "This is beautiful! I love it!",
        time: "7:16 AM",
        isMy: false
    }

]

/*if (receivedMessages[i].isMy === true){
       }*/


const sentMessages = (list) => {
    for (let i = 0; i < list.length; i++) {

        if (list[i].isMy === true) {
            const sentMessages = document.querySelector('.second-column__sent')
            const leftMessage = document.createElement('div')
            leftMessage.classList.add("sent-left")
            sentMessages.append(leftMessage)


            const fullText = document.createElement('div')
            fullText.classList.add("second-column__full-text")
            leftMessage.append(fullText)


            const leftPic = document.createElement('div')
            leftPic.classList.add("sent-left__userpic")
            fullText.append(leftPic)

            const leftPicItem = document.createElement('img')
            leftPicItem.classList.add("sent-left__userpic-img")
            leftPicItem.src = list[i].img
            leftPic.append(leftPicItem)

            const leftText = document.createElement('div')
            leftText.classList.add("sent-left__message")
            leftText.textContent = list[i].message
            fullText.append(leftText)

            const leftTime = document.createElement('div')
            leftTime.classList.add("second-column__left-time")
            leftTime.textContent = list[i].time
            leftMessage.append(leftTime)

        } else {
            const sentMessages = document.querySelector('.second-column__sent')
            const rightMessage = document.createElement('div')
            rightMessage.classList.add("sent-right")
            sentMessages.append(rightMessage)

            const rightContent = document.createElement('div')
            rightContent.classList.add("sent-right__content")
            rightMessage.append(rightContent)

            const rightText = document.createElement('div')
            rightText.classList.add("sent-right__message")
            rightText.textContent = list[i].message
            rightContent.append(rightText)

            const rightTime = document.createElement('div')
            rightTime.classList.add("second-column__right-time")
            rightTime.textContent = list[i].time
            rightContent.append(rightTime)


        }

    }
}


const media = [
    {
        img: "./img/media1.png"
    },

    {
        img: "./img/media2.png"
    },

    {
        img: "./img/media3.png"
    },

    {
        img: "./img/media4.png"
    },

    {
        img: "./img/media5.png"
    }

]


const mediaPics = (list) => {
    for (let i = 0; i < list.length; i++) {

        const mediaImages = document.querySelector('.second-column__media-pics')
        const mediaItem = document.createElement('img')
        mediaItem.classList.add("second-column__media-item")
        mediaItem.src = list[i].img
        mediaImages.append(mediaItem)
    }
}

const files = [
    {
        img: "./img/file1.png",
        title: "Design System",
        megabytes: "11 MB . Apr 08, 2022"
    },
    {
        img: "./img/pdffile.png",
        title: "System Documentation",
        megabytes: "05 MB . Apr 08, 2022"
    },
    {
        img: "./img/file1.png",
        title: "Pharmacy App UI/UX Design",
        megabytes: "106 MB . Apr 08, 2022"
    },
    {
        img: "./img/file3.png",
        title: "List of Winners",
        megabytes: "3 MB . Apr 08, 2022"
    }
]


const pdfFiles = (list) => {
    for (let i = 0; i < list.length; i++) {

        const sharedDocs = document.querySelector(".second-column__docs-container")
        const doc = document.createElement("div")
        doc.classList.add("second-column__docs")
        sharedDocs.append(doc)

        const file = document.createElement("div")
        file.classList.add("second-column__files")
        doc.append(file)

        const app = document.createElement("div")
        app.classList.add("second-column__app")
        file.append(app)

        const appImg = document.createElement("img")
        appImg.classList.add("second-column__app-img")
        appImg.src = list[i].img
        app.append(appImg)

        const docText = document.createElement("div")
        docText.classList.add("second-column__documentation")
        file.append(docText)

        const docTitle = document.createElement("div")
        docTitle.classList.add("second-column__doc-title")
        docTitle.textContent = list[i].title
        docText.append(docTitle)

        const megabytes = document.createElement("div")
        megabytes.classList.add("second-column__megabytes")
        megabytes.textContent = list[i].megabytes
        docText.append(megabytes)
    }


}


const links = [
    {
        img: "./img/uxdesign.png",
        title: "Pharmacy app ui/ux design",
        link: "https://behance/shots/145842"
    },
    {
        img: "./img/link2.png",
        title: "Kids game app prototype",
        link: "https://behance/shots/145842"
    },
    {
        img: "./img/link3.png",
        title: "User research",
        link: "https://behance/shots/145842"
    }
]

const sharedLinks = (list) => {
    for (let i = 0; i < list.length; i++) {
        const sharedUx = document.querySelector(".second-column__ux-container")
        const ux = document.createElement("div")
        ux.classList.add("second-column__ux")
        sharedUx.append(ux)

        const uxImg = document.createElement("div")
        uxImg.classList.add("second-column__ux-img")
        ux.append(uxImg)

        const uxImgItem = document.createElement("img")
        uxImgItem.classList.add("second-column__ux-el")
        uxImgItem.src = list[i].img
        uxImg.append(uxImgItem)

        const uxDescription = document.createElement("div")
        uxDescription.classList.add("second-column__ux-description")
        ux.append(uxDescription)

        const uxTitle = document.createElement("div")
        uxTitle.classList.add("second-column__ux-title")
        uxTitle.textContent = list[i].title
        uxDescription.append(uxTitle)

        const uxLink = document.createElement("div")
        uxLink.classList.add("second-column__ux-link")
        uxLink.textContent = list[i].link
        uxDescription.append(uxLink)

    }
}



pdfFiles(files)
sharedLinks(links)
mediaPics(media)
sentMessages(receivedMessages)
createMessages(messages)
createUsers(users)
