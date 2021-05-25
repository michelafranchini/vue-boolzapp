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
                            text: "Sinceramente? Non ho capito cosa vuoi dirmi",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Guarda che non sto mica a smacchiare le giraffe",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Ma ti diverti davvero con così poco?",
                            status: "received"
                        },
                    ]
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
                    random: [
                        {
                            date: "",
                            text: "Ma sei serio?",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Voglio andare a sbronzarmi",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Ah ah ah",
                            status: "received"
                        }, 
                        {
                            date: "",
                            text: "Mah, non so davvero che pensare di te",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Ma sei fuori?",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Senti, ci sentiamo un altro giorno",
                            status: "received"
                        },
                    ]
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
                    random: [
                        {
                            date: "",
                            text: "Guarda, meglio che non mi rompi le scatole oggi",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Oh piano con le offese",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Gira al largo chicco",
                            status: "received"
                        }, 
                        {
                            date: "",
                            text: "Ma vattelapesca",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Guarda che non sto mica a smacchiare i giaguari",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Ma sei scemo?",
                            status: "received"
                        },
                    ]
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
                            text: "Preferirei una mattonata in testa",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Cuore, levati di torno",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Oh ciccio stai calmino",
                            status: "received"
                        }, 
                        {
                            date: "",
                            text: "Vado ad ubriacarmi e torno",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Preferirei morire",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Non ti rispondo nemmeno",
                            status: "received"
                        },
                    ]

                },
                {
                    name: 'Giannetto',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Ho voglia di sushi',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Andiamo al giapponese?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Ti aspetto sotto casa!',
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
                            text: "Sinceramente? Non ho capito cosa vuoi dirmi",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Guarda che non sto mica a smacchiare le giraffe",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Ma ti diverti davvero con così poco?",
                            status: "received"
                        },
                    ]
                },
                {
                    name: 'Birbino',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Vorrei andare a fare shopping',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Andiamo al centro commerciale?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Okey!',
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
                            text: "Sinceramente? Non ho capito cosa vuoi dirmi",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Guarda che non sto mica a smacchiare le giraffe",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Ma ti diverti davvero con così poco?",
                            status: "received"
                        },
                    ]
                },
                {
                    name: 'Gianpippo',
                    avatar: '_8',
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
                            text: "Sinceramente? Non ho capito cosa vuoi dirmi",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Guarda che non sto mica a smacchiare le giraffe",
                            status: "received"
                        },
                        {
                            date: "",
                            text: "Ma ti diverti davvero con così poco?",
                            status: "received"
                        },
                    ]
                },
            ],
            activeIndex : 0,
            userMessage: "",
            userData: "",
            msgIndex : 0,
            dropdownOpen: false 
        },
        methods: {
            getImage: function (index) {
                let imgUrl = this.contacts[index].avatar;
                return "img/avatar" + imgUrl + ".jpg";
                // <!-- <img src="img/avatar_1.jpg" alt=""> -->
            },
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

                // this.userData = dayjs().format('DD/MM/YYYY HH:mm:ss');

                const randomText = this.contacts[this.activeIndex].random[Math.floor((Math.random() * (5 - 0 + 1)) + 0)].text;
                console.log(randomText);

                

                if (this.userMessage.trim().length > 0) {
                    this.contacts[this.activeIndex].messages.push({
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text:  this.userMessage,
                        status:  'sent'
                    }),

                    setTimeout(() => {
                        this.contacts[this.activeIndex].messages.push({
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text:  randomText,
                        status:  'received'
                    })
                    }, 1000); 
                }
                this.userMessage = "";
                
            },
            search: function(event) {
                const searchInput = event.target.value;
                return this.contacts.map(contact => {
                    if (contact.name.toLowerCase().includes(searchInput.toLowerCase())) {
                        contact.visible = true;
                    }  else {
                        contact.visible = false;
                    }
                })
            }, 
            dropdownToggle: function(index) {
                this.msgIndex = index;
                this.dropdownOpen = !this.dropdownOpen;
            },
    
            deleteMsg: function(msgIndex) {            
                this.selectChat().messages.splice(msgIndex, 1);
                if (this.selectChat().messages.length == 0) { 
                    this.contacts.splice(this.activeIndex, 1);
                }
                this.dropdownOpen = false;
            }
        },
    }
)


// getRandom: function(max, min) {
//     return Math.floor((Math.random() * (max - min + 1)) + min); 
// },

// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all'interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato