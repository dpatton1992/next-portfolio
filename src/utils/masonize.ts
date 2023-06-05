/** 
* Utility function to masonize a container with a given number of columns.
* @param {number} numCols - Number of columns in the container.
* @param {HTMLElement} container - The container to masonize.
* @return {void}
*/
export const masonize = (numCols: number, container: HTMLElement): void => {
    const colHeights = Array(numCols).fill(0);

    Array.from(container.children as HTMLCollectionOf<HTMLElement>).forEach((child, i) => {
        const order = i % numCols;
        child.style.order = String(order);
        colHeights[order] += child.clientHeight;
    });
    container.style.height = Math.max(...colHeights) + 'px';
    console.log('Masonized!', container)
}