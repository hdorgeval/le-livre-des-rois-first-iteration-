import { convertMarkdownToGraphData } from '../../graph-generator';

const storyFile = `${__dirname}/story-with-image-nodes.md`;
const targetDirectory = `${process.cwd()}/src/app/diagrams/flow-diagram/data`;
convertMarkdownToGraphData(storyFile, targetDirectory);
