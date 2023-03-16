const {sendEmail}= require('../../../../../config/email');

module.exports={
    async afterCreate(event){
        const {result}=event;
        try {
            sendEmail({
                from: 'rvaldez@305plasticsurgery.com',
                to: 'valdesdiazroberto@gmail.com',
                subject: 'New lead in Portfolio Online',
                html: '<p>Name:'+result.name+'</p></br><p>Email:'+result.email+'</p></br><p>Phone:'+result.phone+'</p></br><p>Message:'+result.website+'</p></br><p>Message:'+result.message+'</p></br>'
            })
        } catch (error) {
            console.log(error);
        }
    }
}