import React, { Component } from 'react';
import './UsersList.css';
class UsersList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">{
                        this.props.list.items.map((item, index) => <div key={index} className="col-md-6 col-xs-12 col-sm-6 col-lg-6">
                            <div className="data">
                                <span className="cont">
                                    <div className="image">
                                        <img src={item.avatar_url} className="img-circle" alt="Cinque Terre" width="130" height="130"></img>
                                        <p>Name : {item.login}
                                            <br></br> Score : {item.score}
                                        </p>
                                    </div>
                                </span>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
export default UsersList;