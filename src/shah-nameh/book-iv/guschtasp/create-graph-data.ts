import { convertMarkdownToGraphData } from '../../../tools/markdown-to-graph-data/graph-generator';

const storyFile = `${__dirname}/story.fr.md`;
const targetDirectory = `${process.cwd()}/src/app/data`;
convertMarkdownToGraphData(storyFile, targetDirectory);
