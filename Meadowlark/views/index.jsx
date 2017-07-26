import React from 'react';
import DefaultLayout from './layouts/default';

export default class HellowReact extends React.Component {
    render() {
        return (
            <DefaultLayout title={this.props.title}>
                <div>
                    Hellow {this.props.name} from react APP
                </div>
            </DefaultLayout>
        )
    }
}