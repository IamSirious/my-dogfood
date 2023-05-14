import { useState } from "react";


const Modal = ({active, setActive, setUser}) => {
	const [auth, setAuth] = useState(true);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pwd, setPwd] = useState("");
	const [testPwd, setTestPwd] = useState("");

	const testAccess = {
		color: pwd === testPwd ? "forestgreen" : "crimson"
	}

	const switchAuth = (e) => {
		e.preventDefault();
		setAuth(!auth);
		clearForm();
	}
	
	const clearForm = () => {
		setName("");
		setEmail("");
		setPwd("");
		setTestPwd("");
	}

	const sendForm = async (e) => {
		e.preventDefault();
		let body = {
			email: email,
			password: pwd
		}
		if (!auth) {
			body.name = name;
			body.group = "group-12";
		}
		let log = "https://api.react-learning.ru/signin"; // вход
		let reg = "https://api.react-learning.ru/signup"; // регистрация

		// Регистрация !== вход (после добавления пользователя в БД, нужно будет повторно войти в аккаунт)
		let res = await fetch(auth ? log : reg, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		})
		let data = await res.json()
		if (!data.err) {
			// При регистрации с сервера приходит объект о пользователе {name, email, _id, group}
			/* при входе с сервера приходит два параметра: 
				1) токен (без него мы не сможем работать с сервером дальше)
				2) тоже что и при регистрации
				{data: {...}, token: ""}
			*/
			if (!auth) {
				delete body.name;
				delete body.group
				let resLog = await fetch(log, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(body)
				})
				let dataLog = await resLog.json()
				if (!dataLog.err) {
					localStorage.setItem("rockUser", dataLog.data.name);
					localStorage.setItem("rockToken", dataLog.token);
					localStorage.setItem("rockId", dataLog.data._id);
					clearForm();
					setActive(false);
					setUser(dataLog.data.name);
				}
			} else {
				if (!data.err) {
					console.log(data);
					localStorage.setItem("rockUser", data.data.name);
					localStorage.setItem("rockToken", data.token);
					localStorage.setItem("rockId", data.data._id);
					clearForm();
					setActive(false);
					setUser(data.data.name);
				}
			}

		}
		
	}
	return <div 
		className="modal"
		style={{display: active ? "flex" : "none"}}
	>
		<div className="modal-dialog modal-dialog-centered" role="document">
			<div className="modal-content rounded-4 shadow">
				<div className="modal-header p-4 pb-4 border-bottom-0">
					<h3 className="fw-bold mb-0 fs-4">Авторизация</h3>
					<button onClick={() => setActive(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>

				<div className="modal-body p-4 pt-0">
					<form onSubmit={sendForm} className="mb-3">
						{!auth && <div className="form-floating mb-3">
							<input
								type="email" 
								className="form-control rounded-4" 
								id="floatingInput" 
								placeholder="Name"
								value={name} 
								onChange={(e) => setName(e.target.value)}
							/>
							<label for="floatingInput">Email</label>
						</div>}
						<div className="form-floating mb-3">
							<input
								type="email" 
								className="form-control rounded-4" 
								id="floatingInput" 
								placeholder="name@example.com"
								value={email} 
								onChange={(e) => setEmail(e.target.value)}
							/>
							<label for="floatingInput">Email</label>
						</div>
						<div className="form-floating mb-3">
							<input 
								type="password" 
								className="form-control rounded-4" 
								id="floatingPassword" 
								placeholder="Password"
								value={pwd} 
								onChange={(e) => setPwd(e.target.value)}
							/>
							<label for="floatingPassword">Password</label>
						</div>
						{!auth && <div className="form-floating mb-3">
							<input 
								type="password" 
								className="form-control rounded-4" 
								id="floatingPassword" 
								placeholder="Повторить Password"
								value={testPwd} 
								onChange={(e) => setTestPwd(e.target.value)}
							/>
							<label for="floatingPassword">Password</label>
						</div>}

					</form>
					<form onSubmit={sendForm} className="">
						<button className="w-100 mb-2 btn btn-lg rounded-5 btn-warning" type="submit" disabled={!auth && (!pwd || pwd !== testPwd)}>{auth ? "Войти" : "Создать аккаунт" }</button>
						<button className="w-100 mb-2 btn btn-lg rounded-5 btn-warning" type="submit" onClick={switchAuth}>{auth ? "Регистрация" : "Войти"}</button>
					</form>
				</div>
			</div>
		</div>
	</div>
}

export default Modal;
