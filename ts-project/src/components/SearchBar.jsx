import { Component } from 'react'
import {Form,FormControl, Button} from "react-bootstrap"

 class SearchBar extends Component {
    render() {
        return (
            <Form className="d-flex justify-content-center mt-5" inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        )
    }
}


export default SearchBar
