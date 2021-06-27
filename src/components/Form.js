import React from "react";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            phone: '',
            email: '',
            error: {

            }
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, email } = this.state
        if (name === "") {
            return this.setState({ error: { name: "Please enter your name" } })
        } else if (email === "") {
            return this.setState({ error: { email: "Please enter your Email Address" } })
        } else if (phone === "") {
            return this.setState({ error: { phone: "Please enter your phone number" } })
        }
        this.props.formData(this.state);
        this.setState({ error: {}, name: "", email: "", phone: "" })


    }
    render() {
        const { error } = this.state;
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
                                onChange={this.handleChange}
                                value={this.state.name}
                                name="name"
                                className="form-control"
                            />
                            <span style={{ color: "red" }}>{error.name}</span>
                        </div>
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
                            <span style={{ color: "red" }}>{error.email}</span>
                        </div>


                        <div className="form-group">
                            <label htmlFor="phone">phone</label>
                            <input
                                type="number"
                                placeholder="phone"
                                onChange={this.handleChange}
                                value={this.state.phone}
                                name="phone"
                                className="form-control" />
                        </div>
                        <span style={{ color: "red" }}>{error.phone}</span>
                        <button
                            type="submit"
                            className="btn btn-primary mt-3">
                            Submit
                        </button>

                    </form>
                </div>

                {/* <div className="card-body">
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
                </div> */}

                {/* <div className="card-body">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="phone">phone</label>
                            <input
                                type="number"
                                placeholder="phone"
                                onChange={this.handleChange}
                                value={this.state.phone}
                                name="phone"
                                className="form-control" />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary mt-3">
                            Submit
                        </button>
                    </form>
                </div> */}


            </div>


        )
    }
}

export default Form;

