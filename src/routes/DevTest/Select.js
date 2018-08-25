import react, { Component } from 'react';
import AsyncAutoComplete from '../../components/Select/AsyncAutoComplete';

export default class Select extends Component{
    asyncRawOptionLoad = (queryString) => {
        return new Promise((resolve) => {
            resolve([{
                ACF2: 'MUM2',
                Name: 'Xiaoyu Mu',
            }, {
                ACF2: 'LEEALE9',
                Name: 'Alex Lee',
            }].filter((element) => queryString === element.ACF2));
        })
    }

    asyncRawOptionProcess = (data) => (
        data.map((element) => ({label: `${element.ACF2} - ${element.Name}`, value: element}))
    )

    handleOnSelectChange = (value) => {
        console.log(value);
    }

    render() {
        return (
            <div>
                <AsyncAutoComplete
                    label="Test"
                    asyncRawOptionLoad={this.asyncRawOptionLoad}
                    asyncRawOptionProcess={this.asyncRawOptionProcess}
                    onSelectChange={this.handleOnSelectChange}
                />
            </div>
        );
    }
}