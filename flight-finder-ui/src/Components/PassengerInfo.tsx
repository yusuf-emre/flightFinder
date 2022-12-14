import React, { useState } from "react";

interface passengerProps {
	outboundTrip: Trip;
	returnTrip: Trip;
	isOneWayTrip: boolean;
}


const PassengerInfo = ({ outboundTrip, returnTrip, isOneWayTrip }: passengerProps) => {

	const [data, setData] = useState({
		fullname: "",
		phone: "",
		email: "",
		subject: "",
		message: "",
	})
	const InputEvent = (event: any) => {
		console.log(outboundTrip);
		console.log(returnTrip);
		const { name, value } = event.target;

		setData((preVal) => {
			return {
				...preVal,
				[name]: value,
			}
		})
	}

	return (
		<div>
			{((isOneWayTrip && outboundTrip.isBooked) || (!isOneWayTrip && outboundTrip.isBooked && returnTrip.isBooked)) &&
				<div id="passengerInfo">
					<div className="container">
						<div className="right box box_shadow">
							<form
								// onSubmit={formSubmit}
								form-name='contact'
								method='post'
								data-netlify='true'>
								<input type="hidden" name="form-name" value="contact" />
								<div className="f_flex">
									<div className="input row">
										<span>YOUR NAME</span>
										<input type="text" name='fullname' value={data.fullname} onChange={InputEvent} />
									</div>
									<div className="input row">
										<span>PHONE NUMBER</span>
										<input type="number" name='phone' value={data.phone} onChange={InputEvent} />
									</div>
								</div>
								<div className="input">
									<span>EMAIL</span>
									<input type="email" name='email' value={data.email} onChange={InputEvent} />
								</div>
								<div className="input">
									<span>SUBJECT</span>
									<input type="text" name='subject' value={data.subject} onChange={InputEvent} />
								</div>
								<div className="input">
									<span>YOUR MESSAGE</span>
									<textarea cols={30} rows={3} name='message' value={data.message} onChange={InputEvent}></textarea>
								</div>
								<button className="btn_shadow" type='submit'>
									SEND MESSAGE
								</button>
							</form>
						</div>
					</div>
				</div>
			}
		</div>
	)
};

export default PassengerInfo;
