import React from "react";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            phone: '',
            email: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.name);
    }

    handleSubmit = (e) => {

        e.preventDefault();
        this.props.formData();
    }
    render() {
        return (

            <div className="card w-50 mx-auto">
                <div className="card-header" style={{ backgroundColor: 'blue', color: '#fff' }}>
                    <h2>Contact Form</h2>
                </div>
                <div className="card-body">
                    <form action="" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="form-control"
                                value={this.state.name}
                                name="name"
                                onChange={this.handleChange}
                            />
                        </div>
                    </form>
                </div>
                <div className="card-body">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                placeholder="Email"
                                onChange={this.handleChange}
                                value={this.state.email}
                                name="email"
                                className="form-control"
                            />
                        </div>
                    </form>
                </div>
                <div className="card-body">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="phone">phone</label>
                            <input
                                type="number"
                                placeholder="phone"
                                className="form-control"
                                onChange={this.handleChange}
                                name="phone"
                                value={this.state.phone} />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary mt-3">
                            Submit
                        </button>
                    </form>
                </div>

            </div>


        )
    }
}

export default Form;

