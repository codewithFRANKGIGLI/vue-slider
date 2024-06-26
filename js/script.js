// Per prima cosa metto slides dentro i data

const { createApp } = Vue;
createApp({
    data() {
        return {
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            activeItem: 0,
            autoScroll: null,
        };
    },
    methods: {
        // show next image
        showNextImage: function() {
            if(this.activeItem < this.slides.length - 1) {
                this.activeItem++;
            } else {
                this.activeItem = 0;
            }
        },
        // show prev image
        showPreviousImage: function() {
            if(this.activeItem > 0) {
              this.activeItem--;
            } else {
              this.activeItem = this.slides.length - 1;
            }
        },
        activateImage: function(clickedIndex) {
        this.activeItem = clickedIndex;
        },
        startAutoplay() {
            this.autoScroll = setInterval(this.showNextImage, 3000);
        },
        stopAutoplay() {
            clearInterval(this.autoScroll);
            this.autoScroll = null;
        }
    },
    mounted() {
        this.startAutoplay();
    }
}).mount('#app');