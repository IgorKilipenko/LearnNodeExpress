import React from 'react';
import DefaultLayout from './layouts/default';

export default class About extends React.Component {
    render() {
        return (
            <DefaultLayout title={this.props.title}>
                <div>
                    About
                </div>
            </DefaultLayout>
        );
    }
}