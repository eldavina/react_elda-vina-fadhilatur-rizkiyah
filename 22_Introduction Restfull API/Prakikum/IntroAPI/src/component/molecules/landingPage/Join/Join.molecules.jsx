import React from "react";
import "../Join/Join.style.css";

const Join = () => {
	return (
		<div>
			<div className="container-join">
				<h3 className="join-our">Join Our Newsletter</h3>
				<br />
				<p className="tamem">
					Tamen quem nulla quae legam multos aute sint culpa legam noster magna
				</p>
				<br />
				<div className="formwrap">
					<form>
						<input type="text" id="input" name="#" required="" />
						<button type="submit" id="subscribe">
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Join;
