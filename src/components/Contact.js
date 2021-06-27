import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowing: false,
            isEditing: false,
            name: this.props.contactPass.name,
            phone: this.props.contactPass.phone,
            email: this.props.contactPass.email,
            error: {

            }
        };
    }

    handleShowHide = () => {
        //ALways use setstate =>this.state.isShowing = true;
        this.setState({ isShowing: !this.state.isShowing })
    }

    handleDelete = () => {
        this.props.delete(this.props.contactPass.id);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    }

    handleEdit = () => {
        this.setState({ isEditing: true });

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

        let editedData = {
            name, email, phone, id: this.props.contactPass.id //since id is not destructured
        };
        this.props.edit(editedData);

        this.setState({ error: {}, isEditing: false })


    }

    render() {
        const { error } = this.state;
        let cls = this.state.isShowing ?
            'fas fa-sort-down me-3' : 'fas fa-sort-up me-3';
        //change up or down icon
        if (this.state.isEditing) {
            return (
                <div className="card w-50 mx-auto">
                    <div className="card-header" style={{ backgroundColor: 'blue', color: '#fff' }}>
                        <h2>Contact Edit</h2>
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
                                    placeholder="Phone"
                                    onChange={this.handleChange}
                                    value={this.state.phone}
                                    name="phone"
                                    className="form-control" />
                            </div>
                            <span style={{ color: "red" }}>{error.phone}</span>
                            <button
                                type="submit"
                                className="btn btn-primary mt-3">
                                Edit
                            </button>

                        </form>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="card w-50 mt-5 mx-auto" >
                    <div className="card-header"
                        style={{
                            backgroundColor: "blue",
                            color: "#fff",
                            fontWeight: "bold"
                        }}>

                        <h1>
                            <i className={cls} onClick={this.handleShowHide}></i>
                            {this.props.contactPass.name}
                            <div className="float-end">
                                <i className="fas fa-trash-alt" onClick={this.handleDelete}></i>
                                <i className="fas fa-edit ms-3" onClick={this.handleEdit} ></i>
                            </div>
                        </h1>
                    </div>

                    {this.state.isShowing ? (<div className="card-body">
                        <ul className="lst-group">
                            <li className="list-group-item">
                                {this.props.contactPass.email}
                            </li>
                            <li className="list-group-item">
                                {this.props.contactPass.phone}
                            </li>
                        </ul>
                    </div>) : null}

                </div>

            )

        }
    }

}

export default Contact;
