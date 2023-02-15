const {sendEmail}= require('../../../../../config/email');

module.exports={
    async afterCreate(event){
        const {result}=event;
        try {
            sendEmail({
                from: 'rvaldez@305plasticsurgery.com',
                to: 'valdesdiazroberto@gmail.com',
                subject: 'hey',
                text: 'hello'
            })
        } catch (error) {
            console.log(error);
        }
    }
}