import { convertMarkdownToGraphData } from '../../graph-generator';

const storyFile = `${__dirname}/story-with-only-h1-heading.md`;
const targetDirectory = `${process.cwd()}/src/app/data`;
convertMarkdownToGraphData(storyFile, targetDirectory);