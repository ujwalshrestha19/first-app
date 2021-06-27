import React from 'react';

class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            isShowing: false

        };
    }

    handleShowHide = () => {
        //ALways use setstate =>this.state.isShowing = true;
        this.setState({ isShowing: !this.state.isShowing })
    }

    handleDelete = () => {
        this.props.delete(this.props.contactPass.id);
    }

    handleChange = () => {

    }
    render() {
        let cls = this.state.isShowing ?
            'fas fa-sort-down me-3' : 'fas fa-sort-up me-3' //change up or down icon
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
                            <i className="fas fa-edit ms-3" ></i>
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

export default Contact;
