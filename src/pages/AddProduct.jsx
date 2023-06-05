import { useState, useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Container, Card, CardGroup, Form, Button } from "react-bootstrap";

import Ctx from "../context";

const Add = () => {
	const navigate = useNavigate();
	const {api, setServerGoods} = useContext(Ctx);
	const [description, setDescription] = useState("Описание товара");
	const [discount, setDiscount] = useState(0);
	const [name, setName] = useState("");
	const [pictures, setPictures] = useState('https://static.wikia.nocookie.net/manhuntgame/images/c/ce/Bitch%27n%27DogFood-Logo.png');
	const [price, setPrice] = useState(100);
	const [stock, setStock] = useState(200);
	const [tag, setTag] = useState("");
	const [tags, setTags] = useState(["df"]);
	const [wight, setWight] = useState("100 г");

	const updTag = (val) => {
		// Привести к общему регистру
		const text = val.toLocaleLowerCase();
		// получить строку без последнего символа (вдруг там пробел или запятая)
		let cut = text.slice(0, text.length - 1);
		// Проверить строку на последний символ
		if (/[\s.,;!?]$/.test(text)) {
			// Если пробел или знак препинания - обрубить этот символ и записать в массив с тегами
			// Надо проверять насколько такого тега еще не существует
			setTags(prev => prev.includes(cut) ? prev : [...prev, cut]);
			// очистить инпут
			setTag("");
		} else {
			// идем дальше
			setTag(text);
		}
	}

	const delTag = (tag) => {
		setTags(prev => prev.filter(tg => tg !== tag))
	}

	const clearForm = () => {
		setName("");
		setPrice(100);
		setPictures('https://static.wikia.nocookie.net/manhuntgame/images/c/ce/Bitch%27n%27DogFood-Logo.png');
		setDiscount(0);
		setDescription("Описание товара");
		setWight("100 г");
		setStock(200);
		setTags(["df"]);
	}

	const formHandler = (e) => {
		e.preventDefault();
		const body = {
			name,
			price,
			pictures,
			discount,
			wight,
			stock,
			description,
			tags: tag.length && !tags.includes(tag) ? [...tags, tag] : tags
		}
        api.addProduct(body)
            .then(data => {
                console.log(data)
                if (!data.err && !data.error) {
                    setServerGoods(prev => [data, ...prev]);
                    clearForm();
                    navigate(`/product/${data._id}`)
                }
            })
    }

	return <Container className="py-5">
		<Card className="text-center">
			<Card.Header as="h4" className="bg-warning">Добавить товар</Card.Header>
			<Form onSubmit={formHandler}>
				<Card.Body>
					<CardGroup>
						<Card border="0">
							<div className="vh-100 border rounded mb-3" style={{
								backgroundImage: `url(${pictures})`,
								backgroundSize: "contain",
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat"
							}}></div>
							<Card.Body>

							</Card.Body>
						</Card>
						<Card border="0">
							<Card.Body>
								<Form.Group className="mb-3">
									<Form.Label htmlFor="name" as="h6">Название товара</Form.Label>
									<Form.Control
										type="text"
										id="name"
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label htmlFor="price" as="h6">Цена</Form.Label>
									<Form.Control
										type="number"
										id="price"
										value={price}
										min={1}
										max={9999}
										onChange={(e) => setPrice(e.target.value)}
									/>
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label htmlFor="discount" as="h6">Скидка</Form.Label>
									{/*<Form.Range*/}
									{/*	id="discount"*/}
									{/*	value={[0, 5, 10, 15, 20, 25, 40, 60]}*/}
									{/*	defaultValue={discount}*/}
									{/*	onChange={(e) => setDiscount(e.target.value)}*/}
									{/*/>*/}
									<Form.Select
										id="discount"
										defaultValue={discount}
										onChange={(e) => setDiscount(e.target.value)}
									>
										<option value={0}>Без скидки</option>
										<option value={5}>5 %</option>
										<option value={10}>10 %</option>
										<option value={15}>15 %</option>
										<option value={20}>20 %</option>
										<option value={25}>25 %</option>
										<option value={30}>30 %</option>
										<option value={35}>35 %</option>
										<option value={40}>40 %</option>
										<option value={45}>45 %</option>
										<option value={50}>50 %</option>
									</Form.Select>
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label htmlFor="wight" as="h6">Вес</Form.Label>
									<Form.Control
										type="text"
										id="wight"
										value={wight}
										onChange={(e) => setWight(e.target.value)}
									/>
									<Form.Text>Вес прописывается с единицами измерения!</Form.Text>
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label htmlFor="stock" as="h6">Количество на складе</Form.Label>
									<Form.Control
										type="number"
										id="stock"
										step={10}
										min={10}
										max={1000}
										value={stock}
										onChange={(e) => setStock(e.target.value)}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label htmlFor="pictures" as="h6">Изображение товара</Form.Label>
									<Form.Control
										type="url"
										id="pictures"
										value={pictures}
										onChange={(e) => setPictures(e.target.value)}
									/>
								</Form.Group>
								<Form.Group className="my-3">
									<Form.Label htmlFor="tags" as="h6">Теги</Form.Label>
									<Form.Control
										type="text"
										id="tags"
										value={tag}
										onChange={(e) => updTag(e.target.value)}
									/>
									{tags.length > 0 && <Form.Text>
										{tags.map(t => <span
											className={`d-inline-block lh-1 ${t !== "df" ? "bg-info" : "bg-secondary"} text-light p-2 mt-2 me-2 rounded-1 `}
											key={t}
											onClick={() => delTag(t)}
											style={{
												pointerEvents: t === "df" ? "none" : "auto"
											}}
										>{t}</span>)}
									</Form.Text>}
								</Form.Group>
							</Card.Body>
						</Card>
					</CardGroup>
				</Card.Body>
				<Card.Footer>
					<Form.Group className="my-3">
						<Form.Label htmlFor="description" as="h6">Описание</Form.Label>
						<Form.Control
							as="textarea"
							id="description"
							value={description}
							rows={3}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</Form.Group>
					<Button size="lg" variant="warning rounded-pill mb-2" type="submit">Добавить товар</Button>
				</Card.Footer>
			</Form>
		</Card>
	</Container>
}

export default Add;