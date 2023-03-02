import ReactDOM from 'react-dom';

const Portal = (props: any) => {
    const node = document.createElement('div');
    document.body.appendChild(node);

    return ReactDOM.createPortal(props.children, node)
}

export default Portal