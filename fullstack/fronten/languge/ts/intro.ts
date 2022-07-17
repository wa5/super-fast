var nodemailer=require('nodemailer')
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'waseemahmed116@gmail.com',
        pass:'aucznmpkooobgqze'
    }
})
var mailoption={
    from:'waseemahmed116@gmail.com',
    to:'syed.shouib93@gmail.com',
    subject:'text mail  from waseem',
    text:'hello shauib how r u,can u dance'
}
transporter.sendMail(mailoption,(errr:any,res:any)=>{
    if(errr){
        console.log(errr)
    }else{
        console.log('mail sent')
    }
})
