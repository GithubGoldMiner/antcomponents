import React, { Component } from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types'

export default class InputField extends Component {
    static propTypes = {
        /** 
         * This attribute is used to determine when the form is submitted, the key within that `values` object
         **/
        fieldName: PropTypes.string,
        /** 
         * This attribute is used to determine the label column size in a 24-based grid system 
         **/
        labelCol: PropTypes.number,
        /** 
         * This attribute is used to determine the input column size in a 24-based grid system 
         **/
        wrapperCol: PropTypes.number,
        /** 
         * This attribute is used to determine the lable string
         **/
        label: PropTypes.string,
        /** 
         * This attribute is used to set the rule to evaludate the user's input. It's an array of objects
         **/
        rules: PropTypes.array,
        /** 
         * This attribute is used to determine the placeholder of the DateField.
         **/
        placeholder: PropTypes.string,
    }


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
                    <Input placeholder={this.props.placeholder}/>
                )}
            </Form.Item>
        )
    }
}