import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap"
import { PencilSquare, XSquare, CheckSquare } from "react-bootstrap-icons";

const Input = ({val, isActive, upd, changeActive, name}) => {
    const [inp, setInput] = useState(val);
    return <>
        {!isActive
            ? <>{name !== "avatar" && val}
				<Link className="fs-4 text-warning text-decoration-none" onClick={() => changeActive(true)}>&nbsp;
					<PencilSquare/>
				</Link>
			</>
            : <>
                <Form.Control className="mb-0" value={inp} onChange={(e) => setInput(e.target.value)}/>
                <Link className="fs-4 text-danger text-decoration-none" onClick={() => changeActive(false)}><XSquare/></Link>&nbsp;
                <Link className="fs-4 text-success text-decoration-none" onClick={() => {
					changeActive(false)
					upd(name, inp)
                }}><CheckSquare/></Link>
            </>
        }
    </>
}

export default Input;