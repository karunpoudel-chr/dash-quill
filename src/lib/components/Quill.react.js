import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Quill as RealComponent } from '../LazyLoader';

/**
 * A Quill-Based Rich Text Editor Component for Dash
 */
export default class Quill extends Component {
    render() {
        return (
            <React.Suspense fallback={null}>
                <RealComponent {...this.props}/>
            </React.Suspense>
        );
    }
}

Quill.defaultProps = {
    //hasToolbar: true,
    // maxLength: 140,
    // modules: {
    //     toolbar: [
    //     [{ 'font': [] }],
    //     [{size: []}],
    //     ['bold', 'italic', 'underline'],
    //     [{'list': 'ordered'}, {'list': 'bullet'}],
    //     //['link', 'image'],
    //     //['clean']
    //     ],  
    //     clipboard: {
    //     // toggle to add extra line breaks when pasting HTML:
    //     matchVisual: false,
    //     }
    // },
};

Quill.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     * slateContent={SlateRTE.deserializeHTMLString(value)}
     */
    id: PropTypes.string,

    // onChange: PropTypes.func,
 
    // hasToolbar: PropTypes.bool,
 
    /**
     * The value displayed in the input.
     */
    value: PropTypes.string,
 
    /**
     * Maximu number of characters allowed.
     */
    maxLength: PropTypes.number,

    /**
     * The number of charaters in the editor (excl HTML)
     */
    charCount: PropTypes.number,

    /**
     * The toolbar options modules.
     * Should be {'toolbar':[list of options]}
     */
    modules: PropTypes.object,

    /**
     * A list of formats that are recognized.
     * Should be [list of options]
     */
    formats: PropTypes.array,

    /**
     * Placeholder text to show when editor is empty.
     */
    placeholder: PropTypes.string,

    /**
     * Whether to instantiate the editor to read-only mode.
     */
    readOnly: PropTypes.bool,

    /**
     * If true, a pre tag is used for the editor area instead of the default div tag. This prevents Quill from collapsing continuous whitespaces on paste. https://github.com/slab/quill/issues/1751
     */
    preserveWhitespace: PropTypes.bool,

    /**
     * Name of theme to use. The builtin options are "bubble" or "snow".
     */
    theme: PropTypes.string,

    /**
     * An object with custom CSS rules to apply on the editor's container
     */
    style: PropTypes.object,

    /**
     * The order in which the editor becomes focused, among other controls in the page, during keyboard navigation.
     */
    tabIndex: PropTypes.number,

    /**
     * Class Name for the div container containing quill
     */
    className: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
 };


export const defaultProps = Quill.defaultProps;
export const propTypes = Quill.propTypes;