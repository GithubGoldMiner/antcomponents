import React, { Component } from 'react';
import { Form, DatePicker } from 'antd';

export default class InputField extends Component {
    render() {
        const { getFieldDecorator, getFieldError, isFieldTouched } = this.props;
        const errorStatus = isFieldTouched(this.props.fieldName) && getFieldError(this.props.fieldName);
        return (
            <Form.Item
                labelCol={{ span: this.props.labelCol }}
                wrapperCol={{ span: this.props.wrapperCol }}
                label={this.props.label}
                validateStatus={errorStatus ? 'error' : ''}
                help={errorStatus || ''}
            >
                {getFieldDecorator(this.props.fieldName, {
                    rules: this.props.rules? this.props.rules: [],
                })(
                    <DatePicker placeholder={this.props.placeholder} />
                )}
            </Form.Item>
        )
    }
}