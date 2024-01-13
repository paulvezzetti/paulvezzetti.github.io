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
		description:
			`This website is my first experience with Svelte/SvelteKit. I spend my work day with <span style="font-family:'Inter'">Angular</span>, ` +
			`often migrating old <span style="font-family:'Inter'">AngularJS</span> code to newer <span style="font-family:'Inter'">Angular</span>. ` +
			`This is a opportunity to try out a more modern framework built with many of the lessons of <span style="font-family:'Inter'">Angular</span> ` +
			`and <span style="font-family:'Inter'">React</span> in mind. ` +
			`I learned a lot as part of this project.<br><br>` +
			`First, while I'm not a <span style="font-family:'Inter'">Svelte</span> expert after this experiment, it is easy to see the parallels with <span style="font-family:'Inter'">Angular</span>. ` +
			`All the concepts that I'm used to using in <span style="font-family:'Inter'">Angular</span> are available in <span style="font-family:'Inter'">Svelte</span>, ` +
			`often with less boilerplate and more standard-based implementations. ` +
			`I really appreciate the simplicity compared to <span style="font-family:'Inter'">Angular</span>.<br><br>` +
			`I also learned that I'm not a designer and I have amazing appreciation for all of the talented designers that I've worked with. ` +
			`This site isn't particularly captivating from a design perspective. I modeled the appearance off of a typical IDE in Dark Mode. ` +
			`That is where I am most comfortable and I suspect most visitors to my site will be as well.`
	},
	{
		id: 1,
		title: 'Visual Explorer',
		screenshot: visual_explorer,
		owner: 'Work',
		date: '2021 - 2024',
		link: 'https://mode.com',
		description:
			`I was brought into Mode to help complete the new visualization builder ` +
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
	},
	{
		id: 2,
		title: 'Shared Axis',
		screenshot: visual_explorer,
		owner: 'Work',
		date: '2023',
		link: 'https://mode.com',
		description: 'Allows users to compose visualizations on the same axis scale'
	},
	{
		id: 4,
		title: 'Color Enhancements',
		screenshot: visual_explorer,
		owner: 'Work',
		date: '2024',
		link: 'https://mode.com',
		description: 'Lead a small team of 3 developers to completely revamp how colors are configured'
	},
	{
		id: 5,
		title: 'Garmin WatchFace',
		screenshot: watchface,
		owner: 'Personal',
		date: '2024',
		link: 'https://github.com/paulvezzetti/Circles/',
		description: 'Fun project to create my own watch face for my new watch'
	},
	{
		id: 6,
		title: 'Drill Anywhere',
		screenshot: visual_explorer,
		owner: 'Work',
		date: '2023',
		link: 'https://mode.com',
		description: 'Hack Day project which won Hacker`s Choice Award'
	},
	{
		id: 3,
		title: 'DaysSince Mobile Apps',
		screenshot: days_since,
		owner: 'Personal',
		date: '2024',
		link: 'https://github.com/paulvezzetti',
		description: 'Built a mobile app for Android and IOS for personal use'
	}
];
