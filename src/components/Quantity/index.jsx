import React, { Component } from "react";
import "./index.css";

class Quantity extends Component {
	state = {
		value: 0,
	};

	decrease = () => {
		this.setState({ value: this.state.value - 1 });
	};

	increase = () => {
		this.setState({ value: this.state.value + 1 });
	};

	render() {
		return (
			<div className="def-number-input number-input">
				<button onClick={this.decrease} className="minus"></button>
				<input
					className="quantity"
					name="quantity"
					value={this.state.value}
					onChange={() => console.log("change")}
					type="number"
				/>
				<button onClick={this.increase} className="plus"></button>
			</div>
		);
	}
}

export default Quantity;




<div class="container">
	<div class="row">
		<h2>Simple Quantity increment buttons with Javascript </h2>
												<div class="col-lg-2">
																				<div class="input-group">
																		<span class="input-group-btn">
																				<button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus" data-field="">
																					<span class="glyphicon glyphicon-minus"></span>
																				</button>
																		</span>
																		<input type="text" id="quantity" name="quantity" class="form-control input-number" value="10" min="1" max="100">
																		<span class="input-group-btn">
																				<button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
																						<span class="glyphicon glyphicon-plus"></span>
																				</button>
																		</span>
																</div>
												</div>
	</div>
</div>


											<div class="def-number-input number-input safari_only">
												<button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
													class="minus"></button>
												<input class="quantity fw-bold text-black" min="0" name="quantity" value="1"
													type="number">
												<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
													class="plus"></button>
											</div>