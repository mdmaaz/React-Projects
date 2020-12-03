import React from 'react';
import axios from 'axios';


class Resturant extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            categories : [],
            items: [],
            category: ""
        }
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
    axios
        .get("http://stream-restaurant-menu-svc.herokuapp.com/category")
        .then(data => this.setState({ categories: data.data }))
        .catch(err => {
            console.log(err);
            return null;
        });
    };

    details = (category) => {
        axios
        .get(`http://stream-restaurant-menu-svc.herokuapp.com/item?category=${category}`)
        .then(data => this.setState({ items: data.data, category: category}))
        .catch(err => {
            console.log(err);
            return null;
        });
    }

    

    render() {
        return (
            <div className="app">
                <div className="menu">
                    <p>Menu Categories</p>
                    <ul>
                        {
                            this.state.categories.map(category => {
                                return(
                                    <div key={category.id}>
                                        <li 
                                        onMouseOver={(e) => e.target.style.border = '1px solid black'} 
                                        onMouseLeave={(e) => e.target.style.border = ""} 
                                        onClick={() => this.details(category.short_name)}>
                                            {category.name} ({category.short_name})
                                        </li>
                                    </div>
                                );
                            })
                        }
                    </ul>
                </div>
                
                {
                    this.state.items.length > 0 ? (
                        <div className="description">
                            <p>Items in Category ({this.state.category})</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.items.map(item => {
                                            return (
                                                    <tr key={item.id}>
                                                        <td>{item.name}</td>
                                                        <td>{item.description}</td>
                                                    </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    ) : null
                }
            </div>
        )
    }
}

export default Resturant;