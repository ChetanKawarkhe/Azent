function SideNavBar({countries,selectCountry, selectedCountry}) {
 
  const countriyElements = []
  for (const key in countries) {
    countriyElements.push(
      <li key={key}>
       <span className={selectedCountry === countries[key].data ? "sidebar-active-item": ""} data={countries[key].data} onClick={selectCountry}>{ countries[key].text}</span>

       {/* <span data={countries[key].data} onClick={selectCountry}>{ countries[key].text}</span> */}
      </li>
    )
  }
  return (
    <div>
      {countriyElements}
    </div>
  );
}

export default SideNavBar;
