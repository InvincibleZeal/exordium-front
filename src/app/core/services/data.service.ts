import { environment } from '../../../environments/environment';
import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class DataService {
    private api = environment.api;
    private events = [];

    constructor(private http: Http, private sanitizer: DomSanitizer) { }

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
            // console.log(this.events);
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
    public getMember = (name: string) => {
        let member = this.members.filter(member => member.name.includes(name))[0];
        if (!member) return this.getMember('Name');
        return member;
    };
    public getMembers = () => this.members.forEach(member => member.socials.forEach((social: any) => social.url = this.sanitizer.bypassSecurityTrustUrl(social.url)));
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
            organized: 'Cipher',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/taabishm2'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Raisa Arief.jpeg',
            name: 'Raisa Arief',
            designation: 'General Event Organizer',
            organized: 'Cipher',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/raisaarief'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Niharika Sharma.jpeg',
            name: 'Niharika Sharma',
            designation: 'Manager',
            organized: 'In-quiz-tors | Whiplash',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/niharika_3110'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Baseerat Afshan.jpeg',
            name: 'Baseerat Afshan',
            designation: 'Creative Team Organizer',
            organized: 'Shutterbug | Treasure Hunt',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/baseerat_afshan'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Rohit Kumar Gupta.jpeg',
            name: 'Rohit Kumar Gupta',
            designation: 'Event Analyzer',
            organized: 'Treasure Hunt | Dubsmash',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/rohit_kr_gupta'
                },
            ]
        },
        {
            avatar: 'assets/img/placeholder-guy.jpeg',
            name: 'Ateeb Ahmad',
            organized: 'CADDuel',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/ateebahmad532'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Apurv Thakur.jpeg',
            name: 'Apurv Thakur',
            designation: 'Treasurer',
            organized: 'Code Relay',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/apurvthakur_'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Vipasha Sharma.jpeg',
            name: 'Vipasha Sharma',
            organized: 'Shutterbug',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/vipasha.11'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Ankur Goswami.jpeg',
            name: 'Ankur Goswami',
            organized: '405 Found',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/the_ankur_goswami'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Saurabh Jain.jpeg',
            name: 'Saurabh Jain',
            organized: 'Code Jumble | Code Relay',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'github',
                    url: 'https://www.github.com/thejainsahab'
                },
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/thejainsahab'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Padma Lhamo.jpeg',
            name: 'Padma Lhamo',
            organized: 'Shutterbug | Cipher',
            description: 'Some Description Here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/lhamo_28'
                },
            ]
        },
        {
            avatar: 'assets/img/placeholder-guy.jpg',
            name: 'Name',
            designation: 'Designation',
            organized: 'Event Name',
            description: 'Some Description Here',
            socials: [
                // {
                //     media: 'github',
                //     url: 'https://www.github.com/invinciblezeal'
                // },
                // {
                //     media: 'instagram',
                //     url: 'https://www.instagram.com/_ganjewala_'
                // },
                // {
                //     media: 'facebook',
                //     url: 'https://www.facebook.com/invinciblezeal',
                // },
                // {
                //     media: 'linkedin',
                //     url: 'https://www.linkedin.com/in/invinciblezeal',
                // },
            ]
        },
        {
            avatar: 'assets/img/members/Ritesh Ganjewala.jpeg',
            name: 'Ritesh Ganjewala',
            designation: 'General Secretary',
            specialization: 'Web Developer',
            organized: 'Twisted Turns',
            description: 'Some description here',
            socials: [
                {
                    media: 'github',
                    url: 'https://www.github.com/InvincibleZeal'
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
            avatar: 'assets/img/members/Mobshshir Nayeem.jpeg',
            name: 'Mobshshir Nayeem',
            organized: 'Twisted Turns',
            description: 'Some description here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/md_mobshshir'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Ankit.jpeg',
            name: 'Ankit',
            organized: 'Code Relay',
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
            organized: 'In-Quiz-Tors',
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
            organized: 'Whiplash',
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
            organized: 'Shutterbug | Treasure Hunt',
            description: 'Some description here',
            socials: [
                {
                    media: 'facebook',
                    url: 'https://www.facebook.com/thekaeshuralbino'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Ananta.jpeg',
            name: 'Ananta',
            organized: 'In-Quiz-Tors',
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
            organized: 'Whiplash',
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
            organized: 'Art now',
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
            organized: 'Art now',
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
            organized: 'Painting',
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
            organized: 'Treasure Hunt',
            description: 'Some description here',
            socials: [
                {
                    media: 'linkedin',
                    url: 'https://www.linkedin.com/in/shah-siamoon'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Roman Wani.jpeg',
            name: 'Roman Wani',
            organized: 'Whiplash',
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
            organized: 'CADduel',
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
            organized: 'In-Quiz-Tors',
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
            organized: '405 Found',
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
            organized: 'Code Jumble | Cipher',
            description: 'Some description here',
            socials: [
                {
                    media: 'linkedin',
                    url: 'https://www.linkedin.com/in/vikas8nitsri'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Shivang Khajuria.jpeg',
            name: 'Shivang Khajuria',
            organized: 'Code Jumble',
            description: 'Some description here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/_s.h.i.v.a.n.g'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Shivang Khajuria.jpeg',
            name: 'Shivang Khajuria',
            organized: 'Code Jumble',
            description: 'Some description here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/_s.h.i.v.a.n.g'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Sahib Dawood.jpeg',
            name: 'Sahib Dawood',
            organized: '405 Found',
            description: 'Some description here',
            socials: []
        },
        {
            avatar: 'assets/img/members/Varun Dev.jpeg',
            name: 'Varun Dev',
            designation: 'Advisor',
            // organized: '405 Found',
            description: 'Some description here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/_s.h.i.v.a.n.g'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Abhishek Rathore.jpeg',
            name: 'Abhishek Rathore',
            organized: 'Twisted Turns',
            description: 'Some description here',
            socials: [
                {
                    media: 'linkedin',
                    url: 'https://www.linkedin.com/in/abhiarrathore'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Barha Khan.jpeg',
            name: 'Barha Khan',
            organized: 'Treasure Hunt',
            description: 'Some description here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/barhakhan02'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Ibrahim Lahrwal.jpeg',
            name: 'Ibrahim Lahrwal',
            organized: 'Crossfire\'19',
            description: 'Some description here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/ibrahimlaharwal'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Ubaid Bashir Wani.jpeg',
            name: 'Ubaid Bashir Wani',
            organized: 'FIFA-19 eTournament',
            description: 'Some description here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/UbaidBashir04'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Mohd Ubaid Nazir.jpeg',
            name: 'Mohd Ubaid Nazir',
            organized: 'Treasure Hunt',
            description: 'Some description here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/mohd.ubi'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Rehana Samad.jpeg',
            name: 'Rehana Samad',
            organized: 'Treasure hunt',
            description: 'Some description here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/rehanamir_'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Shah Mustafeez.jpeg',
            name: 'Shah Mustafeez',
            organized: 'PUBG Warriors',
            description: 'Some description here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/shah_mustafeez'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Hazim Bashir.jpeg',
            name: 'Hazim Bashir',
            organized: 'PUBG Warriors',
            description: 'Some description here',
            socials: [
                {
                    media: 'instagram',
                    url: 'https://www.instagram.com/hazimbashir'
                },
            ]
        },
        {
            avatar: 'assets/img/members/Gyan Pratipat.jpeg',
            name: 'Gyan Pratipat',
            organized: 'Treasure Hunt',
            description: 'Some description here',
            socials: []
        },
        {
            avatar: 'assets/img/members/Tafheem Javed Qadri.jpeg',
            name: 'Tafheem Javed Qadri',
            organized: 'Crossfire\'19',
            description: 'Some description here',
            socials: [{
                media: 'instagram',
                url: 'https://www.instagram.com/itoffie'
            },]
        },
        {
            avatar: 'assets/img/placeholder-guy.jpeg',
            name: 'Hindaal Mustafa',
            organized: 'FIFA19 eTournament',
            description: 'Some description here',
            socials: [{
                media: 'instagram',
                url: 'https://www.instagram.com/hhhazlu'
            },]
        },
    ]

    private teams = {
        organizers: [
            this.getMember('Varun Dev'),
            this.getMember('Tabish'),
            this.getMember('Raisa'),
            this.getMember('Shivang'),
            this.getMember('Saurabh Jain'),
            this.getMember('Edgar'),
            this.getMember('Ananta'),
            this.getMember('Iqra'),
            this.getMember('Siamoon'),
            this.getMember('Hujat'),
            this.getMember('Ankit'),
            this.getMember('Rohit'),
            this.getMember('Apurv'),
            this.getMember('Ritesh'),
            this.getMember('Roman'),
            this.getMember('Dawood'),
            this.getMember('Mobshshir'),
            this.getMember('Abhishek'),
            this.getMember('Shikhar'),
            this.getMember('Riya'),
            this.getMember('Jasafa'),
            this.getMember('Niharika'),
            this.getMember('Baseerat'),
            this.getMember('Padma'),
            this.getMember('Bullu'),
            this.getMember('Vikas'),
            this.getMember('Ankur'),
            this.getMember('Kshitij'),
            this.getMember('Vipasha'),
            this.getMember('Swati'),
            this.getMember('Gyanendra'),
            this.getMember('Barha'),
            this.getMember('Ateeb'),
            this.getMember('Ibrahim'),
            this.getMember('Ubaid Bashir'),
            this.getMember('Ubaid Nazir'),
            this.getMember('Rehana'),
            this.getMember('Mustafeez'),
            this.getMember('Hazim'),
            this.getMember('Pratipat'),
            this.getMember('Tafheem'),
            this.getMember('Hindaal'),
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
