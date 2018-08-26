import react, { Component } from 'react';
import { Form, Button } from 'antd';
import InputField from '../../components/Inputs/InputField';

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
                    label="UserName"
                />
                <InputField
                    {...this.props.form}
                    fieldName="Email"
                    placeholder="Please Input User's Email"
                    labelCol={4}
                    wrapperCol={20}
                    label="Email"
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