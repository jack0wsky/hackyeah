import { useSelect } from "downshift";
import { useStore } from "../../../store";

const CitySelect = () => {
  const { updateCity } = useStore();

  const items = [
    { label: "Kraków", value: "cracow" },
    { label: "Warszawa", value: "warsaw" },
  ];

  const {
    getLabelProps,
    getToggleButtonProps,
    selectedItem,
    getMenuProps,
    isOpen,
    getItemProps,
  } = useSelect({
    items,
    onStateChange: ({ selectedItem }) =>
      updateCity(selectedItem?.label as string),
  });

  return (
    <label className='w-[200px]'>
      <label className='text-dark-blue' {...getLabelProps()}>City</label>
      <div className='border-1 border-black rounded-4'>
        <div className="w-full flex flex-col gap-1">
          <div
            className="p-2 bg-white flex justify-between cursor-pointer"
            {...getToggleButtonProps()}
          >
            <span>{selectedItem ? selectedItem.label : "Select city"}</span>
            <span className="px-2">{isOpen ? <>&#8593;</> : <>&#8595;</>}</span>
          </div>
        </div>
        <ul
          {...getMenuProps()}
          className="absolute w-72 p-0 bg-white shadow-md max-h-80 overflow-scroll z-[1]"
        >
          {isOpen &&
            items.map((item, index) => (
              <li key={`${item}${index}`} {...getItemProps({ item, index })}>
                <span>{item.label}</span>
              </li>
            ))}
        </ul>
      </div>
    </label>
  );
};

export default CitySelect;
