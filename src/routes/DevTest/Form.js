import react, { Component } from 'react';
import { Form, Button } from 'antd';
import InputField from '../../components/Inputs/InputField';
import DateField from '../../components/Inputs/DateField';
import TextAreaField from '../../components/Inputs/TextAreaField';

class FormTest extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator, getFieldError, isFieldTouched } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
                <InputField
                    {...this.props.form}
                    fieldName="UserName"
                    placeholder="Please Input User's Name"
                    labelCol={4}
                    wrapperCol={20}
                    label="User Name"
                />
                <InputField
                    {...this.props.form}
                    fieldName="Email"
                    placeholder="Please Input User's Email"
                    labelCol={4}
                    wrapperCol={20}
                    label="Email"
                />
                <DateField
                    {...this.props.form}
                    fieldName="StartDate"
                    placeholder="Select Start Date"
                    labelCol={4}
                    wrapperCol={20}
                    label="Start Date"
                />
                <TextAreaField
                    {...this.props.form}
                    fieldName="Description"
                    placeholder="Please Input Description for yourself"
                    labelCol={4}
                    wrapperCol={20}
                    label="Description"
                />
                <Button
                    type="primary"
                    htmlType="submit"
                >
                    Submit
                </Button>
            </Form>
        );
    }
}

const WrappedForm = Form.create()(FormTest);

export default WrappedForm;