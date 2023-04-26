import React, { useState, useMemo } from "react";
import components from './data.js';
import './assets/Filter.css';

function FilterComponent() {
    const [state, setState] = useState({
        selectedComponents: {
            memory: "",
            psu: "",
            motherboard: "",
            cpu: "",
            storage: "",
            gpu: "",
            case: "",
        },
    });


    const [selectedSocket, setSelectedSocket] = useState("");

    function handleChange(e, componentType) {
        const newValue = e.target.value;
        if (state.selectedComponents[componentType] !== newValue) {
            setState((prevState) => ({
                ...prevState,
                selectedComponents: {
                    ...prevState.selectedComponents,
                    [componentType]: newValue,
                },
            }));

            if (componentType === "cpu") {
                const selectedCPU = components.cpu.find((c) => c.name === newValue);
                setSelectedSocket(selectedCPU ? selectedCPU.socket : "");
            }
        }
    }


    const filteredMotherboards = useMemo(
        () => components.motherboard.filter((m) => m.socket === selectedSocket),
        [selectedSocket]
    );


    const gpuOptions = components.gpu.map((gpu) => (
        <option key={gpu.id} value={gpu.name}>
            {gpu.name}
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
                <div className="line">
                    <label className="inter-normal-black-20px">CPU:</label>
                    <select
                        className="sub-line inter-normal-black-20px"
                        value={state.selectedComponents.cpu}
                        onChange={(e) => handleChange(e, "cpu")}
                    >
                        <option value="">Select CPU</option>
                        {components.cpu.map((c) => (
                            <option key={c.id} value={c.name}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="line">
                    <label className="inter-normal-black-20px">GPU:</label>
                    <select
                        className="sub-line inter-normal-black-20px"
                        onChange={(e) => handleChange(e, 'gpu')}
                        value={state.selectedComponents.gpu}
                    >
                        <option value="">Select GPU</option>
                        {gpuOptions}
                    </select>
                </div>
                <div className="line">
                    <label className="inter-normal-black-20px">Motherboard:</label>
                    <select
                        className="sub-line inter-normal-black-20px"
                        value={state.selectedComponents.motherboard}
                        onChange={(e) => handleChange(e, 'motherboard')}
                    >
                        <option value="">Select a motherboard</option>
                        {filteredMotherboards.map((m) => (
                            <option key={m.id} value={m.name}>
                                {m.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="line">
                        <label className="inter-normal-black-20px">Memory:</label>
                        <select
                            className="sub-line inter-normal-black-20px"
                            onChange={(e) => handleChange(e, 'memory')}
                            value={state.selectedComponents.memory}
                        >
                            <option value="">Select Memory</option>
                            {memoryOptions}
                        </select>
                    </div>
                    <div className="line">
                        <label className="inter-normal-black-20px">Storage:</label>
                        <select
                            className="sub-line inter-normal-black-20px"
                            onChange={(e) => handleChange(e, 'storage')}
                            value={state.selectedComponents.storage}
                        >
                            <option value="">Select Storage</option>
                            {storageOptions}
                        </select>
                    </div>
                    <div className="line">
                        <label className="inter-normal-black-20px">PSU:</label>
                        <select
                            className="sub-line inter-normal-black-20px"
                            onChange={(e) => handleChange(e, 'psu')}
                            value={state.selectedComponents.psu}
                        >
                            <option value="">Select PSU</option>
                            {psuOptions}
                        </select>
                    </div>
                    <div className="line">
                        <label className="inter-normal-black-20px">Case:</label>
                        <select
                            className="sub-line inter-normal-black-20px"
                            onChange={(e) => handleChange(e, 'case')}
                            value={state.selectedComponents.case}
                        >
                            <option value="">Select Case</option>
                            {caseOptions}
                        </select>
                    </div>
                </div>

                <div className="your-build">
                    <h1 className="your-pc inter-normal-black-36px">Your PC:</h1>
                    <h2 className="inter-normal-black-20px">CPU: {state.selectedComponents.cpu}</h2>
                    <h2 className="inter-normal-black-20px">GPU: {state.selectedComponents.gpu}</h2>
                    <h2 className="inter-normal-black-20px">Motherboard: {state.selectedComponents.motherboard}</h2>
                    <h2 className="inter-normal-black-20px">Memory: {state.selectedComponents.memory}</h2>
                    <h2 className="inter-normal-black-20px">Storage: {state.selectedComponents.storage}</h2>
                    <h2 className="inter-normal-black-20px">PSU: {state.selectedComponents.psu}</h2>
                    <h2 className="inter-normal-black-20px">Case: {state.selectedComponents.case}</h2>
                </div>
            </div>
    );
}


export default FilterComponent;
