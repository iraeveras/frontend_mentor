// import './index.css';
const Wrapper = ({children, classNameValue}) => {
    return (
        <div className={classNameValue}>
            {children}
        </div>
    )
}

export default Wrapper;