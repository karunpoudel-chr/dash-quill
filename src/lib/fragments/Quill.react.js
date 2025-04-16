import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { defaultProps, propTypes } from '../components/Quill.react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

/**
 * A Quill-Based Rich Text Editor Component for Dash
 */
export default class Quill extends Component {

    constructor(props) {
        super(props)
        this.state = { editorHtml: this.props.value }
        this.handleChange = this.handleChange.bind(this)
        this.reactQuillRef = React.createRef();
        this.quillRef = null; // Quill instance
        this.newToolbar = this.props.modules
    }

    handleChange(html, delta, source, editor) {
        //console.log('TRIGGERED handleChange');
        //if (editor.getLength() < this.props.maxLength) {
        //console.log('LENGTH IS GOOD');
        //console.log(this.props.value);
        //this.setState({ editorHtml: html });
        this.props.setProps({ value: html });
        this.props.setProps({ charCount: editor.getLength() })
            //}
    }

    checkCharacterCount = (event) => {
        //console.log('TRIGGERED checkCharacterCount');

        const unprivilegedEditor = this.reactQuillRef.current.unprivilegedEditor;
        if (unprivilegedEditor.getLength() > this.props.maxLength && !(['Backspace', 'Delete', 'Home', 'End', 'PageUp', 'PageDown'].includes(event.key) || event.key.startsWith('Arrow')))
            event.preventDefault();
    };

    handleThemeChange(newTheme) {
        if (newTheme === "core") newTheme = null;
        this.setState({ theme: newTheme })
    }

    componentDidMount() {
        // console.log('componentDidMount')
        this.attachQuillRefs()
    }

    componentDidUpdate() {
        // console.log('componentDidUpdate')
        this.attachQuillRefs()
    }

    attachQuillRefs = () => {
        if (typeof this.reactQuillRef.getEditor !== 'function') return;
        // console.log('Triggered GETEDITOR')
        this.quillRef = this.reactQuillRef.getEditor();
    }

    render() {
        return ( < div >
            <ReactQuill
                ref = { this.reactQuillRef }
                id = { this.props.id }
                className = { this.props.className }
                theme = { this.props.theme }
                value = { this.props.value }
                modules = { this.props.modules }
                formats = { this.props.formats }
                bounds = { '.app' }
                placeholder = { this.props.placeholder }
                readOnly = { this.props.readOnly }
                preserveWhitespace = { this.props.preserveWhitespace }
                style = { this.props.style }
                tabIndex = { this.props.tabIndex }

                onChange = { this.handleChange }
                onKeyDown = { this.props.maxLength ? this.checkCharacterCount : null }
            /> </div >
        )
    }
}

/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Quill.modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }
        ],
        ['link', 'image'],
        ['clean']
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    }
}

Quill.modulesNoToolbar = {
    toolbar: false,
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    }
}

Quill.defaultProps = defaultProps;
Quill.propTypes = propTypes;