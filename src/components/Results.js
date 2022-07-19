import React from 'react';
import axios from "axios";
import PhonebootData from "./PhonebookData";

export default class Results extends React.Component {

    state = {
        phonebooks: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/phonebook/list')
            .then(res => {
                const phonebooks = res.data;
                this.setState({phonebooks})
            })
    }

    render() {
        return (
            this.state.phonebooks.map(phonebook => <PhonebootData key={phonebook.id} name={phonebook.fullname}
                                                                  phone={phonebook.phonenumber} id={phonebook.id}/>)
        )
    }
}
