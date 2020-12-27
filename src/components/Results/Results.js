import React, { Component } from 'react'
import BodyResults from './BodyResults';
import HeaderResults from './HeaderResults';
import Options from './Options';

export default class Results extends Component {
    render() {
        return (
            <div>
                <HeaderResults/>
                <Options/>
                <BodyResults/>
            </div>
        )
    }
}
