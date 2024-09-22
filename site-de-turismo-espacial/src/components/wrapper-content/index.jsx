// import './index.css';
const Wrappercontent = ({children, classNameValue}) => {
    return (
        <div className={classNameValue}>
            {children}
        </div>
    )
}

export default Wrappercontent;