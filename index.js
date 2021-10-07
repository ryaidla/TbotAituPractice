const TelegramApi = require('node-telegram-bot-api')



const bot = new TelegramApi(token, {polling: true})



    bot.setMyCommands([
        {command: '/start', description: 'Bot Started'}
    ])

    bot.on('message', async msg =>{
        const text = msg.text;
        const chatId = msg.chat.id;

        if(text === '/start') {
            await bot.sendMessage(chatId, `Hello!
Wellcome to AITU Industrial Practice Manual Bot!
Here you can ask questions and read about all steps that you will pass!
The bot created By 3rd year students, so this guys are passed this part of student's life.
So, go throw the steps and find out how you will pass your practice
Next use command /step1
`)
        }

        if(text === '/step1'){
            await bot.sendMessage(chatId, 'Step 1\n' +
                'You should understand that is better to find internship by yourself, but if you could not university will give you place to pass it.\n' +
                'Next use command /step2')
        }
        if(text === '/step2'){
            await bot.sendMessage(chatId, 'Step 2 \n' +
                'Practive duration is 4 weeks, 8 hours per day. Also, you can get it in advance, but you will work 8 weeks, 4 hours per day.' +
                'Next use command /step3')
        }
        if(text === '/step3'){
            await bot.sendMessage(chatId, 'Step 3\n' +
                'In the begining of your practice you need to draw up a contract with organization: if university has agreement with this \n' +
                'company you will have 2 sides contract, if no 3 sides contract.\n' +
                'Next use command /step4')
        }
        if(text === '/step4'){
            await bot.sendMessage(chatId, 'Step 4\n' +
                '\n' +
                'And the last step, you need to make plan of your practice on the first week, on the last week you should get your characteristics from organization,\n' +
                'and finally you will write a report of your practice 2000 words.' +
                'Next use command /finalStep')}
        if(text === '/finalStep'){
            await bot.sendMessage(chatId, 'Finally\n' +
                '\n' +
                'That\'s all \n' +
                'One of the frequently asked question is: \n' +
                '-Can I word as a Teacher?  \n' +
                '-No you can not, but if you want to work in educational place you can work as a System Administrator/Engineer.\n' +
                '\n' +
                'For more information you can read https://moodle.astanait.edu.kz/mod/forum/discuss.php?d=408')}

    })



