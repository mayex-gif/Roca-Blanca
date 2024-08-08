import { useState } from "react"

const Formulario = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')


    const mostrarDatos = (e) => {
        e.preventDefault();
        console.log(`El email es: ${email} y la contraseña es: ${password}`)
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <div className="text-bg-dark" data-bs-theme="dark">
                <div className="py-5">
                    <h1 className="text-center">
                        <strong>Formulario de Login</strong>
                    </h1>
                </div>
                <div className="container">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label ">Email address</label>
                            <input 
                                type="email"
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <div className="form-text">We'll never share your email with anyone else.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                aria-describedby="passwordlHelp"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <div className="form-text">Your password must be 8-20 characters long, contain at
                                least two uppercase letters, two lowercase letters, two numbers, and two special characters.
                            </div>
                        </div>
                        <div className="text-center pb-5">
                            <button onClick={mostrarDatos} type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Formulario;