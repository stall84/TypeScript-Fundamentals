
/**
 * @description Utility Function to import statically / search for images required by the weather API call
 */

const context = require.context('../images/icons', true, /\.(png)$/);

export const imageMap = {};

context.keys().forEach((key) => {
    return imageMap[key] = context(key);
});
