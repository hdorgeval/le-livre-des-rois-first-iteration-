import { convertMarkdownToGraphData } from '../../../graph-generator';

const storyFile = `${__dirname}/story-with-h1-headings-and-scenes-linked-to-headings.md`;
const targetDirectory = `${process.cwd()}/src/app/diagrams/flow-diagram/data`;
convertMarkdownToGraphData(storyFile, targetDirectory);
