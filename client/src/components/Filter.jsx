const Filter = ({ filterText = "", filter = [], showFilter }) => {
  return (
    <div className={showFilter ? "" : "max-lg:hidden pb-14"}>
      <h4 className="font-medium textlg py-4">Search By {filterText}</h4>
      <ul className="space-y-4 text-gray-600">
        {filter.map((f, i) => (
          <li className="flex gap-3 items-center" key={i}>
            <input className="scale-125" type="checkbox" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
