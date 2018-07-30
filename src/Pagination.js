import React, { Component } from 'react';
class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = { pageArr: [], currentpage: 0 };
        this.update = this.update.bind(this);
    }
    update() {
        this.props.action(5);
    }
    range() {
        var i;
        var start = this.state.currentpage;
        for (i = start; i < start + 10; i++) {
            this.state.pageArr.push(i);
        }
    }
    prevPage() {

    }
    nextPage() {

    }
    render() {
        return (
            <div>
                {/* <button onClick={this.update}>click</button> */}
                <ul>
                    <li onClick="prevPage()">
                        <a href="">Previous</a>
                    </li>
                    {
                        this.state.pageArr.map((pages,ind)=><li onClick={this.update(pages)} key={ind}>
                            {pages}
                        </li>)
                    }
                    <li onClick="nextPage()">
                        <a href="">Next</a>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Pagination;