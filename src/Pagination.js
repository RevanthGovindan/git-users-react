import React, { Component } from 'react';
import './Pagination.css';
class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = { pageArr: [], currentpage: 1, activepage: 1 };
        this.update = this.update.bind(this);
    }
    update(page) {
        this.setState({ activepage: page });
        this.props.action(page);
    }

    prevPage(start) {
        if (start > 5) {
            this.setState({ currentpage: this.state.currentpage - 5 });
            this.range(start - 5);
        }
    }
    nextPage(start) {
        if (start + 5 <= this.props.totalPages) {
            this.setState({ currentpage: this.state.currentpage + 5 });
            this.range(start + 5);
        }
    }
    range(start) {
        var i;
        const pages = [];
        for (i = start; i < start + 5 && i <= this.props.totalPages; i++) {
            pages.push(i);
        }
        this.setState({ pageArr: pages,activepage: start });
        this.props.action(start)
    }
    componentWillMount() {
        this.range(this.state.currentpage);
    }
    render() {
        return (
            <div>
                <ul>
                    <li onClick={this.prevPage.bind(this, this.state.currentpage)}>
                        Previous
                    </li>
                    {
                        this.state.pageArr.map((pages, ind) => <li onClick={this.update.bind(this, pages)} key={ind} className={pages === this.state.activepage ? 'active' : ''}>
                            {pages}
                        </li>)
                    }
                    <li onClick={this.nextPage.bind(this, this.state.currentpage)}>
                        Next
                    </li>
                </ul>
            </div>
        );
    }
}
export default Pagination;