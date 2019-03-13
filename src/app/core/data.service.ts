import { environment } from './../../environments/environment';
import { OnInit, Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class DataService implements OnInit {

    getTeams = () => this.teams;
    getPages = () => this.pages;
    getEvents = () => this.events;
    getMember = (name: string) => this.members.filter(member => member.name.includes(name))[0];
    getMembers = () => this.teams
    private api = environment.url;
    constructor(private http: Http) {
        http.get(`${this.api}/events`).subscribe(res => console.log(res));
    }

    ngOnInit() {
        this.http.get(`${this.api}/users`).subscribe((res) => console.log(res));
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
            title: 'Technolix',
            description: 'I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something',
            url: 'technolix',
        },
        {
            title: 'heriuy',
            description: 'I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something',
            url: 'heriuy',
        },
        {
            title: 'itrur',
            description: 'I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something',
            url: 'itrur',
        },
        {
            title: 'treih',
            description: 'I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something',
            url: 'treih',
        },
        {
            title: 'bjdjr',
            description: 'I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something',
            url: 'bjdjr',
        },
        {
            title: 'poeru',
            description: 'I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something',
            url: 'poeru',
        }
    ]
}
