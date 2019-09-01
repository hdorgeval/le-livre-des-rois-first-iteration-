import { convertMarkdownToGraphData } from '../../../markdown-to-graph-data';
import { getFirstMarkdownInDirectory } from '../../../tools/fs';

const storyFile = getFirstMarkdownInDirectory(`${__dirname}`);

if (storyFile) {
  const targetDirectory = `${process.cwd()}/src/app/data`;
  convertMarkdownToGraphData(storyFile, targetDirectory);
}
