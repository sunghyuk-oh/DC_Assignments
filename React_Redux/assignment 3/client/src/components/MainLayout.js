import { Component } from 'react'
import Menu from './Menu'

class MainLayout extends Component {
    render() {
        return (
            <div>
                <Menu />
                {this.props.children}
            </div>
        )
    }
}

export default MainLayout