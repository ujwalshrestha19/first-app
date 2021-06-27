import React from 'react';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  state = {
    contact: [
      { id: 1, name: 'Ram', phone: 1223, email: 'ram@gmail.com' },
      { id: 2, name: 'Hari', phone: 1223, email: 'ram1@gmail.com' },
      { id: 3, name: 'Shyam', phone: 1223, email: 'ram2@gmail.com' }
    ],
    showHide: false //collapsable bar
  }

  handleDelete = (id) => {
    //id passed when delete button pressed
    let deletedData = this.state.contact.filter(function (contact) {
      return contact.id !== id
      //return all item except the selected id
    });
    //SweetAlert for delete
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.setState({ contact: deletedData });
        toast.success("Succesfully Deleted");
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  handleClick = () => {
    this.setState({ showHide: !this.state.showHide })

  };

  handleSubmittedData = (formData) => {
    let id = this.state.contact.length + 1;
    let insertData = { id: uuidv4(), ...formData }; //generate unique ID
    console.log(insertData);
    this.setState({
      contact: [insertData, ...this.state.contact] //add new object to array
    })
    toast.success('Data Submitted');
  }

  render() {


    return (
      <div>

        <Navbar title="Contact Management System" />

        <Form
          formData={this.handleSubmittedData}
        />

        {this.state.contact.map((contactProps) =>

          <Contact
            contactPass={contactProps}
            delete={this.handleDelete}
            key={contactProps.id} />
        )}

        <ToastContainer />
      </div>

    );
  }
}

export default App;
