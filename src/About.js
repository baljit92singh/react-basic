import React from 'react';
class About extends React.Component {
    constructor() {
        super()
        console.log("Hello");
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    render() {
        return (<div>
            <h1>About Us Component</h1>
        </div>)
    }
}
export default About;