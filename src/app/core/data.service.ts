export class DataService {

    getTeams = () => this.teams;
    getPages = () => this.pages;
    getMember = (name: string) => this.members.filter(member => member.name.includes(name))[0];
    getMembers = () => this.teams

    constructor() { }

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

}
