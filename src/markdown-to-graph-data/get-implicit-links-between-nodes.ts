import { StoryLink, StoryNode } from '../markdown-to-graph-data';

/**
 * find node A and node B where B's name is a substring A's name
 * @example
 * Node A name: scene is happening in mexico
 * Node B name: mexico
 *  => then a link A->B will be created
 *
 * @param nodes
 */
export const getImplicitLinksByMatchingEndOfName = (nodes: StoryNode[]): StoryLink[] => {
  const implicitLinks: StoryLink[] = [];
  nodes.forEach((node): void => {
    nodes
      .filter(
        (referencedNode): boolean =>
          referencedNode.name.endsWith(node.name) &&
          referencedNode.name !== node.name &&
          node.id !== 'root',
      )
      .filter((referencedNode): boolean => !referencedNode.name.startsWith('After '))
      .filter((referencedNode): boolean => !referencedNode.name.startsWith('Après '))
      .forEach((referencedNode): void => {
        implicitLinks.push({
          weight: 0,
          source: referencedNode,
          target: node,
        });
      });
  });
  return implicitLinks;
};
