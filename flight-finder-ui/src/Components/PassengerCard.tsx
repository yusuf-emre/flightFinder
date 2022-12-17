import Swal from "sweetalert2";


interface passengerProps {
	idx: number;
	passenger: Passenger;
	passengerList: Passenger[];
	setPassengerList: (passengerList: Passenger[]) => void;
  setShowConfirmBook: (showConfirmBook: boolean) => void;
}

const PassengerCard = ({
	idx,
	passenger,
	passengerList,
	setPassengerList,
	setShowConfirmBook
}: passengerProps) => {


	const handleInput = (event: any) => {
		let passengerListRef = [...passengerList];
		const { name, value } = event.target;
		passengerListRef[idx] = ({ ...passenger, [name]: value, });
		setPassengerList(passengerListRef);
	}

	const handleClick = () => {
		console.log(passenger);
		console.log(passengerList);
		if (Object.values(passenger).some(v => v === "" || v === 0)) {
			Swal.fire({
				icon: "warning",
				title:
					`Please fill in all fields!`,
				showConfirmButton: true,
			})
		}
		else {
			Swal.fire({
				icon: "success",
				title:
					`You have succesfully added ${passenger.firstName} ${passenger.lastName}`,
				showConfirmButton: true,
			})
			
			if (passengerList.every(p => Object.values(p).every(v => v !== "" && v !== 0))) {
				setShowConfirmBook(true);
				setTimeout(() => {
					window.location.href = "#confirmBook";
				}, 100); 
			}
		}
	}

	return (
		<>
			<div className="Passenger" id="passenger">
				<div className="container rounded shadow-lg">
					<div className="row">
						<div className="col-md-2 mb-4">
							<div className="form-control d-flex flex-column">
								<p className="h-dark">First Name</p>
								<input className="inputbox" type="text" name='firstName' value={passenger.firstName} onChange={handleInput} />
							</div>
						</div>
						<div className="col-md-2 mb-4">
							<div className="form-control d-flex flex-column">
								<p className="h-dark">Last Name</p>
								<input className="inputbox" type="text" name='lastName' value={passenger.lastName} onChange={handleInput} />
							</div>
						</div>
						<div className="col-md-2 mb-4">
							<div className="form-control d-flex flex-column">
								<p className="h-dark">Email</p>
								<input className="inputbox" type="email" name='email' value={passenger.email} onChange={handleInput} />
							</div>
						</div>
						<div className="col-md-2 mb-4">
							<div className="form-control d-flex flex-column">
								<p className="h-dark">Mobile</p>
								<input className="inputbox" type="number" name='mobile' value={passenger.mobile} onChange={handleInput} />
							</div>
						</div>
						<div className="col-md-2 mb-4">
							<div className="form-control d-flex flex-column">
								<p className="h-dark">Gender</p>
								<select className="col-md-12 border-0 outline-none" name="gender" onChange={handleInput}>
									<option value="" hidden selected></option>
									<option value="Male">Male</option>
									<option value="Female">Female</option>
								</select>
							</div>
						</div>
						<div className="col-md-2 mb-4">
							<div className="form-control d-flex flex-column">
								<p className="h-dark">Guest</p>
								<select className="col-md-12 border-0 outline-none" name="guest" onChange={handleInput}>
									<option value="" hidden selected></option>
									<option value="Adult">Adult</option>
									<option value="Child">Child</option>
								</select>
							</div>
						</div>
						<div
							className="col-md-11 mb-2 ms-5 btn btn-submit text-center"
							onClick={handleClick}
						>
							Add Passenger
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PassengerCard
