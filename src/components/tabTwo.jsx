const TabTwo = ({handleTabInsideButtonClick}) => {
	return (
		<>
			Two
			<button
				onClick={() => {
					handleTabInsideButtonClick('one');
				}}>
				Go to 1
			</button>
		</>
	);
};

export default TabTwo;
