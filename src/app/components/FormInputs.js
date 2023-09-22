export const TextInput = ({
  label,
  type = "text",
  placeholder,
  name,
  id,
  value,
  onChange,
  required = false,
  min,
  max
}) => {
  return (
    <div>
      <div className="block space-y-1">
        <label htmlFor={name} className="font-semibold">
          {label}
        </label>
        <input
          className="form-input rounded border-gray-400 w-full"
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          required ={required}
         min={min}
         max={max}
        />
      </div>
    </div>
  );
};

export const TextAreaInput = ({
  label,
  placeholder,
  name,
  id,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div>
      <div className="block space-y-1">
        <label htmlFor={name} className="font-semibold">
          {label}
        </label>
        <textarea
          className="form-input rounded border-gray-400 w-full resize-none"
          rows="5"
          placeholder={placeholder}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          required ={required}
        />
      </div>
    </div>
  );
};

export const SelectInput = ({ label, name, id, options, value, onChange,  required = false, }) => {
  return (
    <div className="block space-y-1">
      {label && (
        <label htmlFor={name} className="font-semibold">
          {label}
        </label>
      )}
      <select
        className="form-input rounded border-gray-400 w-full"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required ={required}
      >
        <option className="py-2">Select an Option</option>
        {options.map((option, index) => (
          <option key={index} className="py-2" value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export const RadioInput = ({ name, id, label, value, onChange, checked,  required = false, }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        className="border-gray-400"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
        required ={required}
      />
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
    </div>
  );
};

export const CheckboxInput = ({
  name,
  id,
  label,
  value,
  onChange,
  checked,
  required = false,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        className="border-gray-400"
        type="checkbox"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
    </div>
  );
};
