import {useEffect, useState} from 'react';

const TabNavComponent = ({
	navDataConst,
	getTabComponent,
	activeTab = '',
	isFullwidth = false,
}) => {
	const [currentTab, setCurrentTab] = useState(activeTab);
	const handleTabClick = value => {
		setCurrentTab(value);
	};

	useEffect(() => {
		setCurrentTab(activeTab);
	}, [activeTab]);
	return (
		<>
			<div className="w-full flex gap-4 p-4 relative ">
				{navDataConst?.map(navData => (
					<div
						className={` flex justify-center items-center ${
							navData?.isDisabled && 'pointer-events-none opacity-50'
						} ${
							currentTab === navData?.value
								? 'font-semibold text-blue-500 '
								: 'text-black cursor-pointer'
						} ${isFullwidth ? 'flex-1' : ''}`}
						name={navData?.value}
						onClick={() => {
							handleTabClick(navData?.value);
						}}>
						<p className="w-full flex justify-center items-center">
							{navData?.name}
						</p>
					</div>
				))}
				{/* <div className="h-[1px] w-full bg-gray-200 absolute top-full"></div> */}
			</div>
			<div className="p-4">{getTabComponent(currentTab)}</div>
		</>
	);
};

export default TabNavComponent;
