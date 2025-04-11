/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { Quill } from '../lib';
//import 'react-quill/dist/quill.bubble.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            placeholder: 'Enter your text here',
            style: { height: '200' },
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <Quill
                    setProps={this.setProps}
                    {...this.state}
                />
            </div>
        )
    }
}

export default App;
