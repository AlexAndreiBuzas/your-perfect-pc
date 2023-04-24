import React from "react";
import components from './data.js';
import './Filter.css';

class FilterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedComponents: {
                cpu: null,
                gpu: null,
                motherboard: null,
                memory: null,
                storage: null,
                psu: null,
                case: null,
            },
        };
    }

    handleChange = (event, componentType) => {
        const selectedComponents = this.state.selectedComponents;
        selectedComponents[componentType] = event.target.value;
        this.setState({selectedComponents});
    };

    render() {
        const {selectedComponents} = this.state;

        const cpuOptions = components.cpu.map((cpu) => (
            <option key={cpu.id} value={cpu.name}>
                {cpu.name}
            </option>
        ));

        const gpuOptions = components.gpu.map((gpu) => (
            <option key={gpu.id} value={gpu.name}>
                {gpu.name}
            </option>
        ));


        const motherboardOptions = components.motherboard.map((motherboard) => (
            <option  key={motherboard.id} value={motherboard.name}>
                {motherboard.name}
            </option>
        ));

        const memoryOptions = components.memory.map((memory) => (
            <option key={memory.id} value={memory.name}>
                {memory.name}
            </option>
        ));

        const storageOptions = components.storage.map((storage) => (
            <option key={storage.id} value={storage.name}>
                {storage.name}
            </option>
        ));

        const psuOptions = components.psu.map((psu) => (
            <option key={psu.id} value={psu.name}>
                {psu.name}
            </option>
        ));

        const caseOptions = components.case.map((caseItem) => (
            <option key={caseItem.id} value={caseItem.name}>
                {caseItem.name}
            </option>
        ));

        return (
            <div className="complet-build">
                <div className="select-components">
                    <h1 className="build-your-pc inter-normal-black-36px">Build your PC</h1>
                    <div className="linie">
                        <label className="inter-normal-black-20px">CPU:</label>
                        <select
                            className="sub-linie inter-normal-black-20px"
                            onChange={(e) => this.handleChange(e, 'cpu')}
                            value={selectedComponents.cpu}
                        >
                            <option value="">Select CPU</option>
                            {cpuOptions}
                        </select>
                    </div>
                    <div className="linie">
                        <label className="inter-normal-black-20px">GPU:</label>
                        <select
                            className="sub-linie inter-normal-black-20px"
                            onChange={(e) => this.handleChange(e, 'gpu')}
                            value={selectedComponents.gpu}
                        >
                            <option value="">Select GPU</option>
                            {gpuOptions}
                        </select>
                    </div>
                    <div className="linie">
                        <label className="inter-normal-black-20px">Motherboard:</label>
                        <select
                            className="sub-linie inter-normal-black-20px"
                            onChange={(e) => this.handleChange(e, 'motherboard')}
                            value={selectedComponents.motherboard}
                        >
                            <option value="">Select Motherboard</option>
                            {motherboardOptions}
                        </select>
                    </div>
                    <div className="linie">
                        <label className="inter-normal-black-20px">Memory:</label>
                        <select
                            className="sub-linie inter-normal-black-20px"
                            onChange={(e) => this.handleChange(e, 'memory')}
                            value={selectedComponents.memory}
                        >
                            <option value="">Select Memory</option>
                            {memoryOptions}
                        </select>
                    </div>
                    <div className="linie">
                        <label className="inter-normal-black-20px">Storage:</label>
                        <select
                            className="sub-linie inter-normal-black-20px"
                            onChange={(e) => this.handleChange(e, 'storage')}
                            value={selectedComponents.storage}
                        >
                            <option value="">Select Storage</option>
                            {storageOptions}
                        </select>
                    </div>
                    <div className="linie">
                        <label className="inter-normal-black-20px">PSU:</label>
                        <select
                            className="sub-linie inter-normal-black-20px"
                            onChange={(e) => this.handleChange(e, 'psu')}
                            value={selectedComponents.psu}
                        >
                            <option value="">Select PSU</option>
                            {psuOptions}
                        </select>
                    </div>
                    <div className="linie">
                        <label className="inter-normal-black-20px">Case:</label>
                        <select
                            className="sub-linie inter-normal-black-20px"
                            onChange={(e) => this.handleChange(e, 'case')}
                            value={selectedComponents.case}
                        >
                            <option value="">Select Case</option>
                            {caseOptions}
                        </select>
                    </div>
                </div>

                <div className="configuratia-ta">
                    <h1 className="your-pc inter-normal-black-36px">Your PC:</h1>
                    <h2 className="inter-normal-black-20px">CPU: {selectedComponents.cpu}</h2>
                    <h2 className="inter-normal-black-20px">GPU: {selectedComponents.gpu}</h2>
                    <h2 className="inter-normal-black-20px">Motherboard: {selectedComponents.motherboard}</h2>
                    <h2 className="inter-normal-black-20px">Memory: {selectedComponents.memory}</h2>
                    <h2 className="inter-normal-black-20px">Storage: {selectedComponents.storage}</h2>
                    <h2 className="inter-normal-black-20px">PSU: {selectedComponents.psu}</h2>
                    <h2 className="inter-normal-black-20px">Case: {selectedComponents.case}</h2>
                </div>
            </div>
        );
    }
}

export default FilterComponent;
