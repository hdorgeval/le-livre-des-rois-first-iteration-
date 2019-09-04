import { convertMarkdownToGraphData } from '../..';
import { getFirstMarkdownInDirectory } from '../../../tools/fs';

const storyFile = getFirstMarkdownInDirectory(`${__dirname}`);

if (storyFile) {
  const targetDirectory = `${process.cwd()}/src/app/data`;
  convertMarkdownToGraphData(storyFile, targetDirectory);
}
