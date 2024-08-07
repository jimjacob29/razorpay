import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import TabOne from './components/tabOne';
import TabTwo from './components/tabTwo';
import TabThree from './components/tabThree';
import TabNavComponent from './components/tabNavComponent';
import TabFour from './components/tabFour';

const NAVBAR_DATA = [
	{
		id: 1,
		value: 'one',
		name: 'One',
	},
	{
		id: 2,
		value: 'two',
		name: 'Two',
	},
	{
		id: 3,
		value: 'three',
		name: 'Three',
		isDisabled: false,
	},
	{
		id: 4,
		value: 'four',
		name: 'Three',
		isDisabled: false,
	},
];

function App() {
	const [defaultTabValue, setDefaultTabValue] = useState(
		NAVBAR_DATA?.[0]?.value,
	);

	const handleTabInsideButtonClick = value => {
		setDefaultTabValue(value);
	};

	const getTabComponent = currentTabValue => {
		switch (currentTabValue) {
			case 'one':
				return (
					<TabOne handleTabInsideButtonClick={handleTabInsideButtonClick} />
				);
			case 'two':
				return (
					<TabTwo handleTabInsideButtonClick={handleTabInsideButtonClick} />
				);
			case 'three':
				return <TabThree />;
			case 'four':
				return <TabFour />;
			default:
				return <></>;
		}
	};
	return (
		<div className="w-screen m-10 border border-gray-200 rounded-xl ">
			<>
				<TabNavComponent
					navDataConst={NAVBAR_DATA}
					// activeTab={defaultTabValue}
					isFullwidth
					getTabComponent={getTabComponent}
				/>
			</>
		</div>
	);
}

export default App;
