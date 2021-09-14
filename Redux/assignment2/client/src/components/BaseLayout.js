import Menu from './Menu'

function BaseLayout(props) {
    return (
        <div id="whole-body">
            <Menu />
            {props.children}
        </div>
    )
}

export default BaseLayout