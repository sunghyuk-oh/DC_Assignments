import Menu from './Menu'

function Main(props) {
    return (
        <div>
            <Menu />
            {props.children}
        </div>
    )
}

export default Main