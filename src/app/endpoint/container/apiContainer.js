import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { linkToFileCsv } from "../actions/action.default";

const ApiComponent = (props) => {
    const [value, setvalue] = useState("");

    const inputValue = (event) => {
        setvalue(event.target.value);
    } 

    return (
        <div>

            <form className="find_dowmain_form"
                method="post"
                onSubmit={
                    (e) => {
                        e.preventDefault()
                        props.linkToFileCsv(value)
                    }}>
                <input type="text" 
                    className = "slider-input form-control" 
                    placeholder="digite sua url"
                    onChange={(event) => inputValue(event)}
                    value={value} />
                <button type="submit" className="slider-button">Próximo</button>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => bindActionCreators({ linkToFileCsv }, dispatch)
export default connect(null, mapDispatchToProps)(ApiComponent);