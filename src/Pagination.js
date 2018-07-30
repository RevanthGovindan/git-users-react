import React,{Component} from 'react';
class Pagination extends Component{
    constructor(props){
        super(props);
        this.state={data:this.props.data}
        this.update=this.update.bind(this)
    }
    update(){
        this.props.action(5);
    }
    render(){
        return(
            <div>
                <button onClick={this.update}>click</button>
            </div>
        );
    }
}
export default Pagination;