import react, { Component } from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types'
import Async from 'react-select/lib/Async';
const debounce = require('lodash/debounce');

export default class AsyncAutoComplete extends Component {
    static propTypes = {
        /** 
         * This method is used to provide the way to load raw options (need to process using this.props.asyncRawOptionProcess)
         * in an async / debounce way.
         * @param {string} queryString
         **/
        asyncRawOptionLoad: PropTypes.func,
        /** 
         * This method is used to process the raw options using: {label: label, value: value} data structure to load using 
         * react-select.
         * @param {object} rawOptionData
         **/
        asyncRawOptionProcess: PropTypes.func,
        /** 
         * This method is used to trigger when the option is selected.
         * @param {object} selectedValue
         **/
        onSelectChange: PropTypes.func,
        /** 
         * This attribute is used to determine whether the selection should be autofocused.
         **/
        isAutoFocus: PropTypes.bool,
        /** 
         * This attribute is used to show the label, if it's empty, then display no label.
         **/
        label: PropTypes.string,
      }

    handleOnChange = (value) => {
        this.props.onSelectChange(value);
    }

    handleFetchOptions = debounce((inputValue, callback) => {
        this.props.asyncRawOptionLoad(inputValue).then((data) => {
            callback(this.props.asyncRawOptionProcess(data))
        })
    }, 750)

    render() {
        const hasLabel = this.props.label ? true : false;
        return (
            <Row type="flex" style={{ alignItems: 'center' }}>
                {
                    hasLabel
                    ? <Col style={{ textAlign: 'right', paddingRight: 24 }} span={3}><span style={{ fontWeight: 'bold' }}>{this.props.label}</span></Col>
                    : null
                }
                <Col span={hasLabel? 21 : 24}>
                    <Async
                        autoFocus={this.props.isAutoFocus}
                        loadOptions={this.handleFetchOptions}
                        onChange={this.handleOnChange}
                    />
                </Col>
            </Row>
        );
    }
}