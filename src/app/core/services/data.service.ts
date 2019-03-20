import { environment } from '../../../environments/environment';
import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class DataService {

    getTeams = () => this.teams;
    getPages = () => this.pages;
    getEvents = () => {
        this.events.forEach((event: any) => {
            event.url = event.name.split(' ').map(x => x.toLowerCase()).join('-');
        });
        console.log(this.events);
        return this.events;
    };
    getEvent = (url: string) => this.events.filter((event: any) => event.url === url)[0]
    getMember = (name: string) => this.members.filter(member => member.name.includes(name))[0];
    getMembers = () => this.teams
    private api = environment.api;
    constructor(private http: Http) {
        this.run();
    }

    run() {
        this.http.get(`${this.api}/events`).subscribe((res: any) => console.log(res.json()));
    }

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
            avatar: 'assets/img/members/ryan.jpg',
            name: 'Name',
            designation: 'Designation',
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
            avatar: 'assets/img/employee/ritesh.jpeg',
            name: 'Ritesh Ganjewala',
            designation: 'Full Stack Developer',
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
                    media: 'facebook',
                    url: 'https://www.facebook.com/invinciblezeal',
                },
                {
                    media: 'linkedin',
                    url: 'https://www.linkedin.com/in/invinciblezeal',
                },
            ]
        }
    ]

    private teams = [
        {
            name: 'Web Development',
            members: [
                this.getMember('Name'),
                this.getMember('Name'),
                this.getMember('Name'),
            ]
        },
        {
            name: 'Management',
            members: [
                this.getMember('Name'),
                this.getMember('Name'),
                this.getMember('Name'),
            ]
        }
    ]

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
    private events = [
        {
            name: 'Technolix DHhh dhdh',
            description: 'I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something',
            rules: ['Take a shower first', 'Dont come high'],
            requirements: ['Brain'],
            contact: 879766879704,
            organizer: 'Ritesh Ganjewala',
            date: 1554265800000,
            duration: 2,
            timings: {
                date: "April 4, 2019",
                time: "10:00 AM"
            },
            venue: "Hi-Tech 2",
            tags: ['Technical', 'Fun'],
        },
        {
            name: 'heriuy',
            description: 'I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something',
            rules: ['Take a shower first', 'Dont come high'],
            requirements: ['Brain'],
            contact: 879766879704,
            organizer: 'Ritesh Ganjewala',
            date: 1554265800000,
            duration: 2,
            timings: {
                date: "April 4, 2019",
                time: "10:00 AM"
            },
            venue: "Hi-Tech 2",
            tags: ['Non-Technical', 'Fun']
        },
        {
            name: 'itrur',
            description: 'I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something',
            rules: ['Take a shower first', 'Dont come high'],
            requirements: ['Brain'],
            contact: 879766879704,
            organizer: 'Ritesh Ganjewala',
            date: 1554265800000,
            duration: 2,
            timings: {
                date: "April 4, 2019",
                time: "10:00 AM"
            },
            venue: "Hi-Tech 2",
            tags: ['Fun']
        },
        {
            name: 'treih',
            description: 'I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something',
            rules: ['Take a shower first', 'Dont come high'],
            requirements: ['Brain'],
            contact: 879766879704,
            organizer: 'Ritesh Ganjewala',
            date: 1554265800000,
            duration: 2,
            timings: {
                date: "April 4, 2019",
                time: "10:00 AM"
            },
            venue: "Hi-Tech 2",
            tags: ['Non-Technical']
        },
        {
            name: 'bjdjr',
            description: 'I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something',
            rules: ['Take a shower first', 'Dont come high'],
            requirements: ['Brain'],
            contact: 879766879704,
            organizer: 'Ritesh Ganjewala',
            date: 1554265800000,
            duration: 2,
            timings: {
                date: "April 4, 2019",
                time: "10:00 AM"
            },
            venue: "Hi-Tech 2",
            tags: ['Technical']
        },
        {
            name: 'poeru',
            description: 'I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something',
            rules: ['Take a shower first', 'Dont come high'],
            requirements: ['Brain'],
            contact: 879766879704,
            organizer: 'Ritesh Ganjewala',
            date: 1554265800000,
            duration: 2,
            timings: {
                date: "April 4, 2019",
                time: "10:00 AM"
            },
            venue: "Hi-Tech 2",
            tags: ['Non-Technical', 'Fun']
        }
    ]
}