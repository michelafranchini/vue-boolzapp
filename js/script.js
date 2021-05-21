var app = new Vue(
    {
        el: "#root",
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                    random: [
                        {
                            date: "",
                            text: "Non sei simpatico e non fai ridere nessuno",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Non credo di aver capito",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Ah ah ah",
                            status: "received"
                        }, 
                        {
                            date: "",
                            text: "Eccoci, rientriamo",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Proviamo",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Stai giocando a Guitar Hero?",
                            status: "received"
                        },
                    ]

                },
            ],
            activeIndex : 0,
            userMessage: "",
            userData: "",
        },
        methods: {
            getImage: function (index) {
                let imgUrl = this.contacts[index].avatar;
                return "img/avatar" + imgUrl + ".jpg";
                // <!-- <img src="img/avatar_1.jpg" alt=""> -->
            },
            // getLastMessage: function (contact) {
            //     return contact.messages[contact.messages.length-1];
            // },
            
            getLastMessageData: function (index) {
                const lastMessageIndex = this.contacts[index].messages.length-1;
                
                return this.contacts[index].messages[lastMessageIndex].date;
            },

            getLastMessageText: function (index) {
                const lastMessageIndex = this.contacts[index].messages.length-1;

                return this.contacts[index].messages[lastMessageIndex].text.substr(0, 30) + "...";
            },

            selectChat: function(newIndex) {
                this.activeIndex = newIndex;
            },

            sendMessage: function() {

                this.userData = dayjs().format('DD/MM/YYYY hh:mm:ss');

                const prova = this.contacts[this.activeIndex].random[Math.floor((Math.random() * (5 - 0 + 1)) + 0)].text;
                console.log(prova);

                if (this.userMessage.trim().length > 0) {
                    this.contacts[this.activeIndex].messages.push({
                        date: this.userData,
                        text:  this.userMessage,
                        status:  'sent'
                    }), 

                    this.contacts[this.activeIndex].messages.push({
                        date: this.userData,
                        text:  prova,
                        status:  'received'
                    })

                } ;
                this.userMessage = "";
            },
        },
    }
)

// getRandom: function(max, min) {
//     return Math.floor((Math.random() * (max - min + 1)) + min); 
// },

// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all'interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato