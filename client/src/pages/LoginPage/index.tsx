import { Link } from "react-router-dom"

const LoginPage = () => {

    return (
        <>
        <h1>Login Page</h1>
        <Link to={"/register"}>Registre-se</Link>
        <Link to={"/dashboard/:id"}>Logar</Link>
        </>        
    )
}

export default LoginPage