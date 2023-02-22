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

        const users = document.querySelector('.display__users')
        const user = document.createElement('div')
        user.classList.add("display__item")
        users.append(user)

        const userImg = document.createElement('img')
        userImg.classList.add("display__item-img")
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
        message: "I'll wear a white shirt and blue jeans, what about you?",
        time: "8:26 AM",
        amount: "1"
    },
    {
        img: "./img/user6.png",
        name: "Viktor Johnmark",
        message: "Yep. It's on Netflix",
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


        const messages = document.querySelector('.display__messages')
        const message = document.createElement('div')
        message.classList.add("display__message")
        messages.append(message)


        const messagesContent = document.createElement('div')
        messagesContent.classList.add("display__content")
        message.append(messagesContent)


        const messagePic = document.createElement('div')
        messagePic.classList.add("display__user-pic")
        messagesContent.append(messagePic)

        const messagePicItem = document.createElement('img')
        messagePicItem.classList.add("display__user-el")
        messagePicItem.src = list[i].img
        messagePic.append(messagePicItem)


        const messageText = document.createElement('div')
        messageText.classList.add("display__text")
        messagesContent.append(messageText)


        const messageName = document.createElement('div')
        messageName.classList.add("display__username")
        messageName.textContent = list[i].name
        messageText.append(messageName)


        const messageWords = document.createElement('div')
        messageWords.classList.add("display__text-content")
        messageWords.textContent = list[i].message
        messageText.append(messageWords)


        const messageNumbers = document.createElement('div')
        messageNumbers.classList.add("display__numbers")
        message.append(messageNumbers)


        const messageTime = document.createElement('div')
        messageTime.classList.add("display__time")
        messageTime.textContent = list[i].time
        messageNumbers.append(messageTime)


        const messageAmount = document.createElement('div')
        messageAmount.classList.add("display__amount")
        messageAmount.textContent = list[i].amount
        messageNumbers.append(messageAmount)


    }
}


const receivedMessages = [
    {
        img: "./img/viktor.png",
        message: "Did you get your birthday card yet?",
        time: "5:12 AM",
        isMy: true
    },

    {
        message: "Not to my knowledge",
        time: "7:16 AM",
        isMy: false
    },


    {
        img: "./img/viktor.png",
        message: "I just put in my paper for my vacation time",
        time: "7:30 AM",
        isMy: true
    },

    {
        message: "Okay the plan is to come here, I'll buy your ticket",
        time: "7:31 AM",
        isMy: false
    },

    {
        img: "./img/viktor.png",
        message: "Sounds good!",
        time: "7:32 AM",
        isMy: true
    },

    {
        img: "./img/viktor.png",
        message: "Looking forward to seeing you",
        time: "7:32 AM",
        isMy: true
    },

    {
        message: "Btw did you manage to find out how to watch Breaking Bad?",
        time: "20:21 PM",
        isMy: false
    },

    {
        img: "./img/viktor.png",
        message: "Yep. It's on Netflix",
        time: "20:25 PM",
        isMy: true
    }





]

/*if (receivedMessages[i].isMy === true){
       }*/


const sentMessages = (list) => {
    for (let i = 0; i < list.length; i++) {

        if (list[i].isMy === true) {
            const sentMessages = document.querySelector('.display__sent')
            const leftMessage = document.createElement('div')
            leftMessage.classList.add("sent-left")
            sentMessages.append(leftMessage)


            const fullText = document.createElement('div')
            fullText.classList.add("display__full-text")
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
            leftTime.classList.add("display__left-time")
            leftTime.textContent = list[i].time
            leftMessage.append(leftTime)

        } else {
            const sentMessages = document.querySelector('.display__sent')
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
            rightTime.classList.add("display__right-time")
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


const createMediaPics = (list) => {
    for (let i = 0; i < list.length; i++) {

        const mediaImages = document.querySelector('.display__media-pics')
        const mediaItem = document.createElement('img')
        mediaItem.classList.add("display__media-item")
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


const createPdfFiles = (list) => {
    for (let i = 0; i < list.length; i++) {

        const sharedDocs = document.querySelector(".display__docs-container")
        const doc = document.createElement("div")
        doc.classList.add("display__docs")
        sharedDocs.append(doc)

        const file = document.createElement("div")
        file.classList.add("display__files")
        doc.append(file)

        const app = document.createElement("div")
        app.classList.add("display__app")
        file.append(app)

        const appImg = document.createElement("img")
        appImg.classList.add("display__app-img")
        appImg.src = list[i].img
        app.append(appImg)

        const docText = document.createElement("div")
        docText.classList.add("display__documentation")
        file.append(docText)

        const docTitle = document.createElement("div")
        docTitle.classList.add("display__doc-title")
        docTitle.textContent = list[i].title
        docText.append(docTitle)

        const megabytes = document.createElement("div")
        megabytes.classList.add("display__megabytes")
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

const createSharedLinks = (list) => {
    for (let i = 0; i < list.length; i++) {
        const sharedUx = document.querySelector(".display__ux-container")
        const ux = document.createElement("div")
        ux.classList.add("display__ux")
        sharedUx.append(ux)

        const uxImg = document.createElement("div")
        uxImg.classList.add("display__ux-img")
        ux.append(uxImg)

        const uxImgItem = document.createElement("img")
        uxImgItem.classList.add("display__ux-el")
        uxImgItem.src = list[i].img
        uxImg.append(uxImgItem)

        const uxDescription = document.createElement("div")
        uxDescription.classList.add("display__ux-description")
        ux.append(uxDescription)

        const uxTitle = document.createElement("div")
        uxTitle.classList.add("display__ux-title")
        uxTitle.textContent = list[i].title
        uxDescription.append(uxTitle)

        const uxLink = document.createElement("div")
        uxLink.classList.add("display__ux-link")
        uxLink.textContent = list[i].link
        uxDescription.append(uxLink)

    }
}



createPdfFiles(files)
createSharedLinks(links)
createMediaPics(media)
sentMessages(receivedMessages)
createMessages(messages)
createUsers(users)
