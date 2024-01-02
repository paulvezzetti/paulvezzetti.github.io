import mode from '../images/mode.png';
import jmp from '../images/jmp.png';
import sas from '../images/sas.png';

export interface experience {
	title: string;
	company: string;
	dates: string;
	logo: any;
	bullets: string[];
}

export const Experiences: Array<experience> = [
	{
		title: 'Senior Visualization Systems Engineer',
		company: 'Mode Analytics',
		dates: 'May 2021 - Present',
		logo: mode,
		bullets: [
			'Visualization expert driving expansion of Visual Explorer graphics tool. Continually improving the Grammar-of-Graphics capabilities to provide flexible, powerful charting.',
			'Technical team lead directing small engineering teams. Worked with Product and Design on feature requirements, feasibility and technical direction. Performed story and task breakdown into small units with clear objectives. Mentored team members through pairing and code review to ensure code standards and quality.',
			'Personally drove integration of innovative new features such as overlaying multiple chart layers on a shared axis and dynamic drill anywhere. Integrated multiple award winning Hack Day projects into production.',
			'Guided execution of new features in the component graphics library and implemented early application integration prototypes. Architected and implemented method to transition from a legacy chart provider to the new Visual Explorer renderer while maintaining backward compatibility for customers.',
			'Tackled a variety of issues around large data and high cardinality to increase the number of charts that could be rendered.',
			'Developed Typescript Angular components for a SaaS based product on a daily deployment schedule. Migrated legacy AngularJS components to Angular.'
		]
	},
	{
		title: 'Principle Software Engineer',
		company: 'JMP',
		dates: '2018 - May 2021',
		logo: jmp,
		bullets: [
			'Provided new features for graphical data exploration in desktop statistical software application using C++.',
			'Rewrote Area Chart to combine code and features with Line Chart.',
			'Provided new features and support for Histograms, Heatmaps, Tree Maps, Mosaic plots and Box plots.',
			'Created a hexagonal Heatmap.',
			'Improved usability of tool to compare data visualizations across many data columns.',
			'Added utility to provide custom binning of continuous column ranges.',
			'Rewrote Pareto analytics platform with new components including Bar, Line and Marker plots and improved usability.'
		]
	},
	{
		title: 'Principle Software Engineer',
		company: 'SAS Institute',
		dates: '2006 - 2018',
		logo: sas,
		bullets: [
			'Developed core data visualization components in portable C++ framework for consumption by SAS applications in HTML/Wasm, iOS, Android and Windows platforms.',
			'Implemented component rendering using Canvas, OpenGL, SVG and PDF. Led effort to redesign component lifecycle.',
			'Wrote Sankey diagram visualization. Provided support and new features for Network Plot, Process Flow Diagram, Bar, Area, and Line Charts. Implemented basic spring force layout algorithm for Network Diagram.',
			'Developed Python tool to visualize acceptance test output differences.',
			'Developed user interface to backend text analytics in JavaScript and TypeScript.',
			'Architected, designed and implemented completely new data exploration product in Flex/ActionScript. Product provided approachable data exploration with easy data loading, visualization and publishing. Integrated more complex statistical analysis such as text analytics, forecasting, correlation and regression.',
			'Ported Flex client code to Java backend code for migrating saved exploration content. Integrated two separate Flex products into a single offering.'
		]
	},
    {
		title: 'Senior Development Engineer',
		company: 'IBM',
		dates: '1997 - 2006',
		logo: sas,
		bullets: [
            'Developed, tested and provided customer support for system management software from Tivoli and IBM Server group.'
		]
	}
];
