const { Record } = require('immutable');

const DEFAULTS = {
    // Type of the code containers
    containerType: 'code_block',
    // Type of the code lines
    lineType: 'code_line',

    // Shift+Enter will exit the code container, into the given block type
    shiftEnterBlockType: 'paragraph',
    // Should the plugin handle the select all inside a code container
    selectAll: true
};

/**
 * The plugin options
 */
class Options extends new Record(DEFAULTS) {}

module.exports = Options;
