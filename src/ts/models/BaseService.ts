



export default class BaseService {
    timeoutId!: number

    constructor(){}

    notification({ content, classNames }) {
        if(this.timeoutId){
            clearTimeout(this.timeoutId)
        }

        const notificationAside = document.getElementById('tearoom-notification')
        notificationAside.innerHTML += `<p id="notification-p" class="animated__animated animated__slideInUp ${classNames ?? 'is-primary'}">${content}</p>`

        setTimeout(() => {
            const notificationParagraph = document.getElementById('notification-p')
            notificationParagraph.classList.remove('animated__slideInUp')
            notificationParagraph.classList.add('animated__slideOutDown')
            setTimeout(() => {
                notificationAside.innerHTML = ""
            }, 1000)
        }, 2000)
      


    }

    logger(content:any , separatorCount = 3){
        let count = 0
        while(count < separatorCount){
            console.log('--------------')
            count++;
        }

        console.log('✅ [logger][content]', content)

    }
}