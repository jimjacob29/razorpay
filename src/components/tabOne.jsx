const TabOne = ({handleTabInsideButtonClick}) => {
	return (
		<>
			One
			<button
				onClick={() => {
					handleTabInsideButtonClick('two');
				}}>
				Go To Tab 2
			</button>
		</>
	);
};

export default TabOne;
