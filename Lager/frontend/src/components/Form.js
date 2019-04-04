import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
    static propTypes = {
        endpoint: PropTypes.string.isRequired
    };

    state = {
        who: "",
        when: "",
        what: "",
        how: "",
    };

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        const {who, when, what, how} = this.state;
        const project = { who, when, what, how};
        const conf = {
                  method: "post",
      body: JSON.stringify(project),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf).then(response => console.log(response));
  };


        render()
        {
            const {who, when, what, how} = this.state;
            return (
                <div className="column">
                    <form onSubmit={this.handleSubmit}>

                        <div className="field">
                            <label className="label">Who</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    name="name"
                                    onChange={this.handleChange}
                                    value={name}
                                    required
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">What</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    name="What"
                                    onChange={this.handleChange}
                                    value={name}
                                    required
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">When</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    name="time"
                                    onChange={this.handleChange}
                                    value={name}
                                    required
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">How</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    name="How"
                                    onChange={this.handleChange}
                                    value={name}
                                    required
                                />
                            </div>
                        </div>
                        <div className="control">
                            <button type="submit" className="button is-info">
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            );
        }




}

export default Form;