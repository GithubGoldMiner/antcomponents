import React, { Component } from 'react';
import { Form, Input } from 'antd';

export default class ForecastInput extends Component {
    render() {
        const { getFieldDecorator, getFieldError, isFieldTouched } = this.props;
        const errorStatus = isFieldTouched(this.props.fieldName) && getFieldError(this.props.fieldName);
        return (
            <Form.Item
                wrapperCol={{ span: this.props.wrapperCol }}
                validateStatus={errorStatus ? 'error' : ''}
                help={errorStatus || ''}
            >
                {getFieldDecorator(this.props.fieldName, {
                    rules: this.props.rules? this.props.rules: [],
                })(
                    <Input addonBefore={this.props.label} addonAfter={this.props.allocation}  />
                )}
            </Form.Item>
        )
    }
}