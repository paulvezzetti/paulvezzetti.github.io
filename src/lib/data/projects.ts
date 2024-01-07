import personal_website from '../images/personal_website.png';
import days_since from '../images/days_since.png';

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
        link: 'https://mode.com',
        description: `This website is my first experience with Svelte/SvelteKit. I spend most of my work day with Angular. ` + 
        `This is a opportunity to try out a more modern framework. I appreciate the simplicity of Svelte compared to Angular. ` + `
        While I'm not a Svelte expert after this experiment, it is easy to see the parallels with Angular. ` + 
        `All the concepts that I'm used to using in Angular are available in Svelte, often with less boilerplate and more standard based implementations.`,
    },
    {
        id: 1,
        title: 'Visual Explorer',
        screenshot: days_since,
        owner: 'Work',
        date: '2024',
        link: 'https://mode.com',
        description: 'Worked with a team creating a new visualization tool based on the Grammar of Graphics',
    },
    {
        id: 2,
        title: 'Shared Axis',
        screenshot: personal_website,
        owner: 'Work',
        date: '2024',
        link: 'https://mode.com',
        description: 'Allows users to compose visualizations on the same axis scale',
    },
    {
        id: 3,
        title: 'DaysSince Mobile Apps',
        screenshot: days_since,
        owner: 'Personal',
        date: '2024',
        link: 'https://mode.com',
        description: 'Built a mobile app for Android and IOS for personal use',
    },
    {
        id: 4,
        title: 'Color Enhancements',
        screenshot: personal_website,
        owner: 'Work',
        date: '2024',
        link: 'https://mode.com',
        description: 'Lead a small team of 3 developers to completely revamp how colors are configured',
    },
    {
        id: 5,
        title: 'Garmin WatchFace',
        screenshot: days_since,
        owner: 'Personal',
        date: '2024',
        link: 'https://mode.com',
        description: 'Fun project to create my own watch face for my new watch',
    },
    {
        id: 6,
        title: 'Drill Anywhere',
        screenshot: personal_website,
        owner: 'Work',
        date: '2024',
        link: 'https://mode.com',
        description: 'Hack Day project which won Hacker`s Choice Award',
    }






];