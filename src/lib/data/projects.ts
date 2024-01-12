import personal_website from '../images/personal_website.png';
import days_since from '../images/days_since.png';
import visual_explorer from '../images/visual_explorer.png';
import watchface from '../images/watchface.png';

export interface Project {
    id: number;
	title: string;
    screenshot: any;
	owner: string;
	date: string;
    link: string;
	description: string;
}


export const Projects: ReadonlyArray<Project> = [

    {
        id: 0,
        title: 'This website',
        screenshot: personal_website,
        owner: 'Personal',
        date: '2024',
        link: 'https://github.com/paulvezzetti',
        description: `This website is my first experience with Svelte/SvelteKit. I spend most of my work day with Angular. ` + 
        `This is a opportunity to try out a more modern framework. I appreciate the simplicity of Svelte compared to Angular. ` + `
        While I'm not a Svelte expert after this experiment, it is easy to see the parallels with Angular. ` + 
        `All the concepts that I'm used to using in Angular are available in Svelte, often with less boilerplate and more standard based implementations.`,
    },
    {
        id: 1,
        title: 'Visual Explorer',
        screenshot: visual_explorer,
        owner: 'Work',
        date: '2021 - 2024',
        link: 'https://mode.com',
        description: `I was brought into Mode to help complete the new visualization builder ` + 
        `tool called Visual Explorer. This marked a transition for Mode from ` + 
        `being chart-type centric to a more flexible, Grammar-of-Graphics ` + 
        `designer tool. We worked across two internal development teams plus a ` + 
        `remote external company in India to deliver the first release.<br><br> ` + 
        `With my background in business intelligence and data visualization, my primary ` + 
        `focus was on configuring the underlying visualization library, driving ` + 
        `API requirements to the external team for the rendering library, and ` + 
        `setting overall visualization direction.<br><br>` + 
        `Over time as resources and priorities have shifted, I've taken on more ` + 
        `of a traditional front-end developer role, though still exclusively ` + 
        `related to data visualization. I generally lead small teams in ` + 
        `developing new features, provide insight into new feature planning, ` + 
        `and review architecture across multiple teams.` 
        ,
    },
    {
        id: 2,
        title: 'Shared Axis',
        screenshot: visual_explorer,
        owner: 'Work',
        date: '2023',
        link: 'https://mode.com',
        description: 'Allows users to compose visualizations on the same axis scale',
    },
    {
        id: 4,
        title: 'Color Enhancements',
        screenshot: visual_explorer,
        owner: 'Work',
        date: '2024',
        link: 'https://mode.com',
        description: 'Lead a small team of 3 developers to completely revamp how colors are configured',
    },
    {
        id: 5,
        title: 'Garmin WatchFace',
        screenshot: watchface,
        owner: 'Personal',
        date: '2024',
        link: 'https://github.com/paulvezzetti/Circles/',
        description: 'Fun project to create my own watch face for my new watch',
    },
    {
        id: 6,
        title: 'Drill Anywhere',
        screenshot: visual_explorer,
        owner: 'Work',
        date: '2023',
        link: 'https://mode.com',
        description: 'Hack Day project which won Hacker`s Choice Award',
    },
    {
        id: 3,
        title: 'DaysSince Mobile Apps',
        screenshot: days_since,
        owner: 'Personal',
        date: '2024',
        link: 'https://github.com/paulvezzetti',
        description: 'Built a mobile app for Android and IOS for personal use',
    },
];