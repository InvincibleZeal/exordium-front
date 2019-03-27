import { environment } from '../../../environments/environment';
import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
    private api = environment.api;
    private events = [];

    constructor(private http: Http) { }

    /**
    |--------------------------------------------------
    | SERVICE METHODS
    |--------------------------------------------------
    */

    public getEvents() {
        if (this.events.length) return Observable.of(this.events);
        return this.http.get(`${this.api}/events`).map((res: any) => {
            this.events = res.json();
            this.events.forEach((event: any) => {
                event.url = event.name.split(' ').map(x => x.toLowerCase()).join('-');
            });
            console.log(this.events);
            return this.events.slice(0);
        });
    }

    public getEvent = (url: string) => {
        if (!this.events.length) {
            return this.getEvents().map((events: any) => {
                return events.filter((event: any) => event.url === url)[0];
            })
        }
        return Observable.of(this.events.filter((event: any) => event.url === url)[0]);
    }

    public getTeams = () => this.teams;
    public getPages = () => this.pages;
    public getMember = (name: string) => this.members.filter(member => member.name.includes(name))[0];
    public getMembers = () => this.members;
    // public mockEvents = () => this.mockedEvents.slice(0);

    /**
    |--------------------------------------------------
    | MOCKED DATA
    |--------------------------------------------------
    */

    private pages = [
        {
            name: 'Home',
            url: ['/', 'home']
        },
        {
            name: 'events',
            url: ['/', 'events']
        },
        {
            name: 'About',
            url: ['/', 'about']
        },
        {
            name: 'Register',
            url: ['/', 'register']
        }
    ]

    private members = [
        {
            avatar: 'assets/img/members/Tabish Mir.jpeg',
            name: 'Tabish Mir',
            designation: 'General Coordinator',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://instagram.com/taabishm2'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Raisa Arief.jpeg',
            name: 'Raisa Arief',
            designation: 'General Event Organizer',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://instagram.com/raisaarief'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Niharika Sharma.jpeg',
            name: 'Niharika Sharma',
            organized: 'Organizer - In-quiz-tors | Whiplash',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://instagram.com/niharika_3110'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Baseerat Afshan.jpeg',
            name: 'Baseerat Afshan',
            organized: 'Organizer - Shutterbug | Treasure Hunt',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://instagram.com/baseerat_afshan'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Rohit Kumar Gupta.jpeg',
            name: 'Rohit Kumar Gupta',
            organized: 'Organizer - Treasure Hunt | Dubsmash',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://instagram.com/rohit_kr_gupta'
                },
            ]
        },
        {
            avatar: 'assets/img/placeholder-guy.jpeg',
            name: 'Ateeb Ahmad',
            organized: 'Organizer - CADDuel',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://instagram.com/ateebahmad532'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Apurv Thakur.jpeg',
            name: 'Apurv Thakur',
            designation: 'Treasurer',
            organized: 'Organizer - Code Relay',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://instagram.com/apurvthakur_'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Vipasha Sharma.jpeg',
            name: 'Vipasha Sharma',
            organized: 'Organizer - Shutterbug',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://instagram.com/vipasha.11'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Ankur Goswami.jpeg',
            name: 'Ankur Goswami',
            organized: 'Organizer - 405 Found',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://instagram.com/the_ankur_goswami'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Saurabh Jain.jpeg',
            name: 'Saurabh Jain',
            organized: 'Organizer - Code Jumble | Code Relay',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'instagram',
                    url: ' https://instagram.com/thejainsahab'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Padma Lhamo.jpeg',
            name: 'Padma Lhamo',
            organized: 'Organizer - Shutterbug | Cipher',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'instagram',
                    url: ' https://instagram.com/lhamo_28'
                },
            ]
        },
        {
            avatar: 'assets/img/members/ryan.jpg',
            name: 'Name',
            designation: 'Designation',
            organized: 'Organizer - Event Name',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'github',
                    url: 'https://github.com/dfdfdf'
                },
                {
                    media: 'instagram',
                    url: 'https://instagram.com/dfdfdf'
                },
                {
                    media: 'facebook',
                    url: 'https://www.facebook.com/dfdfdf',
                },
                {
                    media: 'linkedin',
                    url: 'https://www.linkedin.com/in/dfdfdf',
                },
            ]
        },
        {
            avatar: 'assets/img/members/Ritesh Ganjewala.jpeg',
            name: 'Ritesh Ganjewala',
            designation: 'General Secretary',
            specialization: 'Web Developer',
            organized: 'Organizer - Twisted Turns',
            description: 'Some description here',
            socials: [
                {
                    media: 'github',
                    url: 'https://github.com/InvincibleZeal'
                },

                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/_ganjewala_'
                },
                {
                    media: 'linkedin',
                    url: 'https://www.linkedin.com/in/invinciblezeal',
                },
            ]
        },
        {
            avatar: 'assets/img/members/Ankit.jpeg',
            name: 'Ankit',
            organized: 'Organizer - Code Relay',
            description: 'Some description here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/ajankit1997'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Edgar Monis.jpeg',
            name: 'Edgar Monis',
            organized: 'Organizer - In-Quiz-Tors',
            description: 'Some description here',
            socials: [
                {
                    media: 'facebook',
                    url: 'https://www.facebook.com/edgar.monis'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Kshitij Raj.jpeg',
            name: 'Kshitij Raj',
            organized: 'Organizer - Whiplash',
            description: 'Some description here',
            socials: [
                {
                    media: 'facebook',
                    url: 'https://www.facebook.com/kshtjraj05'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Hujat Masood Kirmani.jpeg',
            name: 'Hujat Masood Kirmani',
            organized: 'Organizer - Shutterbug | Treasure Hunt',
            description: 'Some description here',
            socials: [
                {
                    media: 'facebook',
                    url: 'https://www.facebook.com/thekaeshuralbino'
                },
            ]
        },
        {
            avatar: 'assets/img/placeholder-girl.jpeg',
            name: 'Ananta',
            organized: 'Organizer - In-Quiz-Tors',
            description: 'Some description here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/ananta.brajesh'
                },
            ]
        },
        {
            avatar: 'assets/img/placeholder-girl.jpeg',
            name: 'Iqra Jahan',
            organized: 'Organizer - Whiplash',
            description: 'Some description here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/_iq.ra'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Shikhar Jaiswal.jpeg',
            name: 'Shikhar Jaiswal',
            organized: 'Organizer - Art now',
            description: 'Some description here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/shikharskj'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Riya Baranwal.jpeg',
            name: 'Riya Baranwal',
            organized: 'Organizer - Art now',
            description: 'Some description here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/riya.baranwal'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Raj Bullu.jpeg',
            name: 'Raj Bullu',
            organized: 'Organizer - Painting',
            description: 'Some description here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/the_bullu'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Shah Siamoon.jpeg',
            name: 'Shah Siamoon',
            organized: 'Organizer - Treasure Hunt',
            description: 'Some description here',
            socials: []
        },
        {
            avatar: 'assets/img/members/Roman Wani.jpeg',
            name: 'Roman Wani',
            organized: 'Organizer - Whiplash',
            description: 'Some description here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/roman.wani'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Jasafa Showket.jpeg',
            name: 'Jasafa Showket',
            organized: 'Organizer - CADduel',
            description: 'Some description here',
            socials: [
                {
                    media: 'linkedin',
                    url: 'https://www.linkedin.com/in/jasafa-showket-419890175'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Swati Srivastava.jpeg',
            name: 'Swati Srivastava',
            organized: 'Organizer - In-Quiz-Tors',
            description: 'Some description here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/swati_srivastava_10'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Gyanendra Tiwari.jpeg',
            name: 'Gyanendra Tiwari',
            organized: 'Organizer - 405 Found',
            description: 'Some description here',
            socials: [
                {
                    media: 'facebook',
                    url: 'https://www.facebook.com/gyanendra.tiwari.374'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Vikas Kumar.jpeg',
            name: 'Vikas Kumar',
            organized: 'Organizer - 405 Found',
            description: 'Some description here',
            socials: [
                {
                    media: 'linkedin',
                    url: 'https://www.linkedin.com/vikas8nitsri'
                },
            ]
        },
    ]

    private teams = {
        organizers: [
            this.getMember('Tabish'),
            this.getMember('Raisa'),
            this.getMember('Niharika'),
            this.getMember('Baseerat'),
            this.getMember('Vipasha'),
            this.getMember('Padma'),
            this.getMember('Rohit'),
            this.getMember('Ritesh'),
            this.getMember('Apurv'),
            this.getMember('Ankur'),
            this.getMember('Saurabh Jain'),
            this.getMember('Ateeb'),
            this.getMember('Ankit'),
            this.getMember('Edgar'),
            this.getMember('Kshitij'),
            this.getMember('Iqra'),
            this.getMember('Ananta'),
            this.getMember('Hujat'),
            this.getMember('Shikhar'),
            this.getMember('Riya'),
            this.getMember('Bullu'),
            this.getMember('Siamoon'),
            this.getMember('Roman'),
            this.getMember('Jasafa'),
            this.getMember('Swati'),
            this.getMember('Gyanendra'),
            this.getMember('Vikas'),
        ],
        webd: [
            this.getMember('Ritesh'),
        ]
    }

    private socials = [
        {
            media: 'linkedin',
            url: '#',
        },
        {
            media: 'twitter',
            url: '#',
        },
        {
            media: 'facebook',
            url: '#',
        },
        // {
        //     media: 'instagram',
        //     url: '#',
        // },
    ];
    // private mockedEvents = [
    //     {
    //         name: 'Technolix DHhh dhdh',
    //         description: 'I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something',
    //         rules: ['Take a shower first', 'Dont come high'],
    //         requirements: ['Brain'],
    //         contact: 879766879704,
    //         organizer: 'Ritesh Ganjewala',
    //         date: 1554265800000,
    //         duration: 2,
    //         timings: {
    //             date: "April 4, 2019",
    //             time: "10:00 AM"
    //         },
    //         venue: "Hi-Tech 2",
    //         tags: ['Technical', 'Fun'],
    //     },
    //     {
    //         name: 'heriuy',
    //         description: 'I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something',
    //         rules: ['Take a shower first', 'Dont come high'],
    //         requirements: ['Brain'],
    //         contact: 879766879704,
    //         organizer: 'Ritesh Ganjewala',
    //         date: 1554280800000,
    //         duration: 2,
    //         timings: {
    //             date: "April 4, 2019",
    //             time: "12:30 PM"
    //         },
    //         venue: "Hi-Tech 2",
    //         tags: ['Non-Technical', 'Fun']
    //     },
    //     {
    //         name: 'itrur',
    //         description: 'I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something',
    //         rules: ['Take a shower first', 'Dont come high'],
    //         requirements: ['Brain'],
    //         contact: 879766879704,
    //         organizer: 'Ritesh Ganjewala',
    //         date: 1554277800000,
    //         duration: 2,
    //         timings: {
    //             date: "April 4, 2019",
    //             time: "12:00 PM"
    //         },
    //         venue: "Hi-Tech 2",
    //         tags: ['Fun']
    //     },
    //     {
    //         name: 'treih',
    //         description: 'I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something',
    //         rules: ['Take a shower first', 'Dont come high'],
    //         requirements: ['Brain'],
    //         contact: 879766879704,
    //         organizer: 'Ritesh Ganjewala',
    //         date: 1554274800000,
    //         duration: 2,
    //         timings: {
    //             date: "April 4, 2019",
    //             time: "11:30 AM"
    //         },
    //         venue: "Hi-Tech 2",
    //         tags: ['Non-Technical']
    //     },
    //     {
    //         name: 'bjdjr',
    //         description: 'I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something',
    //         rules: ['Take a shower first', 'Dont come high'],
    //         requirements: ['Brain'],
    //         contact: 879766879704,
    //         organizer: 'Ritesh Ganjewala',
    //         date: 1554271800000,
    //         duration: 2,
    //         timings: {
    //             date: "April 4, 2019",
    //             time: "11:00 AM"
    //         },
    //         venue: "Hi-Tech 2",
    //         tags: ['Technical']
    //     },
    //     {
    //         name: 'poeru',
    //         description: 'I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something',
    //         rules: ['Take a shower first', 'Dont come high'],
    //         requirements: ['Brain'],
    //         contact: 879766879704,
    //         organizer: 'Ritesh Ganjewala',
    //         date: 1554268800000,
    //         duration: 2,
    //         timings: {
    //             date: "April 4, 2019",
    //             time: "10:30 AM"
    //         },
    //         venue: "Hi-Tech 2",
    //         tags: ['Non-Technical', 'Fun']
    //     }
    // ]

}
