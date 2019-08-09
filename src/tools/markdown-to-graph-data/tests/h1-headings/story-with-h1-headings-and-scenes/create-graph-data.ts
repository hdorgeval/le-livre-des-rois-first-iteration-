import { convertMarkdownToGraphData } from '../../../graph-generator';

const storyFile = `${__dirname}/story-with-only-h1-headings-and-scenes.md`;
const targetDirectory = `${process.cwd()}/src/app/diagrams/flow-diagram/data`;
convertMarkdownToGraphData(storyFile, targetDirectory);
